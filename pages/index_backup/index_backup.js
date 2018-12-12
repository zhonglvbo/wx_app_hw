//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userName: '游客'
  },
  //事件处理函数
  bindImgTap: function(obj) {
    //console.log(obj)
    var tar = obj.currentTarget.id
    if (tar == "guahao") {
      wx.navigateTo({
        url: '../reg/carereg'
      })
    }
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        userName: app.globalData.userInfo.patientinfo.name ? app.globalData.userInfo.patientinfo.name: '游客',
        hasUserInfo: true
      })
      //console.log(this.data.userInfo)
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    //app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

// wx.request({
//   url: 'http://47.107.241.57:8080/Entity/U1c735ba223c59f/MobMedSys/Users/1543900729061',
//   method: 'DELETE',
//   success: res=>{
//     console.log(res)
//   }
// })


//const service = require('../../utils/services.js')
// function RegUserHandleExample(res) {
//   console.log(res)
//   if (res.statusCode != 200) {
//     // error handle
//   } {
//     // go on login
//   }
// }

// service.AddUser(RegUserHandleExample, '13512345678', 'zxcdsaqwe', '张三', 50, 0)
// function GetUsersExample(res) {
//   //console.log(res.data.Users[0])
//   if (res.statusCode != 200) {
//     //error handle
//   } else {
//     var obj = res.data.Users[0]
//     obj.pwdhash = 'zaq!@wsx'
//     service.ModUser(ModUserHandleExample, obj)
//   }
// }

// function ModUserHandleExample(res) {
//   console.log(res)
// }

// service.GetUsers(GetUsersExample)
// function SearchUserHandleExample(res) {
//   if (res.statusCode != 200) {

//   } else {
//     console.log(res)
//   }
// }
// service.SrchUser(SearchUserHandleExample, 'xiaoming@sjtu')
//console.log(wx.getStorageSync('loginObj'))