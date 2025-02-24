<!--
 * @Author: liwz
 * @Date: 2025-02-24 10:52:53
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-24 11:24:30
 * @FilePath: /study_new/vue3/vue3_test/src/components/Dialog.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div>
    <button @click="isShow = true">点击打开弹框</button>
    <!-- 用to属性，让这个结构传送到哪里去，填body就是传送到body层级里 -->
    <teleport to="body">
      <div class="mask" v-if="isShow">
        <div class="dialog">
          <h3>这里是弹框</h3>
          <h3>这里是弹框内容</h3>

          <button @click="isShow = false">关闭弹框</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    let isShow = ref(false)
    return {
      isShow
    }
  }
}
</script>
<style scoped>
.dialog {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: green;
}
.mask {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
