<template>
  <div class="page-module">
    <div class="filter-container">
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-edit"
        @click="handleAdd"
      >
        添加
      </el-button>
    </div>
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
            <el-button type="primary" size="mini" @click="editor(row)">
              编辑
            </el-button>
            <el-button size="mini" type="success" @click="removeRole(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="common-pagination">
      <el-pagination
        v-show="list.length"
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
      :title="add ? '新增角色' : '角色编辑'"
      width="700px"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="common-dialog"
      append-to-body
    >
      <el-form
        :rules="rules"
        ref="roleInfo"
        :model="roleInfo"
        label-width="100px"
        label-position="right"
        class="form-long-width"
      >
        <el-form-item label="角色名称" prop="title">
          <el-input type="text" v-model="roleInfo.title"></el-input>
        </el-form-item>

        <el-form-item label="角色描述" prop="description">
          <el-input type="text" v-model="roleInfo.description"></el-input>
        </el-form-item>

        <el-form-item label="角色状态" prop="status">
          <!-- <el-input type="text" v-model="roleInfo.status"></el-input> -->
          <el-select v-model="roleInfo.status" placeholder="请选择角色状态">
            <el-option label="0" value="0"></el-option>
            <el-option label="1" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="isUserVisible = false">取消</el-button>
        <el-button type="primary" @click="handleCommit()">添加</el-button>
        <el-button type="primary" @click="handleSave()">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./rolelist.ts"></script>
<style lang="scss" scoped>
.page-module {
  padding: 10px 15px 0 15px;
  .page-modal-content {
    min-height: calc(100vh - 192px);
  }
}
</style>
