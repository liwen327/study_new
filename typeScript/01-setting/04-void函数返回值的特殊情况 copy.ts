/*
 * @Author: liwz
 * @Date: 2024-08-27 11:31:06
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-28 11:04:25
 * @FilePath: /study_new/typeScript/01-setting/04-void函数返回值的特殊情况.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

//1、 下常情况下函数返回值 为void应该这样写：
function fun(): void {
  // return undefined
  // 如下返回值都会报错
  // return 99
  // return 'hello'
  // return true
}

// 2、void函数返回值的特殊情况

type LogFunc = () => void

const f1: LogFunc = function () {
  return 999 //返回值不为undefined不报错，是为啥？？？
}
const f2: LogFunc = () => {
  return 'Hello' //返回值不为undefined不报错，是为啥？？？
}
const f3: LogFunc = () => {
  //返回值为undefined不报错，是为啥？？？
}

// 是因为ts要支持forEach的方法

let arr1 = [1, 2, 3]
let arr2 = [0]

arr1.forEach(item => {
  arr2.push(item)
})

// 注意：这里回调函数没有返回值 ，但是箭头函数只有一行时，可以省略花括号，把代码体和箭头函数写成一行，如下：

arr1.forEach(item => arr2.push(item)) //写成这种形式，则arr2.push(item) 就是箭头函数的返回值 ，push方法返回值为number类型的数组元素的个数
