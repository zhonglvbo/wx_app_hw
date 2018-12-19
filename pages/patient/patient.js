const texts = [
  '就诊时间:\n 2018年9月11日\n 就诊结果:\n 肠胃炎\n 检查结果:\n 确诊肠胃炎\n 药单:\n 肠胃炎药\n',
  '就诊时间:\n 2018年9月20日\n 就诊结果:\n 感冒\n 检查结果:\n 确诊感冒\n 药单:\n 阿司匹林\n',
]

Page({/*
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'page/component/pages/text/text'
    }
  },*/

  data: {
    patient:'张豪',
    text: texts[0],
    
  },
  extraLine: [],

  next(e) {
   
    this.setData({text: texts[1]})
    
  },
  
  
  
  before() {
    this.setData({ text: texts[0] })
    
  }
})
