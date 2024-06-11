<script lang="ts" setup>
import CardButton from 'components/basic/CardButton.vue';
import { computed, inject, ref } from 'vue';
import { ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface';

const isShiny = ref(inject<boolean>('isShiny') || false);

const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 5,
});
const personalBtnBgImg = computed(() =>
  isShiny.value ? '643s.gif' : '643.gif'
);
</script>

<template>
  <div class="main-card-wrapper">
    <card-button
      icon-name="folder"
      route-path="/projects"
      :responsive-props="cardButtonResponsiveProps"
      background-color="#eef4f8"
      text-color="#081e27"
      title-keyword="homeBtnMyProjects"
    />
    <card-button
      icon-name="person"
      route-path="/about"
      :responsive-props="cardButtonResponsiveProps"
      :secondary-avatar="personalBtnBgImg"
      background-color="#eef4f8"
      text-color="#081e27"
      title-keyword="homeBtnPersonal"
    />
  </div>
</template>
