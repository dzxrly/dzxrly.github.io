<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed, inject, onMounted, provide, ref, watch } from 'vue';
import { EventBus, useQuasar } from 'quasar';

const { t } = useI18n();
const $q = useQuasar();
const homeTitle = ref<string>('');
const isMouseEnter = ref<boolean>(false);
// 1/4096 is the shiny rate in Pokémon games, 0.5 for debug, but I choose 5% as the default value
const isShiny = ref<boolean>(randomShiny(0.05));

const isLtSm = computed(() => $q.screen.lt.sm);
const homeTitleTranslation = computed(() => t('homeTitle'));
let typingInterval: NodeJS.Timeout | null = null;

const bus = inject<EventBus>('eventBus');
provide('isShiny', isShiny);

function randomShiny(rate: number) {
  return Math.random() < rate;
}

function clearTypingInterval() {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
}

function setHomeTitleWithAnimation() {
  homeTitle.value = '';
  // use setInterval to simulate typing animation
  let i = 0;
  typingInterval = setInterval(() => {
    if (i < homeTitleTranslation.value.length) {
      homeTitle.value += homeTitleTranslation.value.charAt(i);
      i++;
    } else clearTypingInterval();
  }, 150);
}

watch(
  () => homeTitleTranslation.value,
  () => {
    clearTypingInterval();
    setHomeTitleWithAnimation();
  }
);

watch(
  () => isMouseEnter.value,
  () => {
    bus?.emit('set-background-cover', isMouseEnter.value);
  }
);

onMounted(() => {
  clearTypingInterval();
  setHomeTitleWithAnimation();
  console.log('Shiny:', isShiny.value);
});
</script>

<template>
  <q-page
    class="home-page-wrapper column justify-center items-center"
    style="min-height: 0"
  >
    <div
      :class="{ 'home-title-hover': isMouseEnter }"
      class="home-title full-width row justify-center items-center q-py-xl"
      @click="isMouseEnter = false"
    >
      <span
        :class="{ 'text-body1': isLtSm, 'text-h5': !isLtSm }"
        class="home-title-span text-on-background text-bold non-selectable"
        >{{ homeTitle }}</span
      >
    </div>
    <div
      :class="{
        'home-card-hover shadow-8': isMouseEnter,
        'shadow-4': !isMouseEnter,
      }"
      class="home-card full-width bg-card-background text-on-surface q-pt-md q-pb-md column justify-start items-center"
      @mouseenter="isMouseEnter = true"
      @mouseleave="isMouseEnter = false"
    >
      <div
        class="home-card-modal-bar-wrapper row justify-center items-center full-width q-mb-md"
      >
        <div class="home-card-modal-bar"></div>
      </div>
      <div class="home-card-view col full-width row justify-center items-start">
        <router-view v-slot="{ Component, route }">
          <transition
            :duration="{ enter: 300, leave: 300 }"
            :enter-active-class="
              route.path === '/'
                ? 'animated fadeInLeft'
                : 'animated fadeInRight'
            "
            :leave-active-class="
              route.path === '/'
                ? 'animated fadeOutRight'
                : 'animated fadeOutLeft'
            "
          >
            <keep-alive>
              <component :is="Component" :key="route.path" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.home-page-wrapper
  position: relative

  .home-title
    transform: translateY(20vh)
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    height: 20vh
    box-sizing: border-box

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
    //transform: translateY(0)
    transition: all .25s ease-in-out
    overflow: hidden
    border-top-left-radius: 19px
    border-top-right-radius: 19px
    z-index: 10
    box-sizing: border-box

    .home-card-modal-bar-wrapper
      height: 1rem

      .home-card-modal-bar
        width: 5rem
        height: 0.3rem
        background-color: #70787d
        opacity: 0.5
        border-radius: 19px

    .home-card-view
      height: calc(72vh - 1rem)

  .home-title-hover
    filter: blur(5px)
    transform: translateY(0)

  .home-card-hover
    transform: translateY(0)

.home-page-wrapper::after
  content: ''
  position: absolute
  display: inline
  bottom: 0
  left: 0
  width: 100%
  height: 10vh
  background: #eef4f8
  z-index: 2

@keyframes home-title-span-bling
  0%
    opacity: 1
  50%
    opacity: 0
  100%
    opacity: 1
</style>
