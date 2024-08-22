/*
 * @Author: liwz
 * @Date: 2024-08-20 19:50:19
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-20 20:01:45
 * @FilePath: /reactJs/Users/liwenzhi/study/node/fs/文件重命名也移动.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const fs = require('fs')

// 重命名文件
// fs.rename('./data.txt', 'data-01.txt', err => {
//   if (err) {
//     console.log('重命名错误！')
//     return
//   }
//   console.log('重命名成功！')
// })

// 移动文件到其它文件夹
fs.rename('../http/data-01.txt', './data-01.txt', err => {
  if (err) {
    console.log('重命名错误！')
    return
  }
  console.log('重命名成功！')
})
