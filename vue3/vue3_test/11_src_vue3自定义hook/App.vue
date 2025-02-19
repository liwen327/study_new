<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-19 09:36:05
 * @FilePath: /study_new/vue3/vue3_test/src/App.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <Demo v-if="isShowDemo"> </Demo>

  <Test v-if="isShowTest"> </Test>

  <button @click="isShowDemo = !isShowDemo">点击去掉Demo组件</button>
  <button @click="isShowTest = !isShowTest">点击去掉Test组件</button>
</template>

<script>
import { ref } from 'vue'
import Demo from './components/Demo.vue'
import Test from './components/test.vue'
export default {
  components: { Demo, Test },
  name: 'App',
  setup(props) {
    let isShowDemo = ref(true)
    let isShowTest = ref(true)
    return {
      isShowDemo,
      isShowTest
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
