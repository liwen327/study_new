/*
 * @Author: liwz
 * @Date: 2024-08-30 14:09:55
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-30 14:27:09
 * @FilePath: /study_new/typeScript/01-setting/09-泛型.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

// 泛型
/* function logData<T, U>(data1: T, data2: U) {
  Date.now() % 2 ? console.log(data1) : console.log(data2)
}

logData<number, boolean>(2, true)
logData<number, string>(2, '666') */

/* // 泛型可以有多个

function logData<T, U>(data1: T, data2: U): T | U {
  return Date.now() % 2 ? data1 : data2 //是奇数时返回data1,偶数时返回data2
}

logData<number, boolean>(2, true)
logData<number, string>(2, '666') */

//泛型接口
interface PersonInterface1<T> {
  name: string
  age: number
  extralData: T
}

let p3: PersonInterface1<number> = {
  name: 'tom',
  age: 19,
  extralData: 250
}
let p4: PersonInterface1<object> = {
  name: 'tom',
  age: 19,
  extralData: {
    grade: '二年级'
  }
}

// 类型
type jobInfo = {
  title: string
  company: string
}

// 这里传一个jobInfo类型，属于高级类型
let p5: PersonInterface1<jobInfo> = {
  name: 'tom',
  age: 19,
  extralData: {
    title: '高级工程师',
    company: '发发发科技股份有限公司'
  }
}
