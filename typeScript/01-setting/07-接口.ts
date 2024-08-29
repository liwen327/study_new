/*
 * @Author: liwz
 * @Date: 2024-08-29 19:18:50
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-29 20:51:39
 * @FilePath: /study_new/typeScript/01-setting/07-接口.ts
 * @Description:接口
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

/* // 接口定义类
interface PersonInterface {
  name: string
  age: number
  speaking(n: number): void
}

class Person implements PersonInterface {
  constructor(public name: string, public age: number) {}
  speaking(n: number): void {
    for (let i = 0; i < n; i++) {
      console.log(`我叫：${this.name}，我的年龄是${this.age}`)
    }
  }
}

let per1 = new Person('tom', 18)
per1.speaking(4) */

/* // 接口定义对象

interface User {
  name: string
  readonly gender: string //只读属性
  age?: number
  run: (n: number) => void
}

const users: User = {
  name: '张三',
  gender: '男',
  run(n) {
    console.log(`奔跑了${n}米`)
  }
}
console.log('users: ', users) */

/* // 接口定义函数
interface CountInterface {
  (a: number, b: number): number
}

const count1: CountInterface = (x, y) => {
  return x + y
}
 */

/* // 接口之间的继承
interface PersonInterface {
  name: string
  age: number
}

interface StudentInterface extends PersonInterface {
  grade: string
}

let stu: StudentInterface = {
  name: 'tom',
  age: 19,
  grade: '二年级'
} */

// 接口的自动合并
interface PersonInterface {
  name: string
  age: number
}
interface PersonInterface {
  //相同的接口不报错
  gender: string
}
let per1: PersonInterface = {
  name: 'tom',
  age: 18,
  gender: '女'
}
