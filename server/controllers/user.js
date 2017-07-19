let User = require('../models/user')
// 注册
exports.signup = function(req, res) {
  let _user = req.body
  User.findOne({username: _user.username}, function(err, user) {
    if(err) return res.status(403).json({err, msg: '注册失败'})
    if(user) {
      return res.status(403).json({msg: '用户名已存在，请重新注册'})
    } else {
      // 这里不用let声明，是因为函数的形参有了这个变量，为null
      user = new User(_user)
      user.save(function(err, user) {
        if(err) return res.status(403).json({err, msg: '注册失败'})
        res.json({
          userId: user._id,
          userName: user.username,
          msg: '注册成功'
        })  
      })
    }  
  })
}

// 登录
exports.signin = function(req, res) {
  let _user = req.body
  User.findOne({username: _user.username}, function(err, user) {
    if(err) return res.status(403).json({err, msg: '登录失败'})
    if(!user) {
      return res.status(401).json({msg: '登录失败，用户不存在'})
    }
    user.comparePassword(_user.password, function(err, isMatch) {
      if(err) return res.status(403).json({err, msg: '登录失败'})
      if(isMatch) {
        res.json({
          userId: user._id,
          userName: user.username,
          msg: '登录成功'
        })
      } else {
        res.status(401).json({msg: '密码错误，请核对后重试'})
      } 
    })  
  })
}

// 登出功能
exports.logout = function(req, res) {
  res.json({msg: '登出成功'})
}