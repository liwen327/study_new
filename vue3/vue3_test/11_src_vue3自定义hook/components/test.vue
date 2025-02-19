<!--
 * @Author: liwz
 * @Date: 2025-02-19 09:24:15
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-19 09:29:38
 * @FilePath: /study_new/vue3/vue3_test/src/components/test.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <h3>test.vue中鼠标所点击的位置：x:{{ point.x }}, y:{{ point.y }}</h3>
</template>

<script>
import usePoint from '@/hooks/usePoint'
export default {
  name: 'test',
  setup() {
    let point = usePoint()

    return {
      point
    }
  }
}
</script>
