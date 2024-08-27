/*
 * @Author: liwz
 * @Date: 2024-08-26 15:11:30
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-27 15:06:45
 * @FilePath: /study_new/typeScript/01-setting/02-ts常用的数据类型.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

// any类型
let abc: any
abc = 1
abc = 'hello'
abc = false

console.log('abc: ', abc)

// unknow 类型

let bc: unknown

bc = 1
bc = false
bc = 'hello'

console.log('bc: ', bc)

let x: string

// 第一种，把bc赋值给x
if (typeof bc === 'string') {
  x = bc
}

// 第二种，把bc赋值给x  (断言)
x = bc as string

// 第三种  （断言的另一种写法）
x = <string>bc

// never

// never
// 1、不要把变量赋值为never
let d: never

/* d = 0 //不能将类型“number”分配给类型“never”
d = 'hello' //不能将类型“string”分配给类型“never” */

// 2、never一般是ts推断出来的
let e: string

e = 'hello'

if (typeof e === 'string') {
  console.log('e: ', e)
} else {
  console.log(e) //这里永远也不可能执行   相当于let e: never
}

// 3、never类型一般用于函数中
function demo(): never {
  throw new Error('程序运行异常！')
}

let demoFn = demo()
console.log('x: ', demoFn)
