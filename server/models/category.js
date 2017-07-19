const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CategorySchema = new Schema(
  {
    name: {type: String, unique: true},
    courses: [{
      type: ObjectId,
      ref: 'Course'
    }]
  },
  {timestamps: true}
)

module.exports = mongoose.model('Category', CategorySchema)