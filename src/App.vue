<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
import { EventBus } from 'quasar'

const bus = inject<EventBus>('eventBus')
const setBackgroundCover = ref<boolean>(false)
const darkMode = ref<boolean>(true)

const appWrapperBgColor = computed(() =>
  darkMode.value ? 'rgba(133, 115, 113, 0)' : 'rgba(112, 120, 125, 0)')
const appWrapperCoverBgColor = computed(() =>
  darkMode.value ? 'rgba(133, 115, 113, 0.7)' : 'rgba(112, 120, 125, 0.7)')

bus?.on('set-background-cover', (value: boolean) => {
  setBackgroundCover.value = value
})

bus?.on('dark-mode', (value: boolean) => {
  darkMode.value = value
})
</script>

<template>
  <div :class="{ 'app-wrapper-cover' : setBackgroundCover }" class="app-wrapper">
    <router-view />
  </div>
</template>

<style lang="sass" scoped>
.app-wrapper
  height: 100vh
  width: 100vw
  pointer-events: auto
  background-color: v-bind(appWrapperBgColor)
  opacity: 1
  transition: all 0.5s ease-in-out

.app-wrapper-cover
  background-color: v-bind(appWrapperCoverBgColor)
</style>
