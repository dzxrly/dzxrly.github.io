<script lang="ts" setup>
import CardButton from 'components/basic/CardButton.vue';
import { computed, inject, onBeforeUnmount, onDeactivated, ref, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { LoadingBar } from 'quasar';
import {
  cardButtonCssSize,
  type ResponsiveCardBtnInterface,
} from 'src/interface/responsive-card-btn-interface';

const isShiny = inject<Ref<boolean>>('isShiny', ref(false));
const isRevealingShiny = inject<Ref<boolean>>('isRevealingShiny', ref(false));
const triggerShiny =
  inject<(origin?: { x: number; y: number }, prepare?: () => Promise<void>) => boolean>(
    'triggerShiny',
  );
const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 9,
});

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
// 展开期间浏览器会丢掉按钮的 :hover，展开结束后也要等下一次指针移动或按下才恢复；
// 在此之前让按钮保持悬停外观，避免图片先缩回再重新滑出。
const holdPersonalBtnHover = ref<boolean>(false);
let starsTimer: ReturnType<typeof setTimeout> | null = null;

const personalBtnBgImg = computed(() => (isShiny.value ? '643s.gif' : '643.gif'));
const gridCardSize = computed(() => cardButtonCssSize(cardButtonResponsiveProps.value));

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

function startStars() {
  stars.value = buildStars();
  showStars.value = true;
  if (starsTimer) clearTimeout(starsTimer);
  starsTimer = setTimeout(() => {
    showStars.value = false;
    starsTimer = null;
  }, 1800);
}

// 异色 gif 在展开前载入，圆形扫过按钮时直接显示新图；最多等待 1.5 秒，失败也照常展开。
function preloadShinyImage(): Promise<void> {
  const image = new Image();
  image.src = '643s.gif';
  const loaded = image.decode().then(
    () => undefined,
    () => undefined,
  );
  const timeout = new Promise<void>((resolve) => setTimeout(resolve, 1500));
  return Promise.race([loaded, timeout]);
}

// 判定异色（整页只判定一次）；命中时返回 true，配色从按钮中心以圆形展开，星星与展开同时出现。
function handlePersonalBtnTrigger(trigger: HTMLElement): boolean {
  if (shinyFXFired.value || !triggerShiny) return false;
  shinyFXFired.value = true;
  const rect = trigger.getBoundingClientRect();
  return triggerShiny(
    { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
    async () => {
      await preloadShinyImage();
      startStars();
    },
  );
}

watch(isRevealingShiny, (isRevealing) => {
  if (isRevealing) {
    holdPersonalBtnHover.value = true;
    return;
  }
  const release = new AbortController();
  const releaseHover = () => {
    holdPersonalBtnHover.value = false;
    release.abort();
  };
  window.addEventListener('pointermove', releaseHover, { signal: release.signal });
  window.addEventListener('pointerdown', releaseHover, { signal: release.signal });
});

// 触屏上按住按钮相当于悬停，按住期间 CardButton 翻出图片。是否仍按着用触摸事件判断：
// 浏览器识别到长按时会清掉 :active，靠它会让图片刚翻出就翻回去。
// 手指移动超过 10px 视为滑动，取消按住。
const TOUCH_SLOP_PX = 10;
const isTouchHolding = ref<boolean>(false);
let touchStartX = 0;
let touchStartY = 0;
// 按住期间图片已完全翻出（并已判定异色），松手后直接进入展示的停留阶段。
let isHoldFlipped = false;
let lastPointerType = '';
let suppressNextClick = false;

// 触屏点击“关于我”后不立刻跳转：图片翻出并停留 1 秒再跳转，期间顶部进度条走动；
// 若这次判定到异色，等圆形展开播完后再停留 1 秒。鼠标和键盘照常立即跳转。
const SHOWCASE_DWELL_MS = 1000;
// 图片翻出的 transitionend 迟迟不来时（例如过渡被打断）的兜底等待。
const SHOWCASE_FLIP_TIMEOUT_MS = 1200;
const router = useRouter();
const personalBtnTrigger = ref<HTMLElement | null>(null);
const isShowcasing = ref<boolean>(false);
let isShowcaseFlipped = false;
let showcaseTimer: ReturnType<typeof setTimeout> | null = null;
let stopRevealWatch: (() => void) | null = null;

function clearShowcaseWaits() {
  if (showcaseTimer) {
    clearTimeout(showcaseTimer);
    showcaseTimer = null;
  }
  stopRevealWatch?.();
  stopRevealWatch = null;
}

// 进度条按会话计数：路由守卫自己 start/stop 一次，这里与 startShowcase 的 start 配对。
function endShowcase() {
  if (!isShowcasing.value) return;
  clearShowcaseWaits();
  isShowcasing.value = false;
  LoadingBar.stop();
}

function startShowcase(isFlipped: boolean) {
  isShowcasing.value = true;
  isShowcaseFlipped = false;
  LoadingBar.start();
  if (isFlipped) {
    continueShowcase();
    return;
  }
  showcaseTimer = setTimeout(continueShowcase, SHOWCASE_FLIP_TIMEOUT_MS);
}

// 图片已翻出：判定异色（整页只判定一次），展开进行中则等它结束，然后停留。
function continueShowcase() {
  if (!isShowcasing.value || isShowcaseFlipped) return;
  isShowcaseFlipped = true;
  clearShowcaseWaits();
  if (personalBtnTrigger.value) handlePersonalBtnTrigger(personalBtnTrigger.value);
  if (!isRevealingShiny.value) {
    dwellThenNavigate();
    return;
  }
  stopRevealWatch = watch(isRevealingShiny, (isRevealing) => {
    if (!isRevealing) dwellThenNavigate();
  });
}

function dwellThenNavigate() {
  clearShowcaseWaits();
  showcaseTimer = setTimeout(() => {
    showcaseTimer = null;
    void router.push('/about').finally(endShowcase);
  }, SHOWCASE_DWELL_MS);
}

// 离开首页（跳转完成或在等待期间点了别处）时结束展示，图片和悬停外观在隐藏后复位。
function resetPersonalBtnOnLeave() {
  endShowcase();
  if (!isRevealingShiny.value) holdPersonalBtnHover.value = false;
}

onDeactivated(resetPersonalBtnOnLeave);
onBeforeUnmount(resetPersonalBtnOnLeave);

function handlePersonalBtnPointerDown(event: PointerEvent) {
  lastPointerType = event.pointerType;
  suppressNextClick = false;
}

function handlePersonalBtnTouchStart(event: TouchEvent) {
  const touch = event.touches.item(0);
  isHoldFlipped = false;
  if (event.touches.length !== 1 || !touch) {
    isTouchHolding.value = false;
    return;
  }
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
  isTouchHolding.value = true;
}

function handlePersonalBtnTouchMove(event: TouchEvent) {
  const touch = event.touches.item(0);
  if (!isTouchHolding.value || !touch) return;
  if (Math.hypot(touch.clientX - touchStartX, touch.clientY - touchStartY) > TOUCH_SLOP_PX) {
    isTouchHolding.value = false;
    isHoldFlipped = false;
  }
}

// 按住到图片翻出后松手：直接进入停留阶段（同一帧里接上，图片不会先收回），并吞掉随后的点击。
function handlePersonalBtnTouchEnd() {
  const shouldShowcase = isTouchHolding.value && isHoldFlipped && !isShowcasing.value;
  isTouchHolding.value = false;
  isHoldFlipped = false;
  if (!shouldShowcase) return;
  suppressNextClick = true;
  startShowcase(true);
}

function handlePersonalBtnTouchCancel() {
  isTouchHolding.value = false;
  isHoldFlipped = false;
}

// 按住期间不弹出系统的链接长按菜单。
function handlePersonalBtnContextMenu(event: Event) {
  if (isTouchHolding.value) event.preventDefault();
}

function handlePersonalBtnClickCapture(event: Event) {
  const isTouchTap = lastPointerType === 'touch';
  if (!suppressNextClick && !isShowcasing.value && !isTouchTap) return;
  event.preventDefault();
  event.stopPropagation();
  if (suppressNextClick) {
    suppressNextClick = false;
    return;
  }
  if (!isShowcasing.value) startShowcase(false);
}

// 悬停、键盘聚焦、触屏按住或展示中，等按钮下的图片完全翻出（其 transform 过渡结束）再判定异色。
// 滑回时也会触发 transitionend，所以只在按钮仍处于这些状态时判定。
function handlePersonalBtnSlideEnd(event: TransitionEvent) {
  const target = event.target as HTMLElement;
  if (event.propertyName !== 'transform' || !target.classList.contains('secondary-btn-easter-egg'))
    return;
  if (isShowcasing.value) {
    continueShowcase();
    return;
  }
  if (isTouchHolding.value) isHoldFlipped = true;
  else if (!(event.currentTarget as HTMLElement).matches(':hover, :focus-within')) return;
  handlePersonalBtnTrigger(event.currentTarget as HTMLElement);
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
        path: '/modsList',
      }"
      :responsive-props="cardButtonResponsiveProps"
      background-color="var(--primary-container-color)"
      text-color="var(--on-primary-container-color)"
      title-keyword="homeBtnGameMods"
    />
    <card-button
      icon-name="inventory_2"
      :route="{
        path: '/openSourceList',
      }"
      :responsive-props="cardButtonResponsiveProps"
      background-color="var(--primary-container-color)"
      text-color="var(--on-primary-container-color)"
      title-keyword="homeBtnOpenSource"
    />
    <div
      ref="personalBtnTrigger"
      class="personal-btn-trigger"
      @transitionend="handlePersonalBtnSlideEnd"
      @pointerdown="handlePersonalBtnPointerDown"
      @touchstart.passive="handlePersonalBtnTouchStart"
      @touchmove.passive="handlePersonalBtnTouchMove"
      @touchend.passive="handlePersonalBtnTouchEnd"
      @touchcancel.passive="handlePersonalBtnTouchCancel"
      @contextmenu="handlePersonalBtnContextMenu"
      @click.capture="handlePersonalBtnClickCapture"
    >
      <card-button
        icon-name="person"
        :route="{
          path: '/about',
        }"
        :responsive-props="cardButtonResponsiveProps"
        :secondary-avatar="personalBtnBgImg"
        :hold-hover="holdPersonalBtnHover"
        :flipped="isTouchHolding || isShowcasing"
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
  // auto-fit fits as many columns as the dock holds (never more than there
  // are buttons, since empty tracks collapse) without script.
  grid-template-rows: repeat(auto-fill, v-bind(gridCardSize))
  grid-template-columns: repeat(auto-fit, v-bind(gridCardSize))
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
