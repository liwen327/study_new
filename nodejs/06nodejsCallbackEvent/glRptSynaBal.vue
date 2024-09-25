<!--
 * @Date: 2023-11-18 19:34:37
 * @LastEditTime: 2024-09-04 19:10:55
 * @LastEditors: jiamf1
 * @Description:综合统计表
 * @FilePath: /gl-fe/vueGl/glf/vuedev/src/views/glRpt/glRptSynaBal/glRptSynaBal.vue
-->
<template>
  <div class="glRptQuery vueStyle">
    <!-- 新-头部开始 -->
    <right-btn-header
      :pageId="rptType"
      :pageName="pageName"
      :tableData="completeData"
      :tableCurData="tableData"
      :rptType="'GL_RPT_SYNA_BAL'"
      @exportCurrentData="exportCurrentData"
      @formTypeChange="formTypeChange"
      @filterNameChange="filterNameChange"
      @addColumns="addColumns"
      @exportAllData="exportAllData"
    ></right-btn-header>
    <!-- 新-头部结束 -->

    <!-- 查询条件开始 -->
    <rpt-query-area v-show="!zoomButtonVisible" :rptType="rptType">
      <template v-slot:queryHeader>
        <query-header :rptType="rptType" :prjVisable="true"> </query-header>
      </template>
      <template v-slot:btns>
        <span class="searchWrap" @click="queryHandleSyna" :class="getBtnPer('btn-query')">
          <i class="iconfont iconsousuo"></i>
        </span>
        <span class="highSearch" @click="showSettingModal">高级<i class="iconfont iconxia"></i></span>
      </template>
    </rpt-query-area>
    <!-- 查询条件结束 -->

    <!-- 设置表格单位/格式 开始 -->
    <!-- <setting-bar
      class="settingBar"
      :tableData="completeData"
      :tableCurData="tableData"
      :pageId="rptType"
      :pageName="pageName"
      :zoomButtonVisible="zoomButtonVisible"
      @formTypeChange="formTypeChange"
      @filterNameChange="filterNameChange"
      @addColumns="addColumns"
      @exportAllData="exportAllData"
      @exportCurrentData="exportCurrentData"
      @fullscreenFn="zoomTableHandle"
    ></setting-bar> -->
    <!-- 设置表格单位/格式 结束 -->
    <!-- 表格部分开始 -->
    <div v-show="tableHeight > 60" class="table-wrap" :class="zoomButtonVisible ? 'tableZoom' : ''">
      <!-- 表格开始 -->
      <vx-table
        ref="vTable1"
        :tableId="'glRptBalTable'"
        :tableHeight="tableHeight"
        :tableColumns="tableColumns"
        :tableData="tableData"
        :cellClassName="cellClassName"
        @cellClickEvent="cellClickEvent"
      ></vx-table>
      <!-- 表格结束 -->

      <!-- 自定义分页器开始 -->
      <uf-pager :pager-config="tablePage" @page-change="handlePageChange">
        <template v-slot:footerBtns>
          <div class="calculator">
            <span class="amtage">金额单位：元</span>
            <div v-if="selectAmtType" class="calculatorRes">
              选中金额合计：
              <span class="total-num" ref="copy" :data-clipboard-text="totalNum" @click.stop.prevent="copy">{{ totalNum | filtersMoney }}</span>
            </div>
            <div v-else class="calculatorRes">
              选中数量合计：
              <span class="total-num" ref="copy" :data-clipboard-text="totalNum" @click.stop.prevent="copy">{{ totalNum }}</span>
            </div>
          </div>
        </template>
      </uf-pager>
      <!-- 自定义分页器结束 -->
    </div>
    <!-- 表格部分结束 -->
    <div v-show="zoomButtonVisible" class="tipBox"><span class="tipFullscreen">按Esc键即可退出全屏模式</span></div>

    <!-- 高级查询代码片段 开始 -->
    <setting-query
      :settingQueryVisible="settingQueryVisible"
      @settingQueryVisibleChange="settingQueryVisibleChange"
      ref="projectFn"
      :rptType="rptType"
      @queryClick="queryHandleSyna"
      @setPrj="setPrj"
      @onShowColBtnChange="onShowColBtnChange"
      @onAccTypeChange="onAccTypeChange"
      @getTypeList="getTypeList"
      @qryItemSelectedData="qryItemSelectedDatas"
      :tableData="tableData"
      :rptBal="true"
      :isNormal="false"
    ></setting-query>
    <!-- 高级查询代码片段 结束 -->
  </div>
</template>
<script>
import '../../../render/filterRender'
import { glRptSynaBal } from '../../../../../../glCommon/views/glRpt/glRptSynaBal/glRptSynaBal'
import SettingBar from './components/SettingBar' // 设置表格单位/格式
import RptQueryArea from '../../../components/glRpt/components/RptQueryAreaSyna.vue' //账表查询区域
import settingQueryModal from '../../../components/glRpt/components/settingQueryModal.vue' // 设置方案
// import { tableColumnsSANLAN } from '../../../../../../glCommon/views/glRpt/glRptSynaBal/glRptSynaBalColumns'
import RightBtnHeader from '@/components/glRpt/components/RightBtnHeader'
export default {
  mixins: [glRptSynaBal],
  components: {
    'setting-bar': SettingBar,
    RptQueryArea, // 账表查询区域
    'setting-query': settingQueryModal, // 设置方案
    RightBtnHeader //右上角按钮区
    // 'setting-project': SettingProjectModal
  },
  data() {
    return {
      // tableColumnsSANLAN
    }
  }
}
</script>
<style>
::v-deep .vxe-table .vxe-table--body .vxe-cell .vxe-cell--label {
  white-space: pre-wrap !important;
}
::v-deep .vxe-table .vxe-body--column.col--ellipsis:not(.col--actived) > .vxe-cell,
::v-deep .vxe-table .vxe-footer--column.col--ellipsis:not(.col--actived) > .vxe-cell,
::v-deep .vxe-table .vxe-header--column.col--ellipsis:not(.col--actived) > .vxe-cell {
  white-space: pre-wrap !important;
}
</style>
<style lang="scss" scoped>
@import '../../../../../../glCommon/assets/styles/variable.scss';

.zoomBtn {
  position: absolute;
  left: 10px;
  top: 3px;
}

.calculator {
  font-size: 12px;

  .calculatorRes {
    display: inline-block;

    .total-num {
      cursor: pointer;
    }
  }
}

.tableZoom {
  z-index: 999;
}

// 抽屉相关
.drawer-btn-wrap {
  position: fixed;
  top: 71px;
  right: 0px;
  z-index: 99;
}

.drawer-btn {
  width: 36px;
  height: 32px;
  line-height: 30px;
  background: $uf-primary-color;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 21px 0 0 21px;
  text-align: center;
  cursor: pointer;

  i {
    color: #ffff;
    font-size: 16px;
  }
}

.drawer-content {
  padding: 22px 16px;

  .content-acctype-list {
    height: 70px;
    overflow: hidden;

    .acctype-item label {
      width: 120px;
      padding-left: 2px;
      white-space: nowrap; /* 不换行 */
      overflow: hidden; /* 超出隐藏 */
      text-overflow: ellipsis; /* 超出部分显示省略号 */
    }
  }

  .content-acctype-list.all {
    height: auto;
  }

  .hover {
    color: $uf-primary-color;
  }

  .content-tabs {
    margin-top: 10px;

    .tabs-wrap {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 5px;
        border-bottom: 1px solid #dfe6ec;
        z-index: -1;
      }

      .tab-item {
        display: inline-block;
        max-width: 138px;
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 超出隐藏 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        height: 30px;
        text-align: center;
        font-size: 12px;
        color: #666;
        line-height: 30px;
        padding: 0 20px;
      }

      .tab-item.active {
        border-radius: 4px 4px 0px 0px;
        border: 1px solid $base-border-color;
        border-bottom: 1px solid #fff;
        color: $uf-primary-color;
      }
    }

    .tabs-main {
      .check-wrap {
        padding: 12px 0 11px;
      }

      .tree-wrap {
        width: 100%;
        height: 276px;
        border-radius: 4px;
        border: 1px solid rgba(223, 230, 236, 1);
        padding: 8px 16px;
        overflow: auto;
      }
    }
  }

  .content-else {
    li {
      margin-top: 8px;
    }

    .opt-list {
      margin: 0 6px 6px 0;
    }

    .amt-input {
      width: 80px;
      height: 30px;
    }

    .name-input {
      width: 280px;
      height: 30px;
    }
  }
}
.searchWrap {
  display: inline-block;
  width: 36px;
  height: 28px;
  background: #505766;
  text-align: center;
  line-height: 28px;
  border-radius: 4px;
  .iconsousuo {
    color: #fff;
  }
}
.table-wrap {
  clear: both;
}
</style>
