/*
 * @Author: liwz
 * @Date: 2024-09-25 17:34:16
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-25 17:35:05
 * @FilePath: /study_new/promise/04-promise的封装/01-promise的执行器函数/promise.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
function Promise(executor) {
  // 执行器函数executor   需要立即执行
  executor()
}

Promise.prototype.then = function () {}
