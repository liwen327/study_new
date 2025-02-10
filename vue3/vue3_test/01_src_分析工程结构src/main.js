/*
 * @Author: liwz
 * @Date: 2025-01-22 15:12:57
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-07 10:39:07
 * @FilePath: /study_new/vue3/vue3_test/src/main.js
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
// 引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数，无需用new ，可直接调用
import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 创建应用实例对象--app(类似于之前Vue2中的vm，但app比vm更“轻”,app上面没有那么多的方法，vm上面的方法很多，用到用不到的都在vm上)
const app = createApp(App)
// 挂载
app.mount('#app')
console.log('app: ', app)
// console.log('Vue: ', Vue)

/* const vm = new Vue({
  render: h => h(App)
})
vm.$mount('#app') */
