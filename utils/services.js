const baseUrl = 'http://47.107.241.57:8080/Entity/U1c735ba223c59f/MobMedSys/';

const GetUsers = function(callBack) {
  var obj = {
    url: baseUrl + 'Users',
    method: 'GET',
    data: {},
    callBack: callBack
  }
  restfulService(obj)
}

const AddUser = function(callBack, loginName, pwdhash, realName, gender, age) {
  // always adds user as patient via mobile app
  var passing_obj = {
    userobj: {
      'username': loginName,
      'pwdhash': pwdhash,
    },
    patientobj: {
      'name': realName,
      'gender': gender,
      'age': age
    },
    callBack: callBack
  }  
  // create/init a vector
  // create a patient obj
  // bind vector to patient
  InitVector(passing_obj)
}

function InitUser(PatientRes, passing_obj) {
  if (PatientRes.statusCode != 200) {
    passing_obj.callBack(PatientRes)
    return
  }
  passing_obj.userobj['idprojection'] = PatientRes.data.id
  var obj = {
    url: baseUrl + 'users/',
    method: 'POST',
    data: passing_obj.userobj,
    callBack: passing_obj.callBack 
  }
  restfulService(obj, passing_obj)
}

function InitPatient(VecRes, passing_obj) {
  // console.log(VecRes)
  if (VecRes.statusCode != 200) {
    console.log('network error')
    passing_obj.callBack(VecRes)
    return
  }
  passing_obj.patientobj['vectorize'] = {'id': VecRes.data.id}
  var obj = {
    url: baseUrl + 'patient/',
    method: 'POST',
    data: passing_obj.patientobj,
    callBack: InitUser
  }
  restfulService(obj, passing_obj)
}

function InitVector(passing_obj) {
  var dataobj = {
    'a0': 2 * Math.random() - 1,
    'a1': 2 * Math.random() - 1,
    'a2': 2 * Math.random() - 1,
    'a3': 2 * Math.random() - 1,
    'a4': 2 * Math.random() - 1
  }
  var obj = {
    url: baseUrl + 'vectorization/',
    method: 'POST',
    data: dataobj,
    callBack: InitPatient
  }
  restfulService(obj, passing_obj)
}

const ModUser = function(callBack, dataobj, passing_obj) {
  var obj = {
    url: baseUrl + 'users/' + dataobj['id'],
    method: 'PUT',
    data: dataobj,
    callBack: callBack
  }
  restfulService(obj, passing_obj)
}

const SrchUser = function(callBack, passing_obj) {
  console.log(passing_obj)
  var obj = {
    url: baseUrl + 'users/?Users.username=' + passing_obj.loginName,
    method: 'GET',
    data: {},
    callBack: callBack
  }
  restfulService(obj, passing_obj)
}

// const GetDocClassList = function(callBack, passing_obj) {
//   var obj = {
//     url: baseUrl + 'Docclass',
//     method: 'GET',
//     data: {},
//     callBack: callBack
//   }
//   restfulService(obj, passing_obj)
// }
const GetDocClassList = function(callBack) {
  GetDocClassListStatic(callBack)
}
function fetchDoclist(DocClassRes, callBack) {
  if (DocClassRes.statusCode == 200) {
    var doclist = DocClassRes.data.doclist
    DocClassRes.data = doclist
  }
  callBack(DocClassRes)
}

const GetDocListByClassId = function(callBack, classId) {
  // var obj = {
  //   url: baseUrl + 'Docclass/' + classId,
  //   method: 'GET',
  //   data: {},
  //   callBack: fetchDoclist
  // }
  // restfulService(obj, callBack)
  GetDocListByClassIdStatic(callBack, classId)
}

const GetDocListByClassIdStatic = function(callBack, classId) {
  callBack({
    statusCode: 200,
    data: [
      {
        name: '马云',
        age: 8,
        id: 3938473,
        vectorize: {
          a0: 2 * Math.random() - 1,
          a1: 2 * Math.random() - 1,
          a2: 2 * Math.random() - 1,
          a3: 2 * Math.random() - 1,
          a4: 2 * Math.random() - 1
        },
        queue: [
          {
            date: '2018/12/10',
            ampm: 0,
            status: 0
          },
          {
            date: '2018/12/09',
            ampm: 1,
            status: 1 //full
          }
        ]  
      },
      {
        name: '雷军',
        age: 8,
        id: 2938374,
        vectorize: {
          a0: 2 * Math.random() - 1,
          a1: 2 * Math.random() - 1,
          a2: 2 * Math.random() - 1,
          a3: 2 * Math.random() - 1,
          a4: 2 * Math.random() - 1
        },
        queue: [
          {
            date: '2018/12/10',
            ampm: 0,
            status: 0
          },
          {
            date: '2018/12/09',
            ampm: 1,
            status: 0 //full
          }
        ]  
      }
    ]
  })  
}

function Auth(res, passing_obj) {
  //console.log(res)
  //console.log(passing_obj)
  var re = new Object
  if (res.statusCode != 200) {
    re['status'] = 'error'
    re['errmsg'] = '网络错误'
  } else {
    if (res.data.Users && res.data.Users.length == 1) {
      var pwdhash = res.data.Users[0].pwdhash
      if (pwdhash == passing_obj.password) {
        re['status'] = 'success'
        // re['loginName'] = passing_obj.loginName
        re['loginObj'] = res.data.Users[0]
      } else {
        re['status'] = 'error'
        re['errmsg'] = '密码错误'
      }
    } else {
      re['status'] = 'error'
      re['errmsg'] = '用户名错误'
    }  
  }
  passing_obj.callBack(re)
}

const AuthUser = function(callBack, loginObj) {
  var obj = loginObj
  obj['callBack'] = callBack
  SrchUser(Auth, obj)
}

const GetDocClassListStatic = function(callBack) {
  callBack({
    data: {
      Docclass:
      [
        {
          id: 102938471,
          name: '门诊内科',
          desc: '',
          classtype: 1,
          doclist: [
            {
              id: 22452525,
              name: '董明珠'
            },
            {
              id: 39393939,
              name: '罗永浩'
            }
          ]
        },
        {
          id: 393828212,
          name: '门诊外科',
          desc: '',
          classtype: 1,
          doclist: [
            {
              id: 29384934,
              name: '雷军'
            },
            {
              id: 39482939,
              name: '马云'
            }
          ]
        }
      ]
    } 
  })

}

const GetDocByIdStatic = function(callBack, id) {
  callBack({
    statusCode: 200,
    data: {
      id: 22452525,
      name: '董明珠',
      type: 'Doctor',
      profession: '董明珠，出生于江苏南京，企业家，先后毕业于安徽芜湖职业技术学院、中南财经政法大学EMBA2008级、中国社会科学院经济学系研究生班、中欧国际工商学院EMBA',
      queue: [
        {
          id: 1111,
          date: '2018/12/07',
          ampm: 0,
          status: 1
        },
        {
          id: 1112,
          date: '2018/12/07',
          ampm: 1,
          status: 0
        }
      ]
    }
  })
}

//const GetDocById = function(callBack, id) {}
const GetDocById = function(callBack, id) {
  GetDocByIdStatic(callBack, id)
}

const AddReg = function (callBack, docid, date, ampm, patientid) {
  //console.log(docid, date, ampm, patientid)
  AddRegStatic(callBack, docid, date, ampm, patientid)
}

const AddRegStatic = function (callBack, docid, date, ampm, patientid) {
  callBack({
      statusCode: 200,
      data: {
        id: 3928940,
        ispaid: 0,
        date: '2018/12/07',
        price: '8.7',
        ampm: 1,
        regtoclass: {
          id: 394837,
          name: '门诊内科'
        }, 
        regtodoc: {
          id: 475943,
          name: '董明珠'
        }
      }
  })
}

const GetRegById = function (callBack, id) {
  AddRegStatic(callBack)
}

const PayReg = function(callBack, id) {
  PayRegStatic(callBack, id)
}

const PayRegStatic = function(callBack, id) {
  callBack({
    statusCode: 200,
    data: {}
  })
}


function restfulService (req_obj, passing_obj) {
  //obj: 4 attri at least: url, method, data, callBack
  wx.request({
    url: req_obj.url,
    method: req_obj.method,
    data: JSON.stringify(req_obj.data),
    complete(re) {
      req_obj.callBack(re, passing_obj)
    }
  })
}

module.exports = {
  AddUser,
  ModUser,
  GetUsers,
  SrchUser,
  AuthUser,
  GetDocClassList,
  GetDocListByClassId,
  GetDocById,
  GetRegById,
  AddReg, 
  PayReg
}

