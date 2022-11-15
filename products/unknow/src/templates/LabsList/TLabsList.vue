<template>
  <div class="t-labs-list">
    <div class="t-labs-list__labs">
      <slot name="laboratories"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.t-labs-list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  & .t-labs-list__labs {
    width: 100%;
  }
}
</style>