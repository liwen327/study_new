<!--
 * @Author: liwz
 * @Date: 2024-09-18 10:47:48
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-18 10:59:12
 * @FilePath: /study_new/table-explore/src/App.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div id="app">
    <TableExplore></TableExplore>
  </div>
</template>

<script>
/* eslint-disable */
// import HelloWorld from './components/HelloWorld.vue'
import TableExplore from './components/TableExplore.vue'

export default {
  name: 'App',
  components: {
    TableExplore
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
