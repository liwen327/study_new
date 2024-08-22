/*
 * @Author: liwz
 * @Date: 2024-08-22 10:37:54
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-22 10:44:32
 * @FilePath: /study_new/nodejs/05nodejsWebServer/server.js
 * @Description:  用node启动一个服务
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const http = require('http')
const url = require('url')

// 2.创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求方法
  let { method } = request
  // 获取请求的url路径
  let { pathname } = new URL(request.url, 'http://127.0.0.1')
  response.setHeader('content-type', 'text/html;charset=utf-8')
  if (method == 'GET' && pathname == '/login') {
    response.end('登录界面')
  } else if (method == 'GET' && pathname == '/reg') {
    response.end('注册界面')
  } else {
    response.end('Not Found')
  }
})

// 3.监听端口，启动服务
server.listen(9000, () => {
  console.log('服务启动，端口：9000，启动中。。。。')
})
