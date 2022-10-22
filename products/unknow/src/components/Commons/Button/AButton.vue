<template>
  <button 
    class="a-button border-xsmall bg-primary text-white no-border"
    :class="{
      'button-xsmall': size === 'xsmall',
      'button-small': size ==='small',
    }"
    @click.stop.prevent="emits('click', $event)"
  >
    {{ label }}
  </button>
</template>
<script lang="ts" setup>
import { withDefaults } from "vue";

interface iButtonProps {
  label: Label;
  size: Size;
}
interface iButtonEmits {
  (event: "click", value: MouseEvent): void
}
withDefaults(defineProps<iButtonProps>(), {
  size: "small"
});
const emits = defineEmits<iButtonEmits>();
</script>
<style lang="scss" scoped></style>