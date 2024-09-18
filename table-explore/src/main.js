/*
 * @Author: liwz
 * @Date: 2024-09-18 10:47:48
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-18 13:41:07
 * @FilePath: /study_new/table-explore/src/main.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Vue from 'vue'
import App from './App.vue'
// import './components/vxeTableVariable.scss'
// import './components/vxeTableCover.scss'

Vue.config.productionTip = false
//全局引入vxe-table
import 'xe-utils'

import VXETable from 'vxe-table'
import 'vxe-table-plugin-antd/dist/style.css'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)

new Vue({
  render: h => h(App)
}).$mount('#app')
