let Category = require('./controllers/category')
let Course = require('./controllers/course')
let User = require('./controllers/user')
let Order = require('./controllers/order')

module.exports = function(app) {
  // curl test
  // curl -X POST -H 'Content-Type: application/json' -d '{"name": "yhyecho"}' localhost:3000/category
  // category
  app.post('/category', Category.add)
  app.get('/categorys', Category.list)
  app.delete('/category', Category.del)

  // course
  app.post('/course/new', Course.new)
  app.get('/course/detail/:id', Course.detail)
  app.get('/courses', Course.findAll)
  app.delete('course/delete/:id', Course.del)

  // user
  app.post('/user/signup', User.signup)
  app.post('/user/signin', User.signin)
  app.get('/user/logout', User.logout)
  app.get('/user/:userId', User.getUserById)

  // order
  app.get('/orders', Order.list)
  app.post('/order/new', Order.add)
}