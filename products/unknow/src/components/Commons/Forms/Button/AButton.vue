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
      'bg-secondary': color === 'secondary'
    }"
    @click.stop.prevent="emits('click', $event)"
  >
    <span v-if="icon" class="material-icons fs-600">{{ icon }}</span>
    <div v-if="icon && label" class="ml--6"></div>
    <span v-if="label" class="flex-align-center">{{ label }}</span>
  </button>
</template>
<script lang="ts" setup>
import { withDefaults } from "vue";

interface iButtonProps {
  color: Color;
  label?: Label;
  size: Size;
  icon?: string;
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