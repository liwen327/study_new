"use strict";
/*
 * @Author: liwz
 * @Date: 2024-08-27 11:31:06
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-29 15:53:59
 * @FilePath: /study_new/typeScript/01-setting/06-抽象类abstract.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// 抽象类
class Packages {
    constructor(weight) {
        this.weight = weight;
    }
    // 具体方法
    printPackage() {
        console.log(`包裹重量为：${this.weight}kg，运费为：${this.calculate()}元`);
    }
}
// 标准快递
class StandardPackage extends Packages {
    constructor(weight, unitPrice) {
        super(weight);
        this.unitPrice = unitPrice;
    }
    calculate() {
        return this.weight * this.unitPrice;
    }
}
// 特快快递
class ExpressPackage extends Packages {
    constructor(weight, unitPrice, upperPrice) {
        super(weight);
        this.unitPrice = unitPrice;
        this.upperPrice = upperPrice;
    }
    calculate() {
        return this.weight * this.unitPrice + (this.weight - 10) * this.upperPrice;
    }
}
let p1 = new StandardPackage(5, 10);
console.log(`包裹价格为：${p1.calculate()}`);
let e1 = new ExpressPackage(15, 10, 2);
console.log(`包裹价格为：${e1.calculate()}`);
