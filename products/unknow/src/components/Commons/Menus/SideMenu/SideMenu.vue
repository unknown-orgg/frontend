<template>
  <aside 
    class="SideMenu border-rounded border-gray bg-white"
    :class="{ 'SideMenu--hidden': isHidden }"
  >
    <div class="SideMenu__header">
      <a-button
        class="SideMenu__button rounded-1 ghost-button"
        color="secondary"
        icon="settings"
        @click="toggleSideMenu"
      />
    </div>
    <div class="SideMenu__body">
      <unorder-list
        :contents="contents"
        direction="vertical"
        hidden
      >
        <template #items="{ content }">
          <TextAnchour 
            :link="content.url!"
            :text="!isHidden ? content.name : undefined"
            :icon="content.icon"
            color="secondary"
            class="SideMenu__Item pl--11"
          />
        </template>
      </unorder-list>
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { AButton, UnorderList, TextAnchour } from "@/components/Commons";

const isHidden = ref<boolean>(true);
const contents: MenuItem[] = [
  {
    id: 0,
    url: "#",
    name: "Laboratórios",
    icon: "biotech"
  },
  {
    id: 1,
    url: "#",
    name: "Todos os exames disponíveis",
    icon: "science"
  },
  {
    id: 1,
    url: "#",
    name: "Médicos da região",
    icon: "medical_information"
  }
]
const toggleSideMenu = () => {
  isHidden.value = !isHidden.value;
}
</script>
<style lang="scss" scoped>
.SideMenu {
  height: 85vh;
  width: 300px;
  min-width: 70px;
  max-width: 300px;
  flex-grow: 2;
  transition: width 0.2s linear;
  & .SideMenu__header {
    display: flex;
    align-items: center;
    width: 60px;
    & .SideMenu__button {
      width: inherit;
    }
  }
}
.SideMenu__Item {
  width: 250px;
  overflow: hidden;
}
.SideMenu--hidden {
  width: 60px;
}
</style>