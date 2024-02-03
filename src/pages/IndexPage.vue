<template>
  <q-page>
    <div class="home-page-wrapper col justify-center items-center">
      <div class="row justify-center items-center">
        <span
          :class="{ 'text-body1': isLtSm, 'text-h5': !isLtSm }"
          class="home-title-span text-on-background text-bold non-selectable"
        >{{ homeTitle }}</span>
      </div>
      <div class="row justify-center items-center q-mt-lg">
        <div class="q-pa-md rounded-borders bg-card-background text-on-surface">
          TEST
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed, onMounted, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const { t } = useI18n()
const $q = useQuasar()
const homeTitle = ref<string>('')
const isLtSm = computed(() => $q.screen.lt.sm)
const homeTitleTranslation = computed(() => t('homeTitle'))

function setHomeTitleWithAnimation() {
  t('homeTitle').split('').forEach((char, index) => {
    setTimeout(() => {
      homeTitle.value += char
    }, 150 * index)
  })
}

watch(() => homeTitleTranslation.value, () => {
  homeTitle.value = ''
  setHomeTitleWithAnimation()
})

onMounted(() => {
  setHomeTitleWithAnimation()
})
</script>

<style lang="sass">
.home-page-wrapper
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

@keyframes home-title-span-bling
  0%
    opacity: 1
  50%
    opacity: 0
  100%
    opacity: 1
</style>
