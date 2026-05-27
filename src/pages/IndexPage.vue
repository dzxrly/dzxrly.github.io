<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed, inject, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue';
import { type EventBus, useQuasar } from 'quasar';

const { t } = useI18n();
const $q = useQuasar();
const isDockOpen = ref<boolean>(false);
const homeTitle = ref<string>('');
const isShiny = ref<boolean>(false);
const isShinyChecked = ref<boolean>(false);

// 1/4096 是宝可梦异色概率；dev 模式下放大到 50% 方便测试。判定三次，每次独立 roll，命中立即 break。
const shinyRate = import.meta.env.DEV ? 0.5 : 1 / 4096;
const shinyAttempts = 3;

const isLtSm = computed(() => $q.screen.lt.sm);
const isMobileDock = computed(() => $q.platform.is.mobile || isLtSm.value);
const homeTitleTranslation = computed(() => t('homeTitle'));
let typingInterval: ReturnType<typeof setInterval> | null = null;
let swipeClickGuardTimeout: ReturnType<typeof setTimeout> | null = null;

const bus = inject<EventBus>('eventBus');
provide('isShiny', isShiny);
provide('triggerShiny', triggerShiny);

function triggerShiny(): boolean {
  if (isShinyChecked.value) return isShiny.value;
  isShinyChecked.value = true;
  for (let i = 0; i < shinyAttempts; i++) {
    if (Math.random() < shinyRate) {
      isShiny.value = true;
      break;
    }
  }
  return isShiny.value;
}

function clearTypingInterval() {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
}

function clearSwipeClickGuard() {
  if (swipeClickGuardTimeout) {
    clearTimeout(swipeClickGuardTimeout);
    swipeClickGuardTimeout = null;
  }
}

function setDockOpen(value: boolean) {
  isDockOpen.value = value;
}

function closeDockFromTitleClick() {
  if (swipeClickGuardTimeout) {
    clearSwipeClickGuard();
    return;
  }

  setDockOpen(false);
}

function openDockFromClosedClick() {
  if (swipeClickGuardTimeout) {
    clearSwipeClickGuard();
    return;
  }

  setDockOpen(true);
}

function setDockOpenFromSwipe(value: boolean) {
  setDockOpen(value);
  clearSwipeClickGuard();
  swipeClickGuardTimeout = setTimeout(() => {
    swipeClickGuardTimeout = null;
  }, 350);
}

function toggleDock() {
  if (swipeClickGuardTimeout) {
    clearSwipeClickGuard();
    return;
  }

  isDockOpen.value = !isDockOpen.value;
}

function handleDockPointerEnter(event: PointerEvent) {
  if (!isMobileDock.value && event.pointerType === 'mouse') setDockOpen(true);
}

function handleDockPointerLeave(event: PointerEvent) {
  if (!isMobileDock.value && event.pointerType === 'mouse') setDockOpen(false);
}

function setHomeTitleWithAnimation() {
  clearTypingInterval();
  homeTitle.value = '';

  let i = 0;
  typingInterval = setInterval(() => {
    if (i < homeTitleTranslation.value.length) {
      homeTitle.value += homeTitleTranslation.value.charAt(i);
      i++;
      return;
    }

    clearTypingInterval();
  }, 110);
}

watch(
  () => homeTitleTranslation.value,
  () => setHomeTitleWithAnimation(),
);

watch(
  () => isDockOpen.value,
  (value) => {
    bus?.emit('set-background-cover', value);
  },
);

watch(
  () => isShiny.value,
  (value) => {
    document.documentElement.classList.toggle('shiny', value);
  },
);

onMounted(() => {
  setHomeTitleWithAnimation();
});

onBeforeUnmount(() => {
  clearTypingInterval();
  clearSwipeClickGuard();
  document.documentElement.classList.remove('shiny');
});
</script>

<template>
  <q-page class="home-page-wrapper column justify-center items-center" style="min-height: 0">
    <div
      :class="{ 'home-title-open': isDockOpen }"
      class="home-title full-width row justify-center items-center q-py-xl"
      aria-label="Open dock"
      @click="closeDockFromTitleClick"
      v-touch-swipe.mouse.up="() => setDockOpenFromSwipe(true)"
      v-touch-swipe.mouse.down="() => setDockOpenFromSwipe(false)"
    >
      <span
        :class="{ 'text-body1': isLtSm, 'text-h4': !isLtSm }"
        class="home-title-span text-on-background text-bold non-selectable"
        >{{ homeTitle }}</span
      >
    </div>
    <div
      :class="{
        'home-card-open md3-shadow-4': isDockOpen,
        'md3-shadow-2': !isDockOpen,
      }"
      class="home-card full-width bg-card-background text-on-surface q-pt-md q-pb-md column justify-start items-center"
      @pointerenter="handleDockPointerEnter"
      @pointerleave="handleDockPointerLeave"
    >
      <div
        :class="{ 'home-card-modal-bar-wrapper-open': isDockOpen }"
        class="home-card-modal-bar-wrapper row justify-center items-center full-width q-mb-md cursor-pointer q-py-sm"
        role="button"
        aria-label="Toggle dock"
        tabindex="0"
        @click.stop="toggleDock"
        @keydown.enter.stop="toggleDock"
        @keydown.space.stop.prevent="toggleDock"
        v-touch-swipe.mouse.up="() => setDockOpenFromSwipe(true)"
        v-touch-swipe.mouse.down="() => setDockOpenFromSwipe(false)"
      >
        <div class="home-card-modal-bar"></div>
      </div>
      <div class="home-card-view col full-width row justify-center items-start">
        <router-view v-slot="{ Component, route }">
          <transition
            :duration="{ enter: 300, leave: 300 }"
            :enter-active-class="route.meta.enterActiveClass as string"
            :leave-active-class="route.meta.leaveActiveClass as string"
          >
            <keep-alive>
              <component :is="Component" :key="route.path" class="route-view-panel" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
    <div
      v-if="isMobileDock && !isDockOpen"
      class="home-dock-hit-area"
      role="button"
      aria-label="Open dock"
      tabindex="0"
      @click="openDockFromClosedClick"
      @keydown.enter="openDockFromClosedClick"
      @keydown.space.prevent="openDockFromClosedClick"
      v-touch-swipe.mouse.up="() => setDockOpenFromSwipe(true)"
      v-touch-swipe.mouse.down="() => setDockOpenFromSwipe(false)"
    ></div>
  </q-page>
</template>

<style lang="sass" scoped>
.home-page-wrapper
  position: relative
  min-height: 92vh

  .home-title
    transform: translate3d(0, 20vh, 0) scale(1)
    transform-origin: center
    touch-action: none
    transition: transform .46s var(--motion-bounce), opacity .24s var(--motion-expressive)
    height: 20vh
    box-sizing: border-box

    .home-title-span
      position: relative
      display: inline-block
      white-space: nowrap
      letter-spacing: 0
      line-height: 1.35

    .home-title-span::after
      content: ''
      position: absolute
      bottom: .12em
      right: -.36em
      width: .16em
      height: 1em
      opacity: 1
      background-color: var(--primary-color)
      border-radius: 100px
      animation: home-title-caret 1s steps(2, jump-none) infinite

  .home-card
    position: relative
    height: 72vh
    transform: translate3d(0, 40vh, 0) scale(.985)
    transform-origin: center bottom
    transition: transform .34s var(--motion-bounce), border-radius .34s var(--motion-expressive), box-shadow .24s var(--motion-expressive)
    overflow: hidden
    border-top-left-radius: var(--border-radius-lg)
    border-top-right-radius: var(--border-radius-lg)
    z-index: 10
    box-sizing: border-box

    .home-card-modal-bar-wrapper
      position: relative
      height: 2rem
      flex: 0 0 auto
      touch-action: none
      -webkit-tap-highlight-color: transparent
      z-index: 1
      transition: transform .24s var(--motion-bounce)

      .home-card-modal-bar
        width: 5rem
        height: 0.3rem
        background-color: var(--outline-color)
        opacity: 0.68
        border-radius: 24px
        transition: width .24s var(--motion-bounce), opacity .18s var(--motion-expressive), background-color .18s var(--motion-expressive)

    .home-card-modal-bar-wrapper-open
      transform: translate3d(0, -1px, 0)

      .home-card-modal-bar
        width: 3.4rem
        opacity: 1
        background-color: var(--primary-color)

    .home-card-view
      position: relative
      min-height: 0
      height: calc(72vh - 2rem)
      overflow: hidden

      :global(.route-view-panel)
        position: absolute
        inset: 0
        width: 100%
        height: 100%
        min-height: 0
        overflow-y: auto
        overflow-x: hidden
        overscroll-behavior: contain
        -webkit-overflow-scrolling: touch

      :global(.route-view-panel::-webkit-scrollbar),
      :global(.route-view-panel::-webkit-scrollbar-corner)
        background-color: transparent
        width: .35rem

      :global(.route-view-panel::-webkit-scrollbar-thumb)
        border-radius: 19px
        background-color: rgba(119, 118, 128, .34)

  .home-title-open
    opacity: 0.32
    transform: translate3d(0, 0, 0) scale(0.96)

  .home-card-open
    transform: translate3d(0, 0, 0) scale(1)
    border-top-left-radius: 32px
    border-top-right-radius: 32px

  .home-dock-hit-area
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 46svh
    z-index: 30
    cursor: pointer
    touch-action: none
    -webkit-tap-highlight-color: transparent
    background: transparent

.home-page-wrapper::after
  content: ''
  position: absolute
  display: inline
  bottom: 0
  left: 0
  width: 100%
  height: 10vh
  background: var(--surface-container-color)
  z-index: 2

@media (max-width: 599px)
  .home-page-wrapper
    min-height: 92svh

    .home-title
      height: 18svh
      padding-top: 1.25rem
      padding-bottom: 1.25rem
      transform: translate3d(0, 16svh, 0) scale(1)

      .home-title-span
        max-width: calc(100vw - 2rem)
        overflow: hidden
        text-overflow: ellipsis

    .home-card
      height: 74svh
      transform: translate3d(0, 38svh, 0) scale(.99)
      border-top-left-radius: 28px
      border-top-right-radius: 28px

      .home-card-modal-bar-wrapper
        height: 1.75rem
        margin-bottom: .25rem
        padding-top: .35rem
        padding-bottom: .35rem

      .home-card-view
        height: calc(74svh - 2rem)
        padding: 0 .5rem .75rem

        :global(.route-view-panel)
          inset: .25rem .5rem .75rem
          width: auto
          height: auto

    .home-title-open
      transform: translate3d(0, 0, 0) scale(.96)

    .home-card-open
      transform: translate3d(0, 0, 0) scale(1)
      border-top-left-radius: 28px
      border-top-right-radius: 28px

  .home-page-wrapper::after
    height: 8svh

@keyframes home-title-caret
  0%
    opacity: 1
  50%
    opacity: 0
  100%
    opacity: 1
</style>
