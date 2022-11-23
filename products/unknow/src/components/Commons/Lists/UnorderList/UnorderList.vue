<template>
  <ul
    role="unorderlist"
    class="UnorderList hidden-when-shrink flex"
    :class="{
      'flex-row': direction === 'horizontal',
      'flex-column': direction === 'vertical',
      'UnorderList--hidden-items-when-shrink': hidden
    }"
  >
    <list-item 
      v-for="content in contents"
    >
      <slot :content="content" name="items"></slot>
      <list-item v-if="content?.child || content.child?.length">
        <slot :content="content.child"></slot>
      </list-item>
    </list-item>
  </ul>
</template>
<script lang="ts" setup>
import { ListItem } from "@/components/Commons";
interface iPropsUnorderList {
  contents: MenuItem[];
  direction: Direction;
  hidden: boolean;
}
withDefaults(defineProps<iPropsUnorderList>(), {
  direction: "vertical",
  hidden: false
});
</script>
<style lang="scss" scoped>
.UnorderList {
  --gap: 0.5rem;
}
.UnorderList--hidden-items-when-shrink {
  overflow: hidden;
  & li {
    min-width: 200px;
  }
}
</style>