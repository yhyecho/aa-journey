const mongoose = require('mongoose')
const Schema = mongoose.Schema

let OrderSchema = new Schema({
  userId: String,
  courses: Array
})

module.exports = mongoose.model('Order', OrderSchema)