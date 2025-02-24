<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-21 16:43:29
 * @FilePath: /study_new/vue3/vue3_test/src/components/son.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="son">我是Son组件: {{ car.name }}------{{ car.price }}</div>
</template>

<script>
import { inject } from 'vue'
export default {
  components: {},
  name: 'Son',
  setup() {
    let car = inject('car')
    console.log('car: ', car)
    return { car }
  }
}
</script>

<style>
.son {
  background: orange;
  padding: 10px;
}
</style>
