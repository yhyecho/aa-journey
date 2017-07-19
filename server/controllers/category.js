let Category = require('../models/category')
// add new category
exports.add = function(req, res) {
  let _category = req.body
  let category = new Category(_category)
  category.save(function(err, category) {
    if(err) return res.status(403).json({err, msg: '添加分类失败'})
    res.json({
      msg: '分类添加成功',
      category
    })
  })
}

exports.list = function(req, res) {
  Category.find({}, 'name', function(err, cats) {
    if(err) return res.status(403).json({err, msg: '获取分类列表失败'})
    res.json({
      msg: '获取分类列表成功',
      cats
    }) 
  })
}