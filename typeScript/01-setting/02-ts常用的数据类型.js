"use strict";
/*
 * @Author: liwz
 * @Date: 2024-08-26 15:11:30
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-27 11:04:47
 * @FilePath: /study_new/typeScript/01-setting/02-ts常用的数据类型.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// any类型
let abc;
abc = 1;
abc = 'hello';
abc = false;
console.log('abc: ', abc);
// unknow 类型
let bc;
bc = 1;
bc = false;
bc = 'hello';
console.log('bc: ', bc);
let x;
// 第一种，把bc赋值给x
if (typeof bc === 'string') {
    x = bc;
}
// 第二种，把bc赋值给x  (断言)
x = bc;
// 第三种  （断言的另一种写法）
x = bc;
// never
function demo() {
    throw new Error('程序运行异常！');
}
let demoFn = demo();
console.log('x: ', demoFn);
