<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-18 17:33:56
 * @FilePath: /study_new/vue3/vue3_test/src/components/Demo.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <br />
  <h3>当前鼠标所点击的位置：x:{{ point.x }} y:{{ point.y }}</h3>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',
  setup() {
    let point = usePoint()

    return {
      point
    }
  }
}
</script>

<style></style>
