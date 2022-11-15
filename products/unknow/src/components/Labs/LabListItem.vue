<template>
  <a-card class="LabListItem" role="lab-item" aria-label="laboratório">
    <div class="LabListItem__NameLab">
      <h1>{{ capitalizerPhrase(labName) }}</h1>
    </div>
    <div class="LabListItem__Location">
      <p>{{ address }}</p>
    </div>
    <div class="LabListItem__Contacts" aria-label="contatos">
      <p>
        <span class="text-strong mr--2">email:</span><span>{{ contacts.email }}</span>
      </p>
      <p>
        <span class="text-strong mr--2">telefone:</span><span>{{ contacts.phone }}</span>
      </p>
    </div>
    <unorder-list
      class="LabListItem__HealthInsurances" 
      aria-label="convénios aceitos"
      role="list"
      :contents="['unimed', 'mil', 'vivarium']"
      direction="horizontal"
    />
    <div class="LabListItem__Detalhes">
      <a-button
        label="ver detalhes"
      />
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { UnorderList, AButton, ACard } from '@/components/Commons';
import { Maybe } from "@/uteis/maybe";
import { Compose } from "@/uteis/compose";

interface iPropsLabListItem {
  labName: string;
  address: string;
  contacts: iContacts
}
defineProps<iPropsLabListItem>()

const upperCaseFirstLetter = (value: string) => {
  const arrChars = value.split("");
  arrChars[0] = arrChars[0].toUpperCase();
  return arrChars.join("");
}
const capitalizerPhrase = (value: string): string => {
  /* return compose(
    (value: string[]) => value.join(" "),
    (value: string[]) => value.map(upperCaseFirstLetter),
    (value: string): string[] => value.split(" ")
  )(value) */
  return Compose.composeRegular(
    (value: string[]) => value.join(" "),
    (value: string[]) => value.map(upperCaseFirstLetter),
    (value: string) => value.split(" ")
  )(value)
  /* return new Maybe<string>(value)
    .then<string[]>((value: string) => Maybe.just(value.split(" ")))
    .then<string[]>((value: string[]) =>  Maybe.just(value.map(upperCaseFirstLetter)))
    .then<string>((value: string[]) => Maybe.just(value.join(" "))) */
}
</script>
<style lang="scss" scoped>
.LabListItem {
  padding: 1em;
}
.LabListItem__NameLab {
  height: 40px;
  display: flex;
  align-items: flex-start;
}
.LabListItem__Detalhes {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
}
.LabListItem__Contacts {

}
</style>
