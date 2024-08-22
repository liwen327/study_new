/*
 * @Author: liwz
 * @Date: 2023-10-13 11:17:43
 * @LastEditors: liwz
 * @LastEditTime: 2023-10-13 11:21:08
 * @FilePath: /study/Users/liwenzhi/study/node/module/math.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
exports.add = function () {
  var sum = 0
  ;(i = 0), (args = arguments), (l = args.length)
  while (i < l) {
    sum += args[i++]
  }
  return sum
}
