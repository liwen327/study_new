/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2023-11-29 06:34:57
 * @LastEditors: liwz
 * @LastEditTime: 2023-12-01 14:29:05
 * @FilePath: /study/Users/liwenzhi/study/node/fs/readFile.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
// fs.readFile('file.txt',(err,data)=>{
//   if(err){
//     throw err
//   }
//   console.log('data: ',data) // 输出为buffer字符串
// })
// 异步读取 utf-8方式转为字符串
// fs.readFile('file.txt','utf-8',(err,data)=>{
//   if(err){
//     throw err
//   }
//   console.log('data: ',data)
// })

// toString()转为字符串
// fs.readFile('file.txt', (err, data) => {
//   if (err) {
//     console.log('读取失败！')
//     return
//   }
//   console.log('data: ', data.toString())
// })
// 同步读取
let data = fs.readFileSync('file.txt')
console.log('11: ', data.toString())
