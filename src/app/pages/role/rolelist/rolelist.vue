<template>
  <div class="page-module">
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
        label="角色名称"
        prop="title"
        sortable="custom"
        align="center"
        width="80"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="角色描述"
        width="180px"
        align="center"
        prop="description"
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
          <span>{{ scope.row.add_time | date("YYYY-MM-dd") }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="增加时间"
        min-width="150px"
      >
        <template slot-scope="{row}">
          <span
            class="link-type"
            @click="handleUpdate(row)"
          >{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column> -->

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
          <el-button
            v-if="row.status !== 'draft'"
            size="mini"
            @click="handleModifyStatus(row, 'draft')"
          >
            cc
          </el-button>
          <el-button
            v-if="row.status !== 'deleted'"
            size="mini"
            type="danger"
            @click="handleModifyStatus(row, 'deleted')"
          >
            dd
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />
  </div>
</template>
<script lang="ts" src="./rolelist.ts"></script>
<style lang="scss" scoped>
.page-module {
}
</style>
