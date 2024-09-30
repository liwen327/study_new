/*
 * @Author: liwz
 * @Date: 2024-09-30 09:45:25
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-30 09:58:32
 * @FilePath: /study_new/promise/07-async和await结合实践/async_await.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
let fs = require('fs')

// 这是不使用async 和await的情况

/* fs.readFile('./resource/a.text', (err, data1) => {
  if (err) throw err
  fs.readFile('./resource/b.text', (err, data2) => {
    if (err) throw err
    fs.readFile('./resource/c.text', (err, data3) => {
      if (err) throw err
      console.log(data1 + data2 + data3)
    })
  })
}) */

// 下面是使用async和await的代码

const util = require('util')
const mineReadFile = util.promisify(fs.readFile)
async function main() {
  // 如果有错误，则使用try catch来捕获异常
  try {
    let data1 = await mineReadFile('./resource/a.text')
    let data2 = await mineReadFile('./resource/b.text')
    let data3 = await mineReadFile('./resource/c.text')
    console.log(data1 + data2 + data3)
  } catch (e) {}
}

main()
