<script lang="ts" setup>
import CardButton from 'components/basic/CardButton.vue';
import { computed, inject, ref } from 'vue';
import { type ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const isShiny = ref(inject<boolean>('isShiny') || false);
const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 9,
});
const cardBtnNumber = ref(5);

const cardSize = computed(() => {
  const baseSize =
    $q.screen.width * cardButtonResponsiveProps.value.coefficientA +
    cardButtonResponsiveProps.value.coefficientB;
  if (baseSize > cardButtonResponsiveProps.value.valueMax) {
    return cardButtonResponsiveProps.value.valueMax;
  } else if (baseSize < cardButtonResponsiveProps.value.valueMin) {
    return cardButtonResponsiveProps.value.valueMin;
  } else return baseSize;
});
const personalBtnBgImg = computed(() => (isShiny.value ? '643s.gif' : '643.gif'));
const gridCardSize = computed(() => {
  return `${cardSize.value}rem`;
});
const gridTemplateCols = computed(() => {
  const maxCols = Math.floor($q.screen.width / 16 / cardSize.value);
  return maxCols > cardBtnNumber.value ? cardBtnNumber.value : maxCols;
});
</script>

<template>
  <div class="main-card-wrapper full-width">
    <card-button
      icon-name="ads_click"
      :route="{
        path: 'https://blog.eggtargaryen.com',
      }"
      :responsive-props="cardButtonResponsiveProps"
      background-color="var(--primary-container-color)"
      text-color="var(--on-primary-container-color)"
      title-keyword="blogBtnTitle"
    />
    <card-button
      icon-name="home_repair_service"
      :route="{
        path: '/tools',
      }"
      :responsive-props="cardButtonResponsiveProps"
      background-color="var(--primary-container-color)"
      text-color="var(--on-primary-container-color)"
      title-keyword="toolsBtnTitle"
    />
    <card-button
      icon-name="folder"
      :route="{
        path: '/projects',
      }"
      :responsive-props="cardButtonResponsiveProps"
      background-color="var(--primary-container-color)"
      text-color="var(--on-primary-container-color)"
      title-keyword="homeBtnMyProjects"
    />
    <card-button
      icon-name="build"
      :route="{
        name: 'modsList',
      }"
      :responsive-props="cardButtonResponsiveProps"
      background-color="var(--primary-container-color)"
      text-color="var(--on-primary-container-color)"
      title-keyword="homeBtnGameMods"
    />
    <card-button
      icon-name="person"
      :route="{
        path: '/about',
      }"
      :responsive-props="cardButtonResponsiveProps"
      :secondary-avatar="personalBtnBgImg"
      background-color="var(--primary-container-color)"
      text-color="var(--on-primary-container-color)"
      title-keyword="homeBtnPersonal"
    />
  </div>
</template>

<style lang="sass" scoped>
.main-card-wrapper
  display: grid
  grid-template-rows: repeat(auto-fill, v-bind(gridCardSize))
  grid-template-columns: repeat(v-bind(gridTemplateCols), v-bind(gridCardSize))
  gap: clamp(.65rem, 2vw, 1rem)
  justify-items: center
  align-items: center
  justify-content: center
  align-content: start
</style>
