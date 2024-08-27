"use strict";
/*
 * @Author: liwz
 * @Date: 2024-08-26 15:11:30
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-27 10:54:15
 * @FilePath: /study_new/typeScript/01-setting/02-any.ts
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
