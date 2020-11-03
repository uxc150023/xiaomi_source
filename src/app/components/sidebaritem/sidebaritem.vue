<template>
  <div class="comp-module">
    <div
      v-if="!item.meta || !item.meta.hidden"
      :class="[
        'menu-wrapper',
        isCollapse ? 'simple-mode' : 'full-mode',
        { 'first-level': isFirstLevel },
      ]"
    >
      <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
        <sidebaritemlink
          v-if="theOnlyOneChild.meta"
          :to="resolvePath(theOnlyOneChild.path)"
        >
          <el-menu-item
            :index="resolvePath(theOnlyOneChild.path)"
            :class="{ 'submenu-title-noDropdown': isFirstLevel }"
          >
            <i
              v-if="theOnlyOneChild.meta.icon"
              :class="theOnlyOneChild.meta.icon"
            ></i>
            <span v-if="theOnlyOneChild.meta.title" slot="title">{{
              theOnlyOneChild.meta.title
            }}</span>
          </el-menu-item>
        </sidebaritemlink>
      </template>
      <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">
          <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
          <span v-if="item.meta && item.meta.title" slot="title">{{
            item.meta.title
          }}</span>
        </template>
        <template v-if="item.children">
          <sidebaritem
            v-for="child in item.children"
            :key="child.path"
            :item="child"
            :is-collapse="isCollapse"
            :is-first-level="false"
            :base-path="resolvePath(child.path)"
            class="nest-menu"
          />
        </template>
      </el-submenu>
    </div>
  </div>
</template>
<script lang="ts" src="./sidebaritem.ts"></script>

<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
}

.svg-icon {
  margin-right: 16px;
}

.simple-mode {
  .svg-icon {
    margin-left: 20px;
  }
}
</style>

<style lang="scss">
@import "../../styles/_variables.scss";
.el-submenu.is-active > .el-submenu__title {
  color: $subMenuActiveText !important;
}

.full-mode {
  .nest-menu .el-submenu > .el-submenu__title,
  .el-submenu .el-menu-item {
    min-width: $sideBarWidth !important;
    background-color: $subMenuBg !important;

    &:hover {
      background-color: $subMenuHover !important;
    }
  }
}

.simple-mode {
  &.first-level {
    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0px !important;

        .el-submenu__icon-arrow {
          display: none;
        }

        & > span {
          visibility: hidden;
        }
      }
    }
  }
}
</style>
