<template>
  <button 
    role="button"
    class="a-button no-border rounded-1"
    :class="{
      'button-xsmall': size === 'xsmall',
      'button-small': size ==='small',
      'button-medium': size ==='medium',
      'button-large': size ==='large',
      'bg-primary text-white': color === 'primary',
    }"
    @click.stop.prevent="emits('click', $event)"
  >
    {{ label }}
  </button>
</template>
<script lang="ts" setup>
import { withDefaults } from "vue";

interface iButtonProps {
  color: Color;
  label: Label;
  size: Size;
}
interface iButtonEmits {
  (event: "click", value: MouseEvent): void
}
withDefaults(defineProps<iButtonProps>(), {
  size: "small",
  color: "primary"
});
const emits = defineEmits<iButtonEmits>();
</script>
<style lang="scss" scoped></style>