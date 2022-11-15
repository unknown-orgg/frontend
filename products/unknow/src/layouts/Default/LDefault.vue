<template>
  <div class="l-default flex flex-column">
    <div class="l-default__top">
      <slot name="header"></slot>
    </div>
    <div class="l-default__middle flex flex-row flex-justify-between">
      <div class="l-default__sidebar">
        <slot name="side-menu"></slot>
      </div>
      <div class="l-default__main container">
        <slot name="default"></slot>
      </div>
    </div>
    <div class="l-default__bottom">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.l-default {
  margin: 0 auto;
  padding: 1rem 0;
}
.l-default__main {
  width: 100%;
}
</style>