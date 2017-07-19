const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
let SALT_WORK_FACTOR = 10
const ObjectId = mongoose.Schema.Types.ObjectId

const UserSchema = new mongoose.Schema(
  {
    username: {type: String, maxlength: 18},
    password: String,
    role: { type: Number, default: 0 } 
  },
  {timestamps: true}
)
// 保存用户前的钩子函数
UserSchema.pre('save', function(next) {
  let user = this
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err)
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err)
      user.password = hash
      next()
    })
  })
})
// user 的实例方法
UserSchema.methods = {
  comparePassword: function(_password, cb) {
    bcrypt.compare(_password, this.password, function(err, isMatch) {
      if(err) return cb(err)
      cb(null, isMatch)
    })
  }
}

module.exports = mongoose.model('User', UserSchema)