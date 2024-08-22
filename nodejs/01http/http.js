/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2023-11-24 09:25:38
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-21 16:28:16
 * @FilePath: /reactJs/Users/liwenzhi/study/node/http/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 1.导入http内置模块
const http = require('http')
const url = require('url')
// 创建web服务器实例
const server = http.createServer((request, response) => {
  // 获取请求头
  // console.log('request: ', request.headers)
  // 获取url
  console.log('request: ', request.url)

  let res = url.parse(request.url, true)

  // 路径
  let pathname = res.pathname
  console.log('pathname: ', pathname)

  // 查询字符串
  let keyword = res.query.keyword
  console.log('keyword: ', keyword)
  // 设置响应头
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('你好！ nodemon  333') //设置响应体,并结束响应
})

// 3.监听端口，启动服务
server.listen(9000, () => {
  // 当服务启动成功后才会执行
  console.log('服务已经启动。。。。')
})
