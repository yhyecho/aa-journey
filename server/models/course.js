const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CourseSchema = new Schema({
  name: String,
  summary: String,
  price: Number,
  poster: String,
  category: {
    // 注意，这里是反向引用，可以节省数据库查询时间
    type: ObjectId,
    ref: 'Category'
  }
})

module.exports = mongoose.model('Course', CourseSchema)