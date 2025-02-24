<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-24 14:31:05
 * @FilePath: /study_new/vue3/vue3_test/src/components/child.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="child">我是Child组件</div>
  <h4>{{ sum }}</h4>
</template>

<script>
import { ref } from 'vue'

export default {
  components: {},
  name: 'Child',
  async setup() {
    let sum = ref(0)
    // 使用promise返回数据
    /* return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    }) */
    // 使用async await返回数据
    let sum1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    })
    return await sum1
  }
}
</script>

<style>
.child {
  background: skyblue;
  padding: 10px;
}
</style>
