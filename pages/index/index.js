Page({
  onShareAppMessage() {
    return {
      tile: '首页',
      path: 'pages/myindex/myindex'
    }
  },

  data: {
    desc: '一些描述',
    home_page_pics:[
      {
        "src":"/image/nurse.jpg"
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
    
    top_scroll_menu: ['菜单1', '菜单2', '菜单3', '菜单4', '菜单5', '菜单1'],
    information_stream_items:[
      {
        // "src":"/image/nurse.jpg",
        "name":"张三",
        "intro":"北京大学医学院中医学博士，擅长中医诊疗。从医十几年来，广受患者好评。",
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
  },



})
