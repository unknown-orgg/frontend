<template>
  <ul
    v-for="content in contents"
    role="unorderlist"
    class="UnorderList flex"
    :class="{
      'flex-row': direction === 'horizontal',
      'flex-column': direction === 'vertical'
    }"
  >
    <list-item
      :content="content"
    />
  </ul>
</template>
<script lang="ts" setup>
import { ListItem } from "@/components/Commons/Lists";
interface iPropsUnorderList {
  contents: Content[];
  direction: Direction;
}
withDefaults(defineProps<iPropsUnorderList>(), {
  direction: "vertical"
});
</script>
<style lang="scss" scoped>
.UnorderList {
  --gap: 1rem;
}
</style>