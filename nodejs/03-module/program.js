/*
 * @Author: liwz
 * @Date: 2023-10-13 11:19:07
 * @LastEditors: liwz
 * @LastEditTime: 2023-12-01 14:02:43
 * @FilePath: /study/Users/liwenzhi/study/node/module/program.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// const math = './math'
var math = require('./math')
let increment = function (val) {
  return math.add(val, 1)
}
console.log(increment(5))

// 运行node module/image.pngprogram.js
