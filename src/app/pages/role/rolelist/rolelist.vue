<template>
  <div class="page-module">
    <div class="page-modal-content">
      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
      >
        <el-table-column
          label="编号"
          prop="title"
          sortable="custom"
          align="center"
          width="80"
        >
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="角色名称"
          prop="title"
          align="center"
          min-width="30"
          :class-name="getSortClass('id')"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="角色描述"
          min-width="80"
          align="left"
          prop="description"
          :show-overflow-tooltip="true"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="增加时间"
          width="180px"
          align="center"
          prop="add_time"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.add_time | date("YYYY-MM-DD HH:mm:ss") }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="操作"
          align="center"
          width="230"
          class-name="fixed-width"
        >
          <template slot-scope="{ row }">
            <el-button type="primary" size="mini" @click="handleUpdate(row)">
              aa
            </el-button>
            <el-button
              v-if="row.status !== 'published'"
              size="mini"
              type="success"
              @click="handleModifyStatus(row, 'published')"
            >
              bb
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="common-pagination">
      <el-pagination
        v-show="list.length"
        class="fr"
        background
        @size-change="handleSizeChange"
        @current-change="handleChangePage"
        :current-page.sync="paginationInfo.pages"
        :page-size="paginationInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="paginationInfo.totalSize"
      ></el-pagination>
    </div>

    <el-dialog
      title="批量操作"
      width="700px"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="common-dialog"
      append-to-body
    >
      <el-form
        :rules="rules"
        ref="gcpVisitUserInfo"
        :model="gcpVisitUserInfo"
        label-width="100px"
        label-position="right"
        class="form-long-width"
      >
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./rolelist.ts"></script>
<style lang="scss" scoped>
.page-module {
  padding: 10px 15px;
  .page-modal-content {
    min-height: calc(100vh - 120px);
  }
}
</style>
