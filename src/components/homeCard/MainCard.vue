<script lang="ts" setup>
import CardButton from 'components/basic/CardButton.vue';
import { computed, inject, ref, type Ref } from 'vue';
import { type ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const isShiny = inject<Ref<boolean>>('isShiny', ref(false));
const triggerShiny = inject<() => boolean>('triggerShiny');
const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 9,
});
const cardBtnNumber = ref(5);

interface ShinyStar {
  dx: number;
  dy: number;
  delay: number;
  duration: number;
  rotation: number;
  size: number;
}

const STAR_COUNT = 14;
const stars = ref<ShinyStar[]>([]);
const showStars = ref<boolean>(false);
const shinyFXFired = ref<boolean>(false);
let starsTimer: ReturnType<typeof setTimeout> | null = null;

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

function buildStars(): ShinyStar[] {
  return Array.from({ length: STAR_COUNT }, (_, i) => {
    const baseAngle = (i / STAR_COUNT) * Math.PI * 2;
    const jitter = (Math.random() - 0.5) * 0.6;
    const angle = baseAngle + jitter;
    const distance = 120 + Math.random() * 80;
    return {
      dx: Math.round(Math.cos(angle) * distance),
      dy: Math.round(Math.sin(angle) * distance),
      delay: Number((Math.random() * 0.18).toFixed(3)),
      duration: Number((0.95 + Math.random() * 0.55).toFixed(3)),
      rotation: Math.round(180 + Math.random() * 360),
      size: Math.round(14 + Math.random() * 10),
    };
  });
}

function starStyle(s: ShinyStar) {
  return {
    '--shiny-dx': `${s.dx}px`,
    '--shiny-dy': `${s.dy}px`,
    '--shiny-delay': `${s.delay}s`,
    '--shiny-duration': `${s.duration}s`,
    '--shiny-rot': `${s.rotation}deg`,
    '--shiny-size': `${s.size}px`,
  };
}

function handlePersonalBtnTrigger() {
  if (shinyFXFired.value || !triggerShiny) return;
  shinyFXFired.value = true;
  triggerShiny();
  if (!isShiny.value) return;
  stars.value = buildStars();
  showStars.value = true;
  if (starsTimer) clearTimeout(starsTimer);
  starsTimer = setTimeout(() => {
    showStars.value = false;
    starsTimer = null;
  }, 1800);
}
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
    <div
      class="personal-btn-trigger"
      @mouseenter="handlePersonalBtnTrigger"
      @focusin="handlePersonalBtnTrigger"
      @touchstart.passive="handlePersonalBtnTrigger"
    >
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
      <div v-if="showStars" class="shiny-stars" aria-hidden="true">
        <span v-for="(s, idx) in stars" :key="idx" class="shiny-star" :style="starStyle(s)" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.main-card-wrapper
  display: grid
  grid-template-rows: repeat(auto-fill, v-bind(gridCardSize))
  grid-template-columns: repeat(v-bind(gridTemplateCols), v-bind(gridCardSize))
  gap: clamp(.65rem, 2vw, 1rem)
  padding: .5rem
  justify-items: center
  align-items: center
  justify-content: center
  align-content: start

  .personal-btn-trigger
    position: relative
    display: inline-block
    vertical-align: top

    .shiny-stars
      position: absolute
      inset: 0
      pointer-events: none
      overflow: visible
      z-index: 6

    .shiny-star
      position: absolute
      top: 50%
      left: 50%
      width: var(--shiny-size, 16px)
      height: var(--shiny-size, 16px)
      margin-top: calc(var(--shiny-size, 16px) * -.5)
      margin-left: calc(var(--shiny-size, 16px) * -.5)
      background: radial-gradient(circle at 50% 40%, #fff7c8 0%, #f5c542 50%, #c8870e 100%)
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)
      filter: drop-shadow(0 0 6px rgba(245, 197, 66, .7))
      opacity: 0
      transform: translate3d(0, 0, 0) scale(0) rotate(0deg)
      animation: shiny-star-burst var(--shiny-duration, 1s) var(--motion-expressive) var(--shiny-delay, 0s) forwards
      will-change: transform, opacity

@keyframes shiny-star-burst
  0%
    transform: translate3d(0, 0, 0) scale(0) rotate(0deg)
    opacity: 0
  18%
    transform: translate3d(calc(var(--shiny-dx) * .25), calc(var(--shiny-dy) * .25), 0) scale(1.25) rotate(calc(var(--shiny-rot) * .2))
    opacity: 1
  65%
    transform: translate3d(calc(var(--shiny-dx) * .82), calc(var(--shiny-dy) * .82), 0) scale(.85) rotate(calc(var(--shiny-rot) * .72))
    opacity: .9
  100%
    transform: translate3d(var(--shiny-dx), var(--shiny-dy), 0) scale(.2) rotate(var(--shiny-rot))
    opacity: 0

@media (max-width: 599px)
  .main-card-wrapper
    gap: .75rem
    padding: .75rem .25rem 1rem
</style>
