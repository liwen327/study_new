/*
 * @Author: liwz
 * @Date: 2024-10-29 09:24:24
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-30 10:05:31
 * @FilePath: /study_new/js模块化技术/02-ES6模块化/school.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

// 1、分别导出
/* export const name = '尚硅谷'
export const slogan = '让天下没有难学的技术！'
export function getTel() {
  return '010-123456'
} */

const name = '尚硅谷'
const slogan = '让天下没有难学的技术！'
function getTel() {
  return '010-123456'
}

// 2、统一导出
export { name, slogan, getTel }

// 3、默认导出

function getCities() {
  return ['北京', '上海', '深圳', '成都']
}
