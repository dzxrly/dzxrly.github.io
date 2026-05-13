<script lang="ts" setup>
import { type NavigationFailure, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed, type PropType, ref } from 'vue';
import { openURL, useQuasar } from 'quasar';
import { type ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface';
import { type RouteInfo } from 'src/interface/route-info';

const { t } = useI18n();
const $q = useQuasar();

const props = defineProps({
  route: {
    type: Object as PropType<RouteInfo>,
    required: true,
  },
  responsiveProps: {
    type: Object as PropType<ResponsiveCardBtnInterface>,
    required: true,
  },
  iconName: {
    type: String,
  },
  iconColorClass: {
    type: String,
    default: 'text-primary',
  },
  avatar: {
    type: String,
  },
  secondaryAvatar: {
    type: String,
    default: '',
  },
  titleKeyword: {
    type: String,
    required: true,
  },
  secondaryTitleKeyword: {
    type: String,
    default: '',
  },
  backgroundColor: {
    type: String,
    default: '#eef4f8',
  },
  textColor: {
    type: String,
    default: '#081e27',
  },
});

const router = useRouter();
const isSecondaryAvatar = ref<boolean>(
  Boolean(props.secondaryAvatar && props.secondaryAvatar !== ''),
);
const avatarTransform = ref<string>(
  isSecondaryAvatar.value ? 'translate3d(0, -92%, 0) scale(.94)' : 'translate3d(0, 0, 0)',
);
const avatarHoverOpacity = ref<number>(isSecondaryAvatar.value ? 0 : 1);
const secondaryAvatarTransform = ref<string>(
  isSecondaryAvatar.value ? 'translate3d(0, -50%, 0) scale(1)' : 'translate3d(0, 0, 0)',
);
const responsiveSize = computed(() => {
  const size =
    $q.screen.width * props.responsiveProps?.coefficientA + props.responsiveProps?.coefficientB;
  if (size > props.responsiveProps?.valueMax) return props.responsiveProps?.valueMax;
  else if (size < props.responsiveProps?.valueMin) return props.responsiveProps?.valueMin;
  else return size;
});
const cardSize = computed(() => `${responsiveSize.value}rem`);
const cardMargin = computed(() => `${responsiveSize.value * 0.01}rem`);
const avatarSize = computed(() => `${responsiveSize.value * 0.6}rem`);
const imageFrameWidth = computed(() => `${responsiveSize.value * 0.72}rem`);
const imageFrameHeight = computed(() => `${responsiveSize.value * 0.38}rem`);
const backgroundColor = computed(() =>
  props.backgroundColor === '#eef4f8' ? 'var(--primary-container-color)' : props.backgroundColor,
);
const textColor = computed(() =>
  props.textColor === '#081e27' ? 'var(--on-primary-container-color)' : props.textColor,
);
const isExternalRoute = computed(() => props.route.path?.startsWith('http') ?? false);
const externalLinkAttrs = computed(() =>
  isExternalRoute.value ? { target: '_blank', rel: 'noopener noreferrer' } : {},
);

function routeTo(routeInfo: RouteInfo) {
  const handleNavigationFailure = (error: NavigationFailure) => {
    console.error('路由跳转失败:', error);
  };
  if (routeInfo.name) {
    (routeInfo.params
      ? router.push({
          name: routeInfo.name,
          params: routeInfo.params,
        })
      : router.push({ name: routeInfo.name })
    ).catch(handleNavigationFailure);
  } else {
    if (routeInfo.path?.indexOf('http') === -1) {
      router.push({ path: routeInfo.path }).catch(handleNavigationFailure);
    } else {
      openURL(routeInfo.path ?? '#');
    }
  }
}
</script>

<template>
  <a
    class="custom-card-btn-wrapper rounded-borders relative-position"
    style="display: block"
    :href="props.route.path ?? '#'"
    :aria-label="t(props.titleKeyword)"
    v-bind="externalLinkAttrs"
    @click.prevent="routeTo(props.route)"
    referrerpolicy="strict-origin-when-cross-origin"
    v-ripple
  >
    <div v-if="isExternalRoute" class="blank_href_tips_block">
      <q-icon name="open_in_new" color="primary" size="xs" />
    </div>
    <div class="secondary-btn column justify-center items-center full-width full-height wrap">
      <q-avatar
        v-if="props.iconName"
        :class="props.iconColorClass"
        :icon="iconName"
        :size="avatarSize"
        class="custom-card-picture-in-btn"
        color="transparent"
        rounded
      ></q-avatar>
      <div
        v-else
        class="custom-card-image-frame custom-card-picture-in-btn row justify-center items-center"
      >
        <q-img :src="props.avatar" :alt="t(props.titleKeyword)" fit="contain" no-spinner>
          <template v-slot:loading>
            <q-spinner-hourglass color="primary" />
          </template>
        </q-img>
      </div>
      <span :style="{ color: textColor }" class="text-subtitle1 text-bold ellipsis">{{
        t(props.titleKeyword)
      }}</span>
    </div>
    <div
      v-if="isSecondaryAvatar"
      class="secondary-btn-easter-egg column justify-center items-center full-width wrap"
    >
      <div
        class="custom-card-image-frame custom-card-picture-in-btn row justify-center items-center"
      >
        <q-img :src="props.secondaryAvatar" :alt="t(props.titleKeyword)" fit="contain" no-spinner />
      </div>
      <span
        v-if="secondaryTitleKeyword && secondaryTitleKeyword !== ''"
        :style="{ color: textColor }"
        class="text-subtitle1 text-bold ellipsis"
        >{{ t(props.secondaryTitleKeyword) }}</span
      >
    </div>
  </a>
</template>

<style lang="sass" scoped>
.custom-card-btn-wrapper
  position: relative
  display: inline-block
  width: v-bind(cardSize)
  height: v-bind(cardSize)
  cursor: pointer
  background-color: v-bind(backgroundColor)
  color: v-bind(textColor)
  border: 1px solid rgba(119, 118, 128, .12)
  box-shadow: 0 1px 2px rgba(39, 38, 48, .06)
  transition: transform .2s var(--motion-bounce), background-color .18s var(--motion-expressive), border-color .18s var(--motion-expressive), box-shadow .18s var(--motion-expressive), border-radius .2s var(--motion-expressive)
  user-select: none
  transform: translate3d(0, 0, 0)
  overflow: hidden
  will-change: transform

  &::before
    content: ''
    position: absolute
    inset: 0
    z-index: 0
    pointer-events: none
    background: currentColor
    opacity: 0
    transform: scale(.92)
    transition: opacity .16s var(--motion-expressive), transform .2s var(--motion-bounce)

  .blank_href_tips_block
    position: absolute
    top: 5%
    right: 5%
    z-index: 1
    opacity: 0
    transition: opacity .18s var(--motion-expressive)

  .custom-card-picture-in-btn
    margin: 0 0 v-bind(cardMargin) 0
    transition: transform .24s var(--motion-bounce)

  .custom-card-image-frame
    width: v-bind(imageFrameWidth)
    height: v-bind(imageFrameHeight)
    max-width: 78%
    min-height: 2.25rem
    overflow: visible

    :deep(.q-img)
      width: 100%
      height: 100%

    :deep(.q-img__image)
      object-fit: contain !important
      object-position: center !important

  .secondary-btn
    position: absolute
    z-index: 1
    transform: translate3d(0, 0, 0)
    background-color: transparent
    transition: transform .36s var(--motion-bounce), opacity .18s var(--motion-expressive)
    opacity: 1

  .secondary-btn-easter-egg
    position: absolute
    top: 50%
    z-index: 1
    transform: translate3d(0, 160%, 0) scale(.9)
    background-color: transparent
    transition: transform .36s var(--motion-bounce), opacity .18s var(--motion-expressive)
    opacity: 0

.custom-card-btn-wrapper:hover, .custom-card-btn-wrapper:focus
  transform: translate3d(0, -3px, 0) scale(1.015)
  border-color: rgba(0, 106, 142, .22)
  border-radius: var(--border-radius-lg)
  box-shadow: 0 12px 28px rgba(39, 38, 48, .12), 0 2px 6px rgba(39, 38, 48, .06)

  &::before
    opacity: .08
    transform: scale(1)

  .blank_href_tips_block
    opacity: 1

  .custom-card-picture-in-btn
    transform: scale(1.06) rotate(-2deg)

  .secondary-btn
    transform: v-bind(avatarTransform)
    opacity: v-bind(avatarHoverOpacity)

  .secondary-btn-easter-egg
    transform: v-bind(secondaryAvatarTransform)
    opacity: 1

.custom-card-btn-wrapper:active
  transform: translate3d(0, 0, 0) scale(.985)

  &::before
    opacity: .14

@media (hover: none), (pointer: coarse)
  .custom-card-btn-wrapper:hover, .custom-card-btn-wrapper:focus
    transform: translate3d(0, -1px, 0) scale(1.004)
    box-shadow: 0 6px 16px rgba(39, 38, 48, .1), 0 1px 4px rgba(39, 38, 48, .05)

    .custom-card-picture-in-btn
      transform: scale(1.025)

@media (max-width: 599px)
  .custom-card-btn-wrapper
    border-radius: 24px

  .custom-card-btn-wrapper:hover, .custom-card-btn-wrapper:focus
    border-radius: 28px
</style>
