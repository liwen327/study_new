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

// 如下有两个接口FlyInterface 和SwimInterface ，类Duck实现了这两个接口，所以一个类可以实现多个接口
interface FlyInterface {
  fly(): void
}

interface SwimInterface {
  swim(): void
}

// 鸭子实现了飞和游泳的接口
class Duck implements FlyInterface, SwimInterface {
  fly(): void {
    console.log('飞')
  }
  swim(): void {
    console.log('游泳')
  }
}
