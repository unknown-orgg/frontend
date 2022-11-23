<template>
  <t-labs-list>
    <template #laboratories>
      <lab-list
        :labs="labs"
      />
    </template>
  </t-labs-list>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { AButton } from "@/components/Commons";
import TLabsList from "@/templates/LabsList/TLabsList.vue";
import LabList from "@/components/Labs/LabList.vue";

const labs = ref<iLab[]>([
  {
    name: "raul cortez",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "Laboratório Unimed",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "Hemoloba",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "Microlab",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "laboratório cedro",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "Domicilab",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "Labac",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "labortório canaã",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "labchecap",
    address: "Av. Tancredo Neves, 3133 Salvador Shopping, PISO G2 (Próximo ao SAC), Caminho das Árvores. 41.820-021 Salvador - BA",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  }
])
</script>
<style lang="scss" scoped>

</style>