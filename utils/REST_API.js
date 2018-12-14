// 读取数据API
function read(obj_url,callback) {
  wx.request({
    url: obj_url,
    method: 'GET',
    success: function(res){
      console.log('read ' + obj_url + ' success!');
      //res.data里才包含了类
      callback && callback(res.data);
    },
    fail: function(error){
      console.log('read ' + obj_url + ' fail!');
      console.log('fail msg: ' + error);
    }
  })
}

module.exports = {
  read:read,
}