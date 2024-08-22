/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2023-11-30 09:43:46
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2023-12-01 07:24:25
 * @FilePath: /study_work/pre-node/pre-node/http/express.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
const express= require('express')

const app = express()

app.get('/other',(req,res)=>{
  // res.setHeader('content-type','text/html;charset=utf-8')
  // res.end('test  你好！ ')
  // res.download(__dirname,'查询上级接口.txt')
  // res.json({
  //   name:"Jack",
  //   years:'20'
  // })
  res.sendFile(__dirname+'/test.html')
})

app.listen(3000,()=>{
  console.log('服务已经启动，3000端口。。。')
})