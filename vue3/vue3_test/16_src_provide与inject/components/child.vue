<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-21 16:44:17
 * @FilePath: /study_new/vue3/vue3_test/src/components/child.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="child">
    我是Child组件: {{ car.name }}------{{ car.price }}

    <Son />
  </div>
</template>

<script>
import { toRefs, reactive, inject } from 'vue'

import Son from './son.vue'
export default {
  components: { Son },
  name: 'Child',
  setup() {
    let car = inject('car')
    console.log('car: ', car)
    return { car }
  }
}
</script>

<style>
.child {
  background: skyblue;
  padding: 10px;
}
</style>
