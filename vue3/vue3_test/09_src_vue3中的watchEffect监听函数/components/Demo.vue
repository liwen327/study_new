<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-18 10:30:33
 * @FilePath: /study_new/vue3/vue3_test/09_src_vue3中的watchEffect监听函数/components/Demo.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <br />
  <h4>求和：{{ sum }}</h4>
  <button @click="sum++">点击+1</button>
  <!-- <button @click="addSum">点击+1</button> -->

  <hr />
  <h2>当前的信息：{{ msg }}</h2>
  <button @click="msg += '! '">修改信息</button>

  <hr />
  <h3>姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3>薪资：{{ person.job.j1.salary }}</h3>
  <button @click="person.name += '~ '">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue'
export default {
  name: 'Demo',
  watch: {
    // vue2的写法
    /* sum: {
      handler(newValue, oldValue) {
        // this.sum = newValue
        console.log('sum的值变化了，', newValue, oldValue)
      },
      deep: true, //深度监听
      immediate: true //立即监听
    } */
  },
  setup() {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: '20'
        }
      }
    })

    // watchEffect函数很智能，用到的数据进行监听，没用到的不监听
    watchEffect(() => {
      let sum1 = sum.value
      let name = person.name
      let age = person.age
      let salary = person.job.j1.salary

      console.log('数据变化了')
    })

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style></style>
