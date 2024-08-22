/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2023-11-24 07:25:38
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2023-11-30 06:11:59
 * @FilePath: /study_work/pre-node/pre-node/http/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')
const server = http.createServer((request,response)=>{
  response.setHeader('content-type','text/html;charset=utf-8');
  response.end('你好 http Server')   //设置响应体
})

// 监听端口，启动服务
server.listen(9000,()=>{
  console.log('服务已经启动。。。。')
})