/*
 * @Author: liwz
 * @Date: 2024-10-29 09:24:24
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-29 15:16:36
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
