const express = require('express')
const app = express()

// 用跟本文件平级的build文件夹作为静态文件的存放位置
// 没有这一行, 后面sendFile的index.html就找不到
app.use(express.static('build'))

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: 'build'})
})

app.listen(8080, function(err) {
  console.log('Listening at http://localhost:8080')
})