<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-24 10:58:47
 * @FilePath: /study_new/vue3/vue3_test/src/components/son.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="son">我是Son组件:</div>
  <Dialog> </Dialog>
</template>

<script>
import { inject } from 'vue'
import Dialog from './Dialog.vue'
export default {
  components: { Dialog },
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
