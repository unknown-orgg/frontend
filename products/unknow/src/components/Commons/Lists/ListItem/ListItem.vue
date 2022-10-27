<template>
  <li 
    class="ListItem"
    role="item"
  >
    {{ content }}
  </li>
</template>
<script lang="ts" setup>
interface iPropsListItem {
  content: Content;
}
defineProps<iPropsListItem>();
</script>