<template>
  <div class="comp-module">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :key="item.meta.title"
        >
          <span
            v-if="
              item.redirect === 'noredirect' || index === breadcrumbs.length - 1
            "
            class="no-redirect"
            >{{ item.meta.title }}</span
          >
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts" src="./breadcrumb.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
}

.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
