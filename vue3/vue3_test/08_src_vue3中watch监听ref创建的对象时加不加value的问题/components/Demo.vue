<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-17 18:04:06
 * @FilePath: /study_new/vue3/vue3_test/src/components/Demo.vue
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
import { ref, reactive, watch } from 'vue'
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
    let person = ref({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: '20'
        }
      }
    })

    console.log(sum) // refImpl对象
    console.log(msg)
    console.log(person) // refImpl对象但是里面的value是一个reactive所创建的proxy对象
    // watch这里监测，不需要写成sum.value的形式，如果这样写即监测0（数字0）,会警告，且无意义
    watch(sum, (newValue, oldValue) => {
      console.log('sum变化了：', newValue, oldValue)
    })

    // 这里监听person，person是ref创建的refImpl对象，是一个对象，所以需要使用deep:true，来深度监视，否则不能监视到变化
    watch(
      person,
      (newValue, oldValue) => {
        console.log('person变化了：', newValue, oldValue)
      },
      { deep: true }
    )
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style></style>
