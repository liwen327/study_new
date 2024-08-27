/*
 * @Author: liwz
 * @Date: 2024-08-27 11:31:06
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-27 19:24:22
 * @FilePath: /study_new/typeScript/01-setting/03-object.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/* let f: object //a能存储的类型是【非原始类型：数字、字符串、布尔值】

let g: Object */

/* f = {}
f = { name: 'tom' }
f = [1, 3, 5, 7]
f = function () {}
f = new String('123')

class Person {}
f = new Person()

f = 1 //不能将类型“number”分配给类型“object”
f = true //不能将类型“boolean”分配给类型“object”
f = 'hello' //不能将类型“string”分配给类型“object” */

// Object
/* g = {}
g = { name: 'tom' }
g = [1, 3, 5, 7]
g = function () {}
g = new String('123')

class Person {}
g = new Person()

g = 1 //不报错了
g = true //
g = 'hello' //

g = null // 报错：不能将类型“null”分配给类型“Object”
g = undefined // 报错：不能将类型“undefined”分配给类型“Object” */

/* // 声明对象类型
let person1: {
  name: string
  age?: number //age可有可无
  [key: string]: any //除name和age属性外，也可新增其它属性
}

person1 = { name: 'tom', age: 18, gender: '女', city: '北京' }

console.log(person1)

// 声明函数类型
let add: (a: number, b: number) => number // 这里的=>不是箭头函数的标志， 这里表示函数返回值是number类型 */

/* add = function (x, y) {
  return x + y
} */
/* // 也可以写成箭头函数的形式
add = (x, y) => {
  return x + y
} */

/* // 声明数组
let arr1: string[]
let arr2: Array<number>

arr1 = ['a', 'b']
arr2 = [100, 200]
console.log('arr1: ', arr1)
console.log('arr2: ', arr2) */

/* // 元组 tupl
let arr1: [string, number]
let arr2: [string, boolean?] //boolean 可有可无
let arr3: [number, ...string[]] //...string[]代表可以存储无数多个字符串类型的数组元素

arr1 = ['abc', 100]
arr2 = ['abc', true]
arr3 = [100, 'a', 'b', 'c', 'd']
console.log(arr1, arr2, arr3) */

/* // 枚举  使用枚举不容易写错
enum Direction {
  Up,
  Down,
  Left,
  Right
}

function walk(data: Direction) {
  if (data === Direction.Up) {
    console.log('向上走')
  } else if (data === Direction.Down) {
    console.log('向下走')
  } else if (data === Direction.Left) {
    console.log('向左走')
  } else if (data === Direction.Right) {
    console.log('向右走')
  } else {
    console.log('未知方向')
  }
}
walk(Direction.Down) //向下走 */

// type
type Status = number | string //或

function printStatus(status: Status) {
  console.log('status: ', status)
}

printStatus(404)
printStatus('404')

type Area = {
  height: number // 高
  width: number // 高
}
type Address = {
  city: string //城市
  num: number //单元号
  cell: number //单元号
  room: string //单元号
}

type House = Area & Address

const house: House = {
  height: 200,
  width: 200,
  city: '北京', //城市
  num: 3, //单元号
  cell: 4, //单元号
  room: '102' //单元号
}
console.log('house: ', house)
