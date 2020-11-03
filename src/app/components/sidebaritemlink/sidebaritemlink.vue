<template>
  <div class="comp-module">
    <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
      <slot />
    </a>
    <router-link v-else :to="to">
      <slot />
    </router-link>
  </div>
</template>
<script lang="ts" src="./sidebaritemlink.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
}
</style>
