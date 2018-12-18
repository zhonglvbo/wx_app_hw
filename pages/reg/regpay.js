// pages/reg/regpay.js
var service = require('../../utils/services.js')
Page({
  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    //console.log(options.regid)
    this.setData({
      regid: options.regid
    })
    service.GetRegById(function (res) {
      if (res.statusCode != 200) {
        wx.showToast({
          title: '网络错误，请稍后重试',
          icon: 'none',
          duration: 2000
        })
        return
      }
      //console.log(res)
      var pages = getCurrentPages(), p = pages[pages.length-1]
      p.setData({
        regdate: res.data.date + (res.data.ampm == '0'?'上午':'下午'),
        //regtoclass: res.data.regtoclass.name,
        //regtodoc: res.data.regtodoc.name,
        price: res.data.price
      })
      service.GetDocById(function(re) {
        //console.log(re)
        var pages = getCurrentPages(), p = pages[pages.length - 1]
        p.setData({
          regtodoc: re.data.name
        })
      }, res.data.regtodoc)
      service.GetClassById(function(re){
        //console.log(re)
        var pages = getCurrentPages(), p = pages[pages.length - 1]
        p.setData({
          regtoclass: re.data.name
        })
      }, res.data.regtoclass)
    }, options.regid)
  },

  pay: function () {
    wx.showLoading({
      title: '支付中...',
      mask: true
    })
    service.PayReg(payCallBack, this.data.regid)
  }
})

function payCallBack(res) {
  wx.hideLoading()
  if (res.statusCode == 200) {
    wx.showToast({
      title: '支付成功',
      duration: 2000
    })
    setTimeout(
      function() {
        wx.switchTab({
          url: '../index/index'
        })      
    }, 2000)
  } else {
    wx.showToast({
      title: '请稍后再试',
      icon: 'none',
      duration: 2000
    })
  } 
}