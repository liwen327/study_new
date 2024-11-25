/*
 * @Author: liwz
 * @Date: 2024-10-29 09:24:29
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-29 15:23:12
 * @FilePath: /study_new/js模块化技术/01-CommonJs模块化/student.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const name = '张三'
const motto = '相信明天会更好'
function getTel() {
  return '1371233333'
}

function getHobby() {
  return ['抽烟', '喝酒', '烫头']
}

module.exports = { name, motto, getTel }

// 可以查看此js代码的全貌
console.log(arguments.callee.toString())

//下面的函数即arguments.callee.toString() 打印出的内容，写的代码外面会包裹一个函数，里面的参数有exports，module，所以代码中才可以直接使用exports和module。
function callee(exports, require, module, __filename, __dirname) {
  /*
   * @Author: liwz
   * @Date: 2024-10-29 09:24:29
   * @LastEditors: liwz
   * @LastEditTime: 2024-10-29 09:50:18
   * @FilePath: /study_new/js模块化技术/01-CommonJs模块化/student.js
   * @Description:
   *
   * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
   */
  const name = '张三'
  const motto = '相信明天会更好'
  function getTel() {
    return '1371233333'
  }

  function getHobby() {
    return ['抽烟', '喝酒', '烫头']
  }

  module.exports = { name, motto, getTel }

  console.log(arguments.callee.toString())
}
