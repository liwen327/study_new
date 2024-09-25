/*
 * @Author: liwz
 * @Date: 2024-09-23 10:22:12
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-23 10:26:40
 * @FilePath: /study_new/promise/01-promise基本使用/05-util.promisify方法.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

// util.promisify方法
// 引入util模块
const util = require('util')

const fs = require('fs')
const myReadFile = util.promisify(fs.readFile)

myReadFile('./content/content.txt').then(
  data => {
    console.log(data.toString())
  },
  err => {
    console.log(err)
  }
)
