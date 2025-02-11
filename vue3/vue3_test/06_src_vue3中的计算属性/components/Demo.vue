<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-11 16:42:46
 * @FilePath: /study_new/vue3/vue3_test/src/components/Demo.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <!-- reactive的模板 -->
  <h2>姓：<input type="text" v-model="person.firstName" /></h2>
  <h2>名：<input type="text" v-model="person.lastName" /></h2>

  <h3>
    全名：<span>{{ person.fullName }}</span>
  </h3>
  <input type="text" v-model="person.fullName" />
  <br /><br />
  <br /><br />
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // reactive形式
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })

    /* // 简写形式，只关注到读取，没有考虑到计算属性被修改的情况
    person.fullName = computed(() => {
      return person.firstName + '_' + person.lastName
    }) */
    // 计算属性----完整写法（考虑到读和写）
    person.fullName = computed({
      get() {
        return person.firstName + '_' + person.lastName
      },
      set(value) {
        const nameArr = value.split('_')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })

    return {
      person
    }
  }
}
</script>

<style></style>
