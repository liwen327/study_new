/*
 * @Author: liwz
 * @Date: 2024-09-25 17:34:16
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-25 17:36:45
 * @FilePath: /study_new/promise/04-promise的封装/02-promise的resolve和reject/promise.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
function Promise(executor) {
  this.promiseState = 'pending'
  this.promiseResult = null
  // 保存this值，如果不保存，则调用resolve时this指向window
  let self = this
  // resolve函数
  function resolve(data) {
    // return data    //这里写错了不应该是return 出data的值，应该是改变promiseState的状态
    // 1、修改对象的状态（promiseState）
    self.promiseState = 'fulfilled' // resolved
    // 2、设置结果对象值（promiseResult）
    self.promiseResult = data
  }
  // reject函数
  function reject(reason) {
    // return reason
    // 1、修改对象的状态（promiseState）
    self.promiseState = 'rejected'
    // 2、设置结果对象值（promiseResult）
    self.promiseResult = reason
  }
  // 执行器函数executor   需要立即执行
  executor()
}

Promise.prototype.then = function () {}
