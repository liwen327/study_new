"use strict";
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
function printStatus(status) {
    console.log('status: ', status);
}
printStatus(404);
printStatus('404');
const house = {
    height: 200,
    width: 200,
    city: '北京', //城市
    num: 3, //单元号
    cell: 4, //单元号
    room: '102' //单元号
};
console.log('house: ', house);
