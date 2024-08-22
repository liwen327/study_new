/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2023-11-29 06:01:33
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-20 17:06:08
 * @FilePath: /reactJs/Users/liwenzhi/study/node/fs/fs.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 1、引入模块
const fs = require('fs')
// 2、写入文件
fs.writeFile('./file.txt', '这是一个fs创建的文件。', err => {
  if (err) {
    console.log('写入失败！')
    return
  }
  console.log('写入成功！')
})
// 同步写入文件
fs.writeFileSync('./data.txt', 'test')
// // // 追加写入
// fs.appendFile('file.txt', '这部分是追加的内容！', err => {
//   if (err) {
//     console.log('追加失败！')
//     return
//   }
//   console.log('追加成功！')
// })
// writeFile实现追加写入
fs.writeFile('file.txt', 'writeFile追加写入的内容。', { flag: 'a' }, err => {
  if (err) {
    console.log('追加写入失败！')
    return
  }
  console.log('追加写入成功！')
})
console.log(1 + 1)
