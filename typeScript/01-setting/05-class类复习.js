/*
 * @Author: liwz
 * @Date: 2024-08-29 11:35:49
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-29 11:38:55
 * @FilePath: /study_new/typeScript/01-setting/05-class类复习.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  walk() {
    console.log(`${this.name} 正在走路`)
  }
}

let p1 = new Person('tom', 18)
p1.walk()

class Student extends Person {
  constructor(grade) {
    super(name, age)
  }
  study() {
    console.log(`${this.name}正在学习。。。`)
  }
}
