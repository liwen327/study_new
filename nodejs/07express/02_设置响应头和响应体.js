/*
 * @Author: liwz
 * @Date: 2024-08-22 14:37:57
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-22 15:00:14
 * @FilePath: /study_new/nodejs/07express/02_设置响应头和响应体.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const express = require('express')

// 创建应用对象
const app = new express()
const port = 3000

app.get('/response', (req, res) => {
  // 原生响应
  // res.statusCode = 404
  // res.statusMessage = 'love'
  // res.setHeader('xxx', 'yyyy')
  // res.write('hello express')
  // res.end('response')

  // express响应
  res.status(500)
  res.set('aaa', 'bbb')
  res.send('你好，express')
  // 还可以连写
  res.status(500).set('aaa', 'bbb').send('你好，express')
})

// 所有路由不符合，即显示404界面
app.all('*', (req, res) => {
  res.end('404 not Found')
})

app.listen(port, () => {
  console.log(`Static page server running on http://localhost:${port}`)
})
