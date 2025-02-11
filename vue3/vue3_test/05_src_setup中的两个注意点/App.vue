<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-11 16:04:15
 * @FilePath: /study_new/vue3/vue3_test/src/App.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <Demo msg="你好啊" school="尚硅谷" @hello="helloDemo">
    <template v-slot:slot1>
      <span>这里是具名插槽1 </span>
    </template>
    <template v-slot:slot2>
      <span>这里是具名插槽2 </span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  components: { Demo },
  name: 'App',
  setup(props) {
    function helloDemo(data) {
      console.log(`从Demo组件的自定义事件接收到的数据为：${data}`)
    }
    return {
      helloDemo
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
