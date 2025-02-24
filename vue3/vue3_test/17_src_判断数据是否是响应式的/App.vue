<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-24 09:53:52
 * @FilePath: /study_new/vue3/vue3_test/src/App.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="app">我是app组件</div>
</template>

<script>
import { ref, toRefs, reactive, readonly, isReactive, isRef, isReadonly, isProxy } from 'vue'
export default {
  name: 'App',
  setup() {
    let car = reactive({
      name: '奔驰',
      price: 100
    })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isReactive(car), isRef(sum), isReadonly(car2), isProxy(car2), isProxy(sum)) //
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
