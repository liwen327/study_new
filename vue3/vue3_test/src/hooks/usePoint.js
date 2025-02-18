/*
 * @Author: liwz
 * @Date: 2025-02-18 17:32:00
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-18 17:33:34
 * @FilePath: /study_new/vue3/vue3_test/src/hooks/usePoint.js
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */

import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function usePoint() {
  let point = reactive({
    x: 0,
    y: 0
  })
  function savePoint(e) {
    point.x = e.pageX
    point.y = e.pageY
    console.log(point)
  }

  onMounted(() => {
    console.log('----onMounted----')
    window.addEventListener('click', savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
