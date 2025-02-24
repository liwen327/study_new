<!--
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-21 11:11:28
 * @FilePath: /study_new/vue3/vue3_test/src/components/Demo.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <br />
  <h4>{{ person }}</h4>

  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }}</h3>
  <button @click="name += '~ '">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>

  <hr />
  <h4>num的值：{{ num }}</h4>
  <button @click="num++">num++</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      // 浅响应式，只监听第一层属性的变化，第二层属性的变化不会被监听到
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: '20'
        }
      }
    })
    // person = readonly(person) //person中的外层属性与内层属性都是只读的
    person = shallowReadonly(person) // preson中的外层属性是只读的，内层属性还是响应式的,person.job.j1.salary是响应式的,name和age不是响应式的

    let num = ref(0)
    // num = readonly(num)  //使用了readonly，num不是响应式的

    return {
      num,
      person,
      ...toRefs(person)
    }
  }
}
</script>

<style></style>
