<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed, onMounted, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const { t } = useI18n()
const $q = useQuasar()
const homeTitle = ref<string>('')
const isLtSm = computed(() => $q.screen.lt.sm)
const homeTitleTranslation = computed(() => t('homeTitle'))
let typingInterval: NodeJS.Timeout | null = null


function clearTypingInterval() {
  if (typingInterval) {
    clearInterval(typingInterval)
    typingInterval = null
  }
}

function setHomeTitleWithAnimation() {
  homeTitle.value = ''
  // use setInterval to simulate typing animation
  let i = 0
  typingInterval = setInterval(() => {
    if (i < homeTitleTranslation.value.length) {
      homeTitle.value += homeTitleTranslation.value.charAt(i)
      i++
    } else clearTypingInterval()
  }, 150)
}

watch(() => homeTitleTranslation.value, () => {
  clearTypingInterval()
  setHomeTitleWithAnimation()
})

onMounted(() => {
  clearTypingInterval()
  setHomeTitleWithAnimation()
})
</script>

<template>
  <q-page class="home-page-wrapper column justify-center items-center">
    <div class="home-title full-width row justify-center items-center q-py-xl">
        <span
          :class="{ 'text-body1': isLtSm, 'text-h5': !isLtSm }"
          class="home-title-span text-on-background text-bold non-selectable"
        >{{ homeTitle }}</span>
    </div>
    <div class="home-card full-width rounded-borders bg-card-background text-on-surface q-pa-md">
      <router-view v-slot="{ Component, route }">
        <transition
          :duration="{ enter: 300, leave: 300 }"
          :enter-active-class="route.path === '/' ? 'animated fadeInLeft' : 'animated fadeInRight'"
          :leave-active-class="route.path === '/' ? 'animated fadeOutRight' : 'animated fadeOutLeft'"
          mode="out-in"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.home-page-wrapper
  position: relative
  overflow: hidden

  .home-title
    transform: translateY(20vh)
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    height: 20vh

    .home-title-span
      position: relative
      letter-spacing: 0.1rem
      line-height: 2rem

    .home-title-span::after
      content: ''
      display: inline
      position: absolute
      bottom: 0
      right: -1rem
      width: 0.8rem
      height: 0.3rem
      opacity: 1
      background-color: #191c1e
      animation: home-title-span-bling 1.5s infinite

  .home-card
    height: 72vh
    transform: translateY(40vh)
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    overflow: scroll
    z-index: 2

  .home-card::-webkit-scrollbar, .home-card::-webkit-scrollbar-corner
    background-color: transparent
    width: 0.3rem

  .home-card::-webkit-scrollbar-thumb
    border-radius: 19px
    background-color: rgba(77, 97, 107, 0)
    transition: all .25s ease-in-out

.home-page-wrapper:hover, .home-page-wrapper:active, .home-page-wrapper:focus
  .home-title
    transform: translateY(0)

  .home-card
    transform: translateY(0)

  .home-card::-webkit-scrollbar-thumb
    background-color: rgba(77, 97, 107, 0.5)

.home-page-wrapper::after
  content: ''
  position: absolute
  display: inline
  bottom: 0
  left: 0
  width: 100%
  height: 10vh
  background: #eef4f8
  z-index: 1

@keyframes home-title-span-bling
  0%
    opacity: 1
  50%
    opacity: 0
  100%
    opacity: 1
</style>