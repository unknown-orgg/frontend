<template>
  <a 
    class="TextAnchour"
    :href="link"
    :class="{
      'TextAnchour--primary': color === 'primary',
      'TextAnchour--secondary': color === 'secondary'
    }"
  >
    <span v-if="icon" class="material-icons fs-600 mr--6">{{ icon }}</span>
    <span v-if="text" class="flex-align-center">{{ text }}</span>
  </a>
</template>
<script lang="ts" setup>
interface iTextAnchourProps {
  color: Color;
  icon?: string;
  link: string;
  text?: string;
}
withDefaults(defineProps<iTextAnchourProps>(), {
  color: "primary"
});
</script>
<style lang="scss" scoped>
.TextAnchour {
  display: flex;
  align-items: center;
}
.TextAnchour--primary {
  color: hsl(var(--color-primary))
}
.TextAnchour--secondary {
  color: hsl(var(--color-secondary));
}
</style>