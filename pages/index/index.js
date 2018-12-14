// const service = require('../../utils/services.js')
const rest_api = require('../../utils/REST_API.js')
Page({
  onShareAppMessage() {
    return {
      tile: '首页',
      path: 'pages/myindex/myindex'
    }
  },

  data: {
    desc: '一些描述',
    home_page_pics: [{
        "src": "/image/nurse.jpg"
      },
      {
        "src": "/image/nurse.jpg"
      },
      {
        "src": "/image/child.jpg"
      },
      {
        "src": "/image/child.jpg"
      }
    ],

    top_scroll_menu: [{
        "name": "医生",
        "menu_func": "show_doctor",
      },
      {
        "name": "健康信息",
        "menu_func": "show_information",
      },
      {
        "name": "药物信息",
        "menu_func": "show_drags",
      },
      {
        "name": "检查介绍",
        "menu_func": "show_examinations",
      },
    ],
    information_stream_items: [{
        "Doctor": [
          {
            // "src":"/image/nurse.jpg",
            "name": "张三",
            "intro": "北京大学医学院中医学博士，擅长中医诊疗。从医十几年来，广受患者好评。",
          },
          {
            "src": "/image/child.jpg",
            "name": "李四",
            "intro": "北京大学医学院中医学博士，擅长中医诊疗。从医十几年来，广受患者好评。",
          },
          {
            "src": "/image/nurse.jpg",
            "name": "王五",
            "intro": "北京大学医学院中医学博士，擅长中医诊疗。从医十几年来，广受患者好评。",
          },
          {
            "src": "/image/unknow_doctor_female.png",
            "name": "赵六",
            "intro": "北京大学医学院中医学博士，擅长中医诊疗。从医十几年来，广受患者好评。北京大学医学院中医学博士，擅长中医诊疗。从医十几年来，广受患者好评。北京大学医学院中医学博士，擅长中医诊疗。从医十几年来，广受患者好评。北京大学医学院中医学博士，擅长中医诊疗。从医十几年来，广受患者好评。",
          },
        ]
      }
    ]
  },


  onLoad: function() {
    var doctor_url = 'http://47.107.241.57:8080/Entity/U1c735ba223c59f/MobMedSys/Doctor/';
    rest_api.read(doctor_url, this.doctor_obj);
  },
  doctor_obj: function(res) {
    var that = this;
    that.setData({
      information_stream_items: res,
    });
    console.log('doctor_obj:');
    console.log(res);
  },

  show_doctor() {
    console.log("show_doctor work!");
    var doctor_url = 'http://47.107.241.57:8080/Entity/U1c735ba223c59f/MobMedSys/Doctor/';
    rest_api.read(doctor_url, this.doctor_obj);
  },
  show_information() {
    console.log("show_information work!");
    var doctor_url = 'http://47.107.241.57:8080/Entity/U1c735ba223c59f/MobMedSys/Doctor/';
    rest_api.read(doctor_url, this.doctor_obj);
  },
  show_drags() {
    console.log("show_drags work!");
    var doctor_url = 'http://47.107.241.57:8080/Entity/U1c735ba223c59f/MobMedSys/Doctor/';
    rest_api.read(doctor_url, this.doctor_obj);
  },
  show_examinations() {
    console.log("show_examination work!");
    var doctor_url = 'http://47.107.241.57:8080/Entity/U1c735ba223c59f/MobMedSys/Doctor/';
    rest_api.read(doctor_url, this.doctor_obj);
  },

})