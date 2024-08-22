/*
 * @Author: liwz
 * @Date: 2024-08-20 20:02:06
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-20 20:42:33
 * @FilePath: /reactJs/Users/liwenzhi/study/node/fs/文件删除和文件夹操作.js
 * @Description:文件删除
 *

 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const fs = require('fs')

// 文件删除
// fs.unlink('./doc-2.docx', err => {
//   if (err) {
//     console.log('删除文件失败！')
//     return
//   }
//   console.log('删除文件成功！')
// })

// 文件夹操作：创建文件夹
// fs.mkdirSync('文件夹', err => {
//   if (err) {
//     console.log('创建文件夹失败！')
//     return
//   }
//   console.log('创建文件夹成功')
// })

// 递归创建文件夹， a/b/c 文件夹

/* fs.mkdirSync('a/b/c', { recursive: true }, err => {
  if (err) {
    console.log('创建文件夹失败！')
    return
  }
  console.log('创建文件夹成功')
}) */

// 读取文件夹
/* fs.readdir('./文件夹', (err, data) => {
  if (err) {
    console.log('读取文件夹失败！')
    return
  }
  console.log('读取文件夹成功:', data)
}) */

// 删除文件夹   rm:remove
/* fs.rmdir('./d', err => {
  if (err) {
    console.log('删除文件夹失败！')
    return
  }
  console.log('删除文件夹成功:')
}) */

// 递归删除文件夹  不推荐使用：将来的版本中fs.rmdir(path, { recursive: true })将会被移除，推荐使用fs.rm
/* fs.rmdir('./a', { recursive: true }, err => {
  if (err) {
    console.log('删除文件夹失败！', err)
    return
  }
  console.log('删除文件夹成功:')
}) */

fs.rm('./a', { recursive: true }, err => {
  if (err) {
    console.log('删除文件夹失败！', err)
    return
  }
  console.log('删除文件夹成功:')
})
