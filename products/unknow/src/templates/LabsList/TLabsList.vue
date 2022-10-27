<template>
  <div class="t-labs-list">
    <slot name="laboratories"></slot>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.t-labs-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
}
</style>