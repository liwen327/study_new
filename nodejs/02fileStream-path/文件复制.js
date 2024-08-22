/*
 * @Author: liwz
 * @Date: 2024-08-20 19:05:25
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-20 19:47:10
 * @FilePath: /reactJs/Users/liwenzhi/study/node/fs/文件复制.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const fs = require('fs')
/* // 方式一  ReadFile
// 读取文件
let data = fs.readFileSync('./data.txt')
// 写入文件
fs.writeFileSync('./data-2.txt', data) */

// 方式二：流式操作
// 创建读取流对象
const rs = fs.createReadStream('./doc.docx')

// 创建写入流对象
const ws = fs.createWriteStream('./doc-2.docx')

// 绑定data事件
rs.on('data', chunk => {
  ws.write(chunk)
})

// 方式三：pipe管道复制文件的方式

rs.pipe(ws)
