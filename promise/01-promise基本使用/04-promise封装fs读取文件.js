/*
 * @Author: liwz
 * @Date: 2024-09-23 10:00:09
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-23 10:10:39
 * @FilePath: /study_new/promise/04-promise封装fs读取文件/04-promise封装fs读取文件.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
function myReadFile(path) {
  return new Promise((resolve, reject) => {
    require('fs').readFile(path, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

myReadFile('./content/content.txt').then(
  data => {
    console.log('data: ', data.toString())
  },
  err => {
    console.log('err: ', err)
  }
)
