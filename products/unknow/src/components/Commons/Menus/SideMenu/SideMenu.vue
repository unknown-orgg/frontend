<template>
  <aside 
    class="SideMenu border-rounded border-gray bg-white"
    :class="{ 'SideMenu--hidden': isHidden }"
  >
    <div class="SideMenu__header">
      <a-button
        class="SideMenu__button rounded-1 ghost-button"
        label="click"
        color="primary"
        @click="toggleSideMenu"
      />
    </div>
    <div class="SideMenu__body">
      <unorder-List
        :content="['angra', 'shaman']"
      />
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { AButton, UnorderList } from "@/components/Commons";

const isHidden = ref<boolean>(true);
const toggleSideMenu = () => {
  isHidden.value = !isHidden.value;
}
</script>
<style lang="scss" scoped>
.SideMenu {
  height: 100%;
  width: 300px;
  min-width: 70px;
  max-width: 300px;
  flex-grow: 2;
  transition: width 0.5s linear;
  & .SideMenu__header {
    width: 100%;
    & .SideMenu__button {
      width: inherit;
    }
  }
}
.SideMenu--hidden {
  width: 60px;
}
</style>