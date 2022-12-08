<template>
  <div class="TextLabeled">
    <span class="TextLabeled__Label">{{ label }}</span>
    <slot></slot>
  </div>

</template>
<script lang="ts" setup>
interface TextLabeledProps {
  label: Label;
}
defineProps<TextLabeledProps>();

</script>
<style lang="scss" scoped>
.TextLabeled {
  display: flex;
  flex-direction: column;
  & .TextLabeled__Label {
    color: var(--color-text);
    font-size: var(--font-size-small);
    
  }
}
</style>