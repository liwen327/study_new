/*
 * @Author: liwz
 * @Date: 2024-10-29 09:24:33
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-29 09:32:03
 * @FilePath: /study_new/js模块化技术/01-CommonJs模块化/index.js
 * @Description:
 *
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

const { name, slogan, getTel } = require('./school.js')
const { name: stuName, motto, getTel: stuGetTel } = require('./student.js')

console.log(name, slogan, getTel.toString())
console.log(stuName, motto, stuGetTel.toString())
