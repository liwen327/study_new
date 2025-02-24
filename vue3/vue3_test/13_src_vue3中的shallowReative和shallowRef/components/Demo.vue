<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-21 10:25:12
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
  <button @click="name += '~ '">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>

  <hr />
  <!-- 使用shallowRef处理基本数据类型 -->
  <h4>x的值为：{{ x }}</h4>
  <button @click="x++">点击x的值+1</button>
  <!-- 使用shallowRef处理对象类型 -->
  <!-- <h4>a.b的值为：{{ a.b }}</h4>
  <button @click="a.b++">点击a.b的值+1</button> -->
  <!-- shallowRef的使用场景，去替换a.b的值，而不是去改变 -->
  <h4>a.b的值为：{{ a.b }}</h4>
  <button @click="a = { b: 888 }">点击替换a.b的值</button>
</template>

<script>
import { ref, reactive, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // let person = reactive({
    let person = shallowReactive({
      // 浅响应式，只监听第一层属性的变化，第二层属性的变化不会被监听到
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: '20'
        }
      }
    })
    console.log('person: ', person)
    // let x = ref({ y: 0 })
    let x = shallowRef(0)
    console.log('x: ', x)

    // 使用shallowRef
    let a = shallowRef({ b: 0 })
    console.log('a: ', a)

    return {
      x,
      a,
      person,
      ...toRefs(person)
    }
  }
}
</script>

<style></style>
