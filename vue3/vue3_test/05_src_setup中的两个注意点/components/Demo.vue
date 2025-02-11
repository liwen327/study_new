<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-11 16:12:31
 * @FilePath: /study_new/vue3/vue3_test/src/components/Demo.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <!-- reactive的模板 -->
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <br /><br />
  <button @click="senToAppData">向App发送自定义事件</button>
  <br /><br />
  <slot name="slot1" />
  <slot name="slot2" />
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'App',
  props: ['msg', 'school'],
  emits: ['hello'], //这句不写会出现如下警告：
  // [Vue warn]: Extraneous non-emits event listeners (hello) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.
  // at <App msg="你好啊" school="尚硅谷" onHello=fn<helloDemo> >
  // at <App>
  beforeCreate() {
    // console.log('-----beforeCreate--- ')
  },
  setup(props, context) {
    // console.log('-----setup--- ') //这里比beforeCreate中的先打印
    console.log('setup中的参数：', props, context)
    console.log('setup----', context.attrs) // context.attrs中存的是没有在props中接收的参数，相当于vue2中的this.$attrs
    console.log('setup----', context.emit) // 自定义触发函数  相当于this.$emit
    console.log('setup----', context.slots) // 子组件中的插槽槽
    // reactive形式
    let person = reactive({
      name: '张三',
      age: 18
    })
    function senToAppData() {
      context.emit('hello', 666)
    }
    return {
      person,
      senToAppData
    }
  }
}
</script>

<style></style>
