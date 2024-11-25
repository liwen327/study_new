(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 * @Author: liwz
 * @Date: 2024-10-29 09:24:33
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-29 09:32:03
 * @FilePath: /study_new/js模块化技术/01-CommonJs模块化/index.js
 * @Description:
 *
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

const { name, slogan, getTel } = require('./school.js')
const { name: stuName, motto, getTel: stuGetTel } = require('./student.js')

console.log(name, slogan, getTel.toString())
console.log(stuName, motto, stuGetTel.toString())

},{"./school.js":2,"./student.js":3}],2:[function(require,module,exports){
/*
 * @Author: liwz
 * @Date: 2024-10-29 09:24:24
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-29 09:29:09
 * @FilePath: /study_new/js模块化技术/01-CommonJs模块化/school.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const name = '尚硅谷'
const slogan = '让天下没有难学的技术！'
function getTel() {
  return '010-123456'
}

function getCities() {
  return ['北京', '上海', '深圳', '成都']
}
module.exports = { name, slogan, getTel }

},{}],3:[function(require,module,exports){
/*
 * @Author: liwz
 * @Date: 2024-10-29 09:24:29
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-29 09:28:36
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

},{}]},{},[1]);
