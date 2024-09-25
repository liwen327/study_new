/*
 * @Author: liwz
 * @Date: 2024-09-25 17:34:16
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-25 17:46:29
 * @FilePath: /study_new/promise/04-promise的封装/04-promise的then方法执行回调/promise.js
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
  // 修理new Promise抛出的异常，如果抛出异常，需要更改状态为失败，值为抛出的异常的值
  try {
    // 执行器函数executor   需要立即执行
    executor(resolve, reject)
  } catch (error) {
    /* self.promiseState = 'rejected'
    self.promiseResult = error */
    // 上面两行代码跟调用reject(e) 这个方法同理
    reject(error)
  }
}

// 04  写then方法
Promise.prototype.then = function (onResolved, onRejected) {
  // 当状态改变后需要调用p.then中的回调函数，成功时调用value=>console.log(value)的回调函数
  // onResolved的调用是用条件的，成功时才调用
  if (this.promiseState === 'fulfilled') {
    // 这里this 指向Promise的实例对象，所以使用this能获取到值
    onResolved(this.promiseResult)
  }
  if (this.promiseState === 'rejected') {
    // 这里this 指向Promise的实例对象，所以使用this能获取到值
    onResolved(this.promiseResult)
  }
}
