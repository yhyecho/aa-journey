const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
let routes = require('./routes')

// cross-origin
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// db connect
let dbURL = 'mongodb://localhost:27017/aa-journey'
mongoose.Promise = global.Promise
mongoose.connect(dbURL)
let db = mongoose.connection
db.once('open', function() {
  console.log('mongodb connect success...')
})

// add router
routes(app)

// server start
app.listen(3000, function() {
  console.log('running on port 3000')
})

