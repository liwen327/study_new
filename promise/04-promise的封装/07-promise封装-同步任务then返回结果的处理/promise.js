/*
 * @Author: liwz
 * @Date: 2024-09-25 17:34:16
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-29 13:52:54
 * @FilePath: /study_new/promise/04-promise的封装/07-promise封装-同步任务then返回结果的处理/promise.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
function Promise(executor) {
  this.promiseState = 'pending'
  this.promiseResult = null
  // 保存this值，如果不保存，则调用resolve时this指向window
  let self = this

  // 保存回调函数
  this.callbacks = []
  // resolve函数
  function resolve(data) {
    // return data    //这里写错了不应该是return 出data的值，应该是改变promiseState的状态
    // 1、修改对象的状态（promiseState）
    self.promiseState = 'fulfilled' // resolved
    // 2、设置对象结果值（promiseResult）
    self.promiseResult = data
    // 如果callback中有onResolved，则状态修改为成功，则调用回调函数对象中的onResolved函数
    self.callbacks.forEach(item => {
      item.onResolved(data)
    })
  }
  // reject函数
  function reject(reason) {
    // return reason
    // 1、修改对象的状态（promiseState）
    self.promiseState = 'rejected'
    // 2、设置结果对象值（promiseResult）
    self.promiseResult = reason
    // 如果callback中有onRejected，则状态修改为成功，则调用回调函数对象中的onRejected函数
    self.callbacks.forEach(item => {
      item.onRejected(reason)
    })
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
  // then的回调函数返回的结果发须是Promise的返回结果，则这里使用return new Promise((resolve,reject)=>{})
  return new Promise((resolve, reject) => {
    // onResolved的调用是用条件的，成功时才调用
    if (this.promiseState === 'fulfilled') {
      // 在p.then(value=>{throw 'fail'})时做的处理，捕获异常
      try {
        // 这里this 指向Promise的实例对象，所以使用this能获取到值
        let result = onResolved(this.promiseResult)
        if (result instanceof Promise) {
          // 如果是Promise类型的对象
          result.then(
            v => {
              resolve(v)
            },
            r => {
              reject(r)
            }
          )
        } else {
          // 结果对象状态为【成功】
          resolve(result)
        }
      } catch (e) {
        reject(e)
      }
    }
    if (this.promiseState === 'rejected') {
      // 这里this 指向Promise的实例对象，所以使用this能获取到值
      onResolved(this.promiseResult)
    }

    // 在调用new Promise中使用异步时，此时状态还没改变，不能在then中调用，得是改变状态时在Promise()构造函数中的resolve或reject方法中调用
    if (this.promiseState === 'pending') {
      // 这里this 指向Promise的实例对象，所以使用this能获取到值
      // 保存回调函数
      this.callbacks.push({
        onResolved,
        onRejected
      })
    }
  })
}
