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
    name: "raul cortez",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "raul cortez",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "raul cortez",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "raul cortez",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "raul cortez",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "raul cortez",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  },
  {
    name: "raul cortez",
    address: "vp 18 quadra 39 número 10",
    contacts: {
      email: "raul@email.com",
      phone: "(99) 678989989"
    }
  }
])
</script>
<style lang="scss" scoped>

</style>