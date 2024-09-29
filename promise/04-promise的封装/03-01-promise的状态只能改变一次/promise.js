/*
 * @Author: liwz
 * @Date: 2024-09-25 17:34:16
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-29 10:38:38
 * @FilePath: /study_new/promise/04-promise的封装/03-01-promise的状态只能改变一次/promise.js
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
    // Promise中的状态只允许改变一次，且我们自定义也需要这样处理
    if (self.promiseState !== 'pending') return
    // 1、修改对象的状态（promiseState）
    self.promiseState = 'fulfilled' // resolved
    // 2、设置结果对象值（promiseResult）
    self.promiseResult = data
  }
  // reject函数
  function reject(reason) {
    // return reason
    // Promise中的状态只允许改变一次，且我们自定义也需要这样处理
    if (self.promiseState !== 'pending') return
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

Promise.prototype.then = function () {}
