<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-19 11:00:17
 * @FilePath: /study_new/vue3/vue3_test/src/App.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <Demo v-if="isShowDemo"> </Demo>
</template>

<script>
import { ref } from 'vue'
import Demo from './components/Demo.vue'
export default {
  components: { Demo },
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
