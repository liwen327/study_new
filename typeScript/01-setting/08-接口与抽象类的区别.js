"use strict";
/*
 * @Author: liwz
 * @Date: 2024-08-30 09:37:37
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-30 09:42:19
 * @FilePath: /study_new/typeScript/01-setting/08-接口与抽象类的区别.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// 鸭子实现了飞和游泳的接口
class Duck {
    fly() {
        console.log('飞');
    }
    swim() {
        console.log('游泳');
    }
}
