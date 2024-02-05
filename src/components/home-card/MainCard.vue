<script lang="ts" setup>
import CardButton from 'components/basic/CardButton.vue'
import { ref } from 'vue'
import { ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface'

const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 5
})
</script>

<template>
  <div class="main-card-wrapper">
    <card-button
      icon-name="folder"
      route-path="/projects"
      :responsive-props="cardButtonResponsiveProps"
      title-keyword="homeBtnMyProjects" />
    <card-button
      icon-name="person"
      route-path="/about"
      secondary-avatar="643s.gif"
      :responsive-props="cardButtonResponsiveProps"
      title-keyword="homeBtnPersonal" />
  </div>
</template>
