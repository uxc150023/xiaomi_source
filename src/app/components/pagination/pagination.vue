<template>
  <div class="comp-module">
    <div :class="{ hidden: hidden }" class="pagination-container">
      <el-pagination
        :background="background"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        :layout="layout"
        :page-sizes="pageSizes"
        :total="total"
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./pagination.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
  /deep/ {
    .pagination-container {
      background: #fff;
      padding: 32px 16px;
    }

    .pagination-container.hidden {
      display: none;
    }
  }
}
</style>
