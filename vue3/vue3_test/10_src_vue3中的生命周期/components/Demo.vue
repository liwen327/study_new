<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-18 11:22:49
 * @FilePath: /study_new/vue3/vue3_test/src/components/Demo.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <br />
  <h4>求和：{{ sum }}</h4>
  <button @click="sum++">点击+1</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
  name: 'Demo',
  beforeCreate() {
    console.log('-----beforeCreate--- ')
  },
  created() {
    console.log('-----created--- ')
  },
  beforeMount() {
    console.log('-----beforeMount--- ')
  },
  mounted() {
    console.log('-----mounted--- ')
  },
  beforeUpdate() {
    console.log('-----beforeUpdate--- ')
  },
  updated() {
    console.log('-----updated--- ')
  },
  beforeDestroy() {
    console.log('-----beforeDestroy--- ')
  },
  destroyed() {
    console.log('-----destroyed--- ')
  },
  setup() {
    let sum = ref(0)
    // setup中的生命周期组合式API先于生命周期配置项执行，打印结果为：
    /*
    -----beforeCreate---
     -----created---
     ----onBeforeMount----
     -----beforeMount---
     ----onMounted----
     -----mounted---
    */
    onBeforeMount(() => {
      console.log('----onBeforeMount----')
    })
    onMounted(() => {
      console.log('----onMounted----')
    })
    onBeforeUpdate(() => {
      console.log('----onBeforeUpdate----')
    })
    onUpdated(() => {
      console.log('----onUpdated----')
    })
    onBeforeUnmount(() => {
      console.log('----onBeforeUnmount----')
    })
    onUnmounted(() => {
      console.log('----onUnmounted----')
    })

    return {
      sum
    }
  }
}
</script>

<style></style>
