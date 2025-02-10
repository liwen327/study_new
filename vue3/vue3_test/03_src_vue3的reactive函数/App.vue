<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-10 11:29:44
 * @FilePath: /study_new/vue3/vue3_test/src/App.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <!-- ref形式的模板 -->
  <!-- <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>薪资：{{ job.salary }}</h3>
  <button @click="sayHello">说话</button>
  <br /><br />
  <button @click="changePerson">修改信息</button> -->
  <!-- reactive的模板 -->
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>薪资：{{ person.job.salary }}</h3>
  <h3>测试数据：{{ person.job.a.b.c }}</h3>
  <br /><br />
  <button @click="changePerson">修改信息</button>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // ref形式
    /* let name = ref('张三')
    let age = ref(18)

    let job = ref({
      type: '前端工程师',
      salary: '30K'
    })
    function sayHello() {
      console.log(`我叫${name}, 我年龄是：${age}`)
    }
    function changePerson() {
      console.log('name,age:', name, age)
      name.value = '李四'
      age.value = 20
      console.log('job: ', job)
      job.value.type = 'UI设计师'
      job.value.salary = '20K'
    }
    return {
      name,
      age,
      job,
      sayHello,
      changePerson
    } */
    // reactive形式
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30K',
        a: {
          b: {
            c: 999
          }
        }
      },
      hobby: ['吃饭', '睡觉', '打豆豆']
    })
    function changePerson() {
      person.name = '李四'
      person.age = 20
      person.job.type = 'UI设计师'
      person.job.salary = '20K'
      person.hobby[0] = '学习'
    }
    return {
      person,
      changePerson
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
