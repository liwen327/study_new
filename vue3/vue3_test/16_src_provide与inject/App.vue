<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-21 16:43:07
 * @FilePath: /study_new/vue3/vue3_test/src/App.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="app">
    我是app组件: {{ name }}------{{ price }}

    <child />
  </div>
</template>

<script>
import { toRefs, reactive, provide } from 'vue'
import Child from './components/child.vue'
export default {
  components: { Child },
  name: 'App',
  setup() {
    let car = reactive({
      name: '奔驰',
      price: 100
    })
    provide('car', car)
    return { ...toRefs(car) }
  }
}
</script>

<style>
.app {
  background: grey;
  padding: 10px;
}
</style>
