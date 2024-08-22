/*
import reportWebVitals from '../../react-staging/src/reportWebVitals';
 * @Author: liwz
 * @Date: 2024-08-22 10:59:04
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-22 14:36:49
 * @FilePath: /study_new/nodejs/07express/01_express.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const express = require('express')

// 创建应用对象
const app = new express()
const port = 3000

// 创建路由

app.get('/home', (req, res) => {
  res.end('hello express')
})

app.get('/', (req, res) => {
  res.end('home')
})

app.post('/login', (req, res) => {
  res.end('login   login   login')
})

app.all('/test', (req, res) => {
  res.end('test')
})

app.get('/request', (req, res) => {
  // console.log(req.method)
  // console.log(req.url)
  // console.log(req.path)
  // console.log(req.httpVersion)

  // console.log(req.headers)
  // console.log(req.query)

  console.log(req.get('host'))
  res.end('request')
})

// 路由参数
app.get('/:id.html', (req, res) => {
  console.log(req.params.id)
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('商品详情')
})

// 所有路由不符合，即显示404界面
app.all('*', (req, res) => {
  res.end('404 not Found')
})

app.listen(port, () => {
  console.log(`Static page server running on http://localhost:${port}`)
})
