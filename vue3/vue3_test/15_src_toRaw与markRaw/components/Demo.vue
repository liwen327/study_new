<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-21 15:33:15
 * @FilePath: /study_new/vue3/vue3_test/src/components/Demo.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <br />
  <h4>{{ person }}</h4>

  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }}</h3>
  <h3 v-if="person.car">汽车：{{ person.car }}</h3>
  <button @click="name += '~ '">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <br />
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">添加汽车</button>
  <button @click="modifyPrice">修改汽车价格</button>

  <hr />
  <h4>num的值：{{ num }}</h4>
  <button @click="num++">num++</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly, toRaw, markRaw } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let num = ref(0)
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: '20'
        }
      }
    })
    // person = toRaw(person) //toRaw只可以对ref类型的数据进行转换
    // 输出最原始的person
    function showRawPerson() {
      let p = toRaw(person)
      p.age++ // 这里age不会增加，因为p是原始的对象，不是响应式的person了
      console.log('person: ', p) //p:  {name: '张三', age: 19, job: {…}}

      /* let num1 = toRaw(num)
      console.log('num: ', num1) //依然是refImpl形式的响应式对象，所以toRaw只能处理reactive定义的响应式对象，不能处理ref定义的响应式对象 */
    }
    function addCar() {
      let car = { name: '奔驰', price: 20 } //汽车是20层的嵌套对象，如果做成响应式的，vue去遍历，有性能影响
      // person.car = car
      person.car = marRaw(car)
    }
    function modifyPrice() {
      person.car.price++
      console.log('person.car.price: ', person.car.price) // price变了，但是模板没有更新，因为car是用marRaw处理的，不让变
    }

    return {
      num,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      modifyPrice
    }
  }
}
</script>

<style></style>
