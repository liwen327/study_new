<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-17 11:31:42
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
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: '20'
        }
      }
    })
    // 情况一：监视ref定义的一个响应式数据，可以监测到oldValue的值
    /* watch(
      sum,
      (newValue, oldValue) => {
        console.log('sum变了：', newValue, oldValue)
      },
      { immediate: true }
    ) */
    // 情况二：监视ref所定义的多个响应式数据
    /* watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log('sum或msg变了：', newValue, oldValue)
      },
      { immediate: true }
    ) */
    /* 情况三：监视reactive所定义的一个响应式数据
        1、注意：此处无法正确获取oldValue
        2、注意：强制开启了深度监视（deep配置无效，写不写deep:true都一样是深度监视），
        一般在开发中用这个即可。如果需要用oldValue，则用ref给它拿出来即可
    */
    /* watch(
      person,
      (newValue, oldValue) => {
        console.log('person对象改变了：', newValue, oldValue)
      },
      { deep: false } //也能监视到person的变化
    ) */
    // 情况四：监视reactive所定义一个响应式数据中的某个属性，可以正确处理oldValue的值
    /* watch(person.name, (newValue, oldValue) => {
      console.log('person的name变化了：', newValue, oldValue)
    }) */
    // 情况五：监视reactive所定义的一个响应式数据中的某些属性,又可以正确处理oldValue的值了
    /* watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log('person的name或age变化了： ', newValue, oldValue)
    }) */
    // 特殊情况：   这里有一个坑，下面代码监测不到变化，因为person.job是一个对象，得开启深度监视

    watch(
      [() => person.job],
      (newValue, oldValue) => {
        console.log('person的job变化了： ', newValue, oldValue)
      },
      { deep: true } // 此处由于监视的是reactive所定义的对象中的某个属性（此属性也是一个对象），所以deep有效
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
