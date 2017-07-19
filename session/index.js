const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const pug = require('pug')

const app = express()

app.set('view engine', 'pug')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended:false }))

app.get('/', function(req, res) {
  let currentUser = req.session.username
  res.render('index.pug', { currentUser })
})

app.get('/login', function(req, res) {
  res.sendFile('login.html', { root: 'public' })
})

app.get('/logout', function(req, res) {
  req.session.destroy()
  res.redirect('/')
})

app.post('/login', function(req, res) {
  let username = req.body.username
  req.session.username = username
  res.redirect('/')
})

app.listen(3000, function() {
  console.log('running on port 3000...')
})