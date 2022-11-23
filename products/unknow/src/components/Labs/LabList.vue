<template>
  <div class="LabList" role="list-content">
    <div 
      class="LabList__Item"
      v-for="lab in labs"
    >
      <lab-list-item
        :lab-name="lab.name"
        :address="lab.address"
        :contacts="lab.contacts"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import LabListItem from './LabListItem.vue';
interface iPropsLabList {
  labs: iLab[]
}
defineProps<iPropsLabList>();
</script>
<style lang="scss" scoped>
.LabList {
  
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  row-gap: 1rem;
  & .LabList__Item {
    width: 100%
  }
}
</style>