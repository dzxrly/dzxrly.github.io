<script lang="ts" setup>
import CardButton from 'components/basic/CardButton.vue'
import { computed, inject, ref } from 'vue'
import { ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface'
import { EventBus } from 'quasar'

const isShiny = ref(inject<boolean>('isShiny') || false)

const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 5
})
const darkMode = ref<boolean>(true)
const btnBgColor = ref(darkMode.value ? '#2b2221' : '#eef4f8')
const btnTextColor = ref(darkMode.value ? '#fffbff' : '#081e27')
const personalBtnBgImg = computed(() => isShiny.value ? (darkMode.value ? '644s.gif' : '643s.gif') : (darkMode.value ? '644.gif' : '643.gif'))
const personalBtnText = computed(() => isShiny.value ? 'homeBtnPersonalEasterEgg' : (darkMode.value ? 'homeBtnPersonalNormalDark' : 'homeBtnPersonalNormalLight'))

const bus = inject<EventBus>('eventBus')

bus?.on('dark-mode', (value: boolean) => {
  console.log(value)
  darkMode.value = value
  value ? btnBgColor.value = '#2b2221' : btnBgColor.value = '#eef4f8'
  value ? btnTextColor.value = '#fffbff' : btnTextColor.value = '#081e27'
})
</script>

<template>
  <div class="main-card-wrapper">
    <card-button
      icon-name="folder"
      route-path="/projects"
      :responsive-props="cardButtonResponsiveProps"
      :background-color="btnBgColor"
      :dark-mode="darkMode"
      :text-color="btnTextColor"
      title-keyword="homeBtnMyProjects" />
    <card-button
      icon-name="person"
      route-path="/about"
      :background-color="btnBgColor"
      :responsive-props="cardButtonResponsiveProps"
      :dark-mode="darkMode"
      :secondary-avatar="personalBtnBgImg"
      :secondary-title-keyword="personalBtnText"
      :text-color="btnTextColor"
      title-keyword="homeBtnPersonal" />
  </div>
</template>
