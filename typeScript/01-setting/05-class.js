"use strict";
/*
 * @Author: liwz
 * @Date: 2024-08-27 11:31:06
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-29 15:43:11
 * @FilePath: /study_new/typeScript/01-setting/05-class.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// public   类，子类和外部都可以访问
/* class Person {
  constructor(public name: string, public age: number) {}

  speaking() {
    console.log(`我的名字是：${this.name},年龄：${this.age}`)
  }
}

let p1 = new Person('张三', 18)
console.log('p1: ', p1)
p1.speaking()

class Student extends Person {
  // constructor( grade: string) {
  //   super(public name: string, public age: number, IDCard: string)
  // }
}
let stu1 = new Student('李四', 20)

console.log('stu1: ', stu1, stu1.name, stu1.age) */
// protected  修饰符   可以在类和子类中访问
/* class Person {
  constructor(protected name: string, protected age: number) {}

  protected getDetails() {
    return `我的名字是：${this.name},年龄：${this.age}`
  }
  introduce() {
    console.log(this.getDetails())
  }
}

class Student extends Person {
  study() {
    console.log(this.getDetails()) // 子类中可以访问父类中protected类型的方法
    console.log(`${this.name}正在努力学习`)
  }
}

let s1 = new Student('tom', 18)
s1.study()
// s1.getDetails() //属性“getDetails”受保护，只能在类“Person”及其子类中访问 */
// private   只有类中能访问，子类和外部都不可访问
/* class Person {
  constructor(public name: string, public age: number, private IDCard: string) {}

  private getPrivateInfo() {
    return `我的身份证号是：${this.IDCard}`
  }
  getInfo() {
    console.log(`我的名字是：${this.name},年龄：${this.age}`)
  }
  getFullInfo() {
    return this.getInfo + this.getPrivateInfo()
  }
}

let p1 = new Person('张三', 18, '4212233344')
console.log('p1: ', p1)
p1.name
p1.age
// p1.IDCard //属性“IDCard”为私有属性，只能在类“Person”中访问
// p1.getPrivateInfo() //属性“getPrivateInfo”为私有属性，只能在类“Person”中访问。
 */
//readonly   只读，不允许修改
/* class Person {
  constructor(public name: string, public readonly age: number) {}
}

let p1 = new Person('张三', 18)
console.log('p1: ', p1)
p1.name = 'tom'
p1.age = 20 //无法分配到 "age" ，因为它是只读属性。 */
