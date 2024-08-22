/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2023-11-30 09:43:46
 * @LastEditors: liwz
 * @LastEditTime: 2023-12-01 15:56:32
 * @FilePath: /study/Users/liwenzhi/study/node/http/express.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
const express = require('express')

const app = express()

app.get('/test', (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('test  你好！ ')
})
app.post('/login', (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('login  你好！ ')
})
app.get('/request', (req, res) => {
  console.log(req.method)
  console.log('url: ', req.url)
  console.log('httpVersion:', req.httpVersion)
  console.log('path: ', req.path)
  console.log('query: ', req.query)
  res.end('test  test ')
})
// 匹配所有的方法
// app.all('/test',(req,res)=>{
//   res.end('test  test ')
// })
// // 404 not fond
// app.all('*',(req,res)=>{
//   res.end('404 not fond')
// })
// :id参数
let a = 1111
app.get('/:id.html', (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  console.log('req: ', req.params.id)
  res.end(`dfsdfdki${a}`)
})

app.listen(3000, () => {
  console.log('服务已经启动，3000端口。。。')
})
