/*
 * @Author: liwz
 * @Date: 2023-11-25 09:07:00
 * @LastEditors: liwz
 * @LastEditTime: 2023-12-01 09:36:27
 * @FilePath: /study/Users/liwenzhi/study/node/npm/npm-unique.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// const uniq = require('uniq')
// const uniq = require('./node_modules/uniq')
const uniq = require('uniq')
const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
const arr1 = uniq(arr)
console.log(arr1)
