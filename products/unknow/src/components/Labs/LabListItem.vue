<template>
  <a-card class="LabListItem" role="lab-item" aria-label="laboratório">
    <div class="LabListItem__NameLab">
      <h1>{{ labName }}</h1>
    </div>
    <div class="LabListItem__Location">
      <p>{{ address }}</p>
    </div>
    <div class="LabListItem__Contacts" aria-label="contatos">
      <p>email:<span>{{ contacts.email }}</span></p>
      <p>telefone:<span>{{ contacts.phone }}</span></p>
    </div>
    <unorder-list
      class="LabListItem__HealthInsurances" 
      aria-label="convénios aceitos"
      role="list"
      :contents="['unimed', 'mil', 'vivarium']"
      direction="horizontal"
    />
    <a-button 
      label="ver detalhes"
    />
  </a-card>
</template>
<script lang="ts" setup>
import { UnorderList, AButton, ACard } from '@/components/Commons';
interface iPropsLabListItem {
  labName: string;
  address: string;
  contacts: iContacts
}
defineProps<iPropsLabListItem>()
</script>
<style lang="scss" scoped></style>
