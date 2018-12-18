const texts = [
  '血压:\n 122\n 血糖:\n 189\n 体温:\n 37',
]

  Page({
  /*
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'page/component/pages/text/text'
    }
  },*/


  data: {
   /* patient: '张豪',
    text: texts[0],*/
    list:[
      {
        id: '血常规',
        checkname: '血常规',
        price: 50,
        open:false,
        pages: ['支付', '查看检查报告'],
        information: '检查血液'

      },
      {
        id: '肝功能',
        checkname: '肝功能',
        price: 35,
        open:false,
        pages: ['支付', '查看检查报告'],
        information: ''
      },
      {
        id: '心电图',
        checkname: '心电图',
        price: 40,
        open:false,
        pages: ['支付', '查看检查报告'],
        infrmation: ''
      },
      {
        id: '腹部彩超',
        checkname: '腹部彩超',
        price: 40,
        open:false,
        pages: ['支付', '查看检查报告'],
        infrmation: ''
      },
      {
        id: '血压',
        checkname: '血压',
        price: 40,
        open:false,
        pages: ['支付', '查看检查报告'],
        infrmation: ''
      },
      {
        id: '胸透',
        checkname: '胸透',
        price: 40,
        open:false,
        pages: ['支付', '查看检查报告'],
        infrmation: ''
      },
      {
        id: '便常规',
        checkname: '便常规',
        price: 40,
        open:false,
        pages: ['支付', '查看检查报告'],
        infrmation: ''
      },
      {
        id: '血糖',
        checkname: '血糖',
        price: 40,
        open:false,
        pages: ['支付', '查看检查报告'],
        infrmation: ''
      },
      {
        id: '血脂',
        checkname: '血脂',
        price: 40,
        open:false,
        pages: ['支付', '查看检查报告'],
        infrmation: ''
      }

    ],

    
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    console.log(list, id)
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }

  /*next(e) {

    this.setData({ text: texts[1] })

  },*/



 /* before() {
    this.setData({ text: texts[0] })

  }*/
})
