<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-24 14:24:59
 * @FilePath: /study_new/vue3/vue3_test/src/App.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="app">
    我是app组件
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h4>稍等，加载中。。。</h4>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { toRefs, reactive, provide, defineAsyncComponent } from 'vue'
// import Child from './components/child.vue'
const Child = defineAsyncComponent(() => import('./components/child.vue'))
export default {
  components: { Child },
  name: 'App',
  setup() {}
}
</script>

<style>
.app {
  background: grey;
  padding: 10px;
}
</style>
