/*
 * @Author: liwz
 * @Date: 2024-08-26 13:54:05
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-26 14:55:51
 * @FilePath: /study_new/typeScript/01-setting/index.ts
 * @Description:
 *
 *
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
let person = {
  name: '张三',
  age: 27
}

console.log('我的名字是：' + person.name + '年龄：' + person.age)

let a: string
let b: number
let c: Boolean

a = 'hello'
b = 2
c = true

console.log(a, b, c) //hello 2 true

function count(x: number, y: number): number {
  return x + y
}
let result = count(1, 2)
console.log('result: ', result) //result:  3

// 类型推断
let str: 'hello'

// str = 2 // str是字符串，不能赋值为数值

// 类型推断
/* let num = -99

num = 'hello' */

// 小写的string
let str1: string

str1 = 'hello'
// str1 = new String('hello') // 不能将类型“String”分配给类型“string”。“string”是基元，但“String”是包装器对象。如可能首选使用“string”。

// 大写的String
let str2: String

str2 = 'hello'
str2 = new String('hello') // 不报错

console.log('str1: ', typeof str1) // str1:  string
console.log('str2: ', typeof str2) //str2:  object
