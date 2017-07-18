const express = require('express')
const session = require('express-session')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.post('/login', function(req, res) {
  console.log(req.body.username)
  let username = req.body.username
  req.session.username = username
  res.send(req.session.username)
})

app.get('/hello', function(req, res) {
  res.send(req.session.username)
})

app.listen(3000, function() {
  console.log('running on port 3000...')
})