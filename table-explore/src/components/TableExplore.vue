<!--
 * @Author: liwz
 * @Date: 2024-09-18 10:50:02
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-18 15:52:55
 * @FilePath: /study_new/table-explore/src/components/tableExplore.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->

<template>
  <div>
    <h2>表格组件</h2>
    <vxe-grid
      ref="xTable"
      border
      :expand-config="{ iconOpen: 'fa fa-minus-square', iconClose: 'fa fa-plus-square' }"
      :data="tableData"
      :columns="tableColumns"
      :auto-resize="true"
      resizable
      :highlight-cell="true"
      height="800"
      :merge-cells="mergeCells"
    ></vxe-grid>
  </div>
</template>

<script>
/* eslint-disable */
import { tableData } from './tableExplore'
import { tableColumns } from './tableColumn'
export default {
  name: 'tableExplore',
  data() {
    return {
      tableData: [],
      tableColumns: tableColumns,
      mergeCells: []
    }
  },
  created() {
    this.tableData = tableData
    this.handleMerge()
  },
  methods: {
    handleMerge() {
      let mergeCells = []
      let tableArr = this.tableData
      tableArr.forEach((item, index) => {
        if (item.provinceRowspan) {
          mergeCells.push({ row: index, col: 0, rowspan: item.provinceRowspan })
        }
        if (item.provinceRowspan && item.countyRowspan) {
          mergeCells.push({ row: index, col: 1, rowspan: item.countyRowspan })
        }
        if (item.productsRowspan) {
          mergeCells.push({ row: index, col: 2, rowspan: item.productsRowspan })
        }
      })
      this.mergeCells = mergeCells
      console.log('aaa: ', this.mergeCells)
    }
  }
}
</script>
<style>
table {
  /* border: solid 1px #ccc; */
  border-color: #ccc;
}
</style>
