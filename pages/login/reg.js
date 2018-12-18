const service = require('../../utils/services.js')
// pages/login/reg.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit(e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let obj = e.detail.value, loginName = obj.loginName, pwd = obj.password, realname = obj.RealName, gender = obj.RealName, age = obj.age, pwdRe = obj.passwordconfirm
    if (pwd != pwdRe) {
      wx.showToast({
        title: '密码不一致',
        icon: 'none'
      })
      return
    }
    wx.showLoading({
      title: '注册中...',
      mask: true
    })
    service.AddUser(function(res) {
      wx.hideLoading()
      if (res.statusCode != 200) {
        wx.showToast({
          title: '注册失败',
          icon: 'none'
        })
        return
      }
      wx.redirectTo({
        url: 'login',
      })
    }, loginName, pwd, realname, 1, parseInt(age))

  },

  formReset(e) {
    this.setData({
      chosen: ''
    })
  },
  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})