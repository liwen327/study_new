<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-11 18:10:57
 * @FilePath: /study_new/vue3/vue3_test/src/components/Demo.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <h3>求和：{{ sum }}</h3>

  <br />
  <button @click="sum++">点击+1</button>
  <!-- <button @click="addSum">点击+1</button> -->
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'Demo',
  watch: {
    sum: {
      handler(newValue, oldValue) {
        // this.sum = newValue
        console.log('sum的值变化了，', newValue, oldValue)
      },
      deep: true, //深度监听
      immediate: true //立即监听
    }
  },
  setup() {
    let sum = ref(0)

    /* function addSum() {
      console.log('sum: ', sum)
      sum = sum.value++
    } */

    return {
      sum
      // addSum
    }
  }
}
</script>

<style></style>
