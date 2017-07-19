let Category = require('./controllers/category')
module.exports = function(app) {
  // curl test
  // curl -X POST -H 'Content-Type: application/json' -d '{"name": "yhyecho"}' localhost:3000/category
  app.post('/category', Category.add)
}