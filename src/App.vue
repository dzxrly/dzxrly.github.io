<script lang="ts" setup>
import { inject, ref } from 'vue'
import { EventBus } from 'quasar'

const bus = inject<EventBus>('eventBus')
const setBackgroundCover = ref<boolean>(false)

bus?.on('set-background-cover', (value: boolean) => {
  setBackgroundCover.value = value
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
  background-color: rgba(112, 120, 125, 0)
  opacity: 1
  transition: all 0.5s ease-in-out

.app-wrapper-cover
  background-color: rgba(112, 120, 125, 0.7)
</style>
