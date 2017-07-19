const Course = require('../models/course')
const Category = require('../models/category')

// admin new course
exports.new = function(req, res) {
  let courseObj = req.body
  let categoryId = courseObj.categoryId
  Category.findById(categoryId, function(err, category) {
    if(err) return res.status(403).json({err, msg: '分类获取失败'})
    if(!category) {
      res.status(403).json({
        err,
        msg: '分类不存在'
      })
    } else {
      let course = new Course(courseObj)
      course.save(function(err, newCourse) {
        if(err) return res.status(403).json({err, msg: '新增课程失败'})
        category.courses.push(newCourse._id)
        category.save(function(err) {
          if(err) return res.status(403).json({err, msg: '分类添加课程失败'})
          res.json({
            msg: '新增课程成功',
            course: newCourse
          })
        })  
      })
    }
  })
}

// course detail
exports.detail = function(req, res) {
  let id = req.params.id
  Course.findById(id).populate('category', 'name').exec(function(err, course) {
    if(err) return res.status(403).json({err, msg: '获取课程详情失败'})
    res.json({
      msg: '获取课程详情成功',
      course: course
    })
  })
}

// delete course
exports.del = function(req, res) {
  let id = req.params.id
  if(!id) {
    res.status(403).json({
      msg: '缺少课程id'
    })
  } else {
    Course.remove({_id: id}, function(err, course) {
      if(err) return res.status(403).json({err, msg: '删除课程失败'})
      res.json({
        msg: '删除课程成功',
        course: course
      })  
    })
  }
}

// 获取所有课程或相关分类下的课程
exports.findAll = function(req, res) {
  Course.count({}, function(err, totalCount) {
    if(err) return res.status(403).json({err, msg: '获取课程总数失败'})
    Course.find({}).populate('category', 'name').exec(function(err, courses) {
      if(err) return res.status(403).json({err, msg: '获取课程失败'})
      res.json({
        msg: '获取商品成功',
        courses,
        totalCount
      })
    })
  })
}