/*
 * @Author: liwz
 * @Date: 2024-08-22 19:44:55
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-22 20:01:10
 * @FilePath: /study_new/nodejs/07express/03_中间件.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用对象
const app = new express()
const port = 3000
function recordMiddleware(req, res, next) {
  let { url, ip } = req
  // 将访问信息保存在文件中access.log
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip} \r\n`)

  // 调用next() 是为了让程序继续往下执行
  next()
}
app.use(recordMiddleware)

app.get('/home', (req, res) => {
  // 原生响应
  res.send('首页')
})

app.get('/detail', (req, res) => {
  // 原生响应
  res.send('详情页面')
})

// 所有路由不符合，即显示404界面
app.all('*', (req, res) => {
  res.end('404 not Found')
})

app.listen(port, () => {
  console.log(`Static page server running on http://localhost:${port}`)
})
