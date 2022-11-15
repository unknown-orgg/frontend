<template>
  <a :href="link">{{ text }}</a>
</template>
<script lang="ts" setup>
interface iTextAnchourProps {
  link: string;
  text: string;
}
defineProps<iTextAnchourProps>();
</script>