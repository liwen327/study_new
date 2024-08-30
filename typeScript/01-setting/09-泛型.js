"use strict";
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
let p3 = {
    name: 'tom',
    age: 19,
    extralData: 250
};
let p4 = {
    name: 'tom',
    age: 19,
    extralData: {
        grade: '二年级'
    }
};
// 这里传一个jobInfo类型，属于高级类型
let p5 = {
    name: 'tom',
    age: 19,
    extralData: {
        title: '高级工程师',
        company: '发发发科技股份有限公司'
    }
};
