let Order = require('../models/order')

// add new order
exports.add = function(req, res) {
  let orderObj = req.body
  let order = new Order(orderObj)
  order.save(function(err, order) {
    if(err) return res.status(403).json({err, msg: '添加订单失败'})
    res.json({
      msg: '订单添加成功',
      order
    })
  })
}

// get orderList
exports.list = function(req, res) {
  Order.find({}, function(err, orders) {
    if(err) return res.status(403).json({err, msg: '获取订单列表失败'})
    res.json({
      orders,
      msg: '获取订单列表成功'
    })
  })
}