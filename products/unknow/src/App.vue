<template>
  <l-default>
    <template #side-menu>
      <side-menu></side-menu>
    </template>
    <p-labs-list />
  </l-default>
</template>
<script setup lang="ts">
import PLabsList from "@/pages/Labs/LabsList/PLabsList.vue";
import LDefault from "@/layouts/Default/LDefault.vue";
import { SideMenu } from "@/components/Commons";
</script>

<style scoped>
</style>
