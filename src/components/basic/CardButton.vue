<script lang="ts" setup>
import { type NavigationFailure, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed, type PropType, ref } from 'vue';
import { openURL } from 'quasar';
import {
  cardButtonCssSize,
  type ResponsiveCardBtnInterface,
} from 'src/interface/responsive-card-btn-interface';
import { type RouteInfo } from 'src/interface/route-info';

const { t } = useI18n();

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
  // Keep the hover look while the pointer is not over the button, e.g.
  // during the shiny reveal, when the browser drops :hover.
  holdHover: {
    type: Boolean,
    default: false,
  },
  // Show the easter-egg image without the raised look, e.g. while a finger
  // holds the tile (the parent tracks the hold with touch events).
  flipped: {
    type: Boolean,
    default: false,
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
const cardSize = computed(() => cardButtonCssSize(props.responsiveProps));
// Inner sizes follow the card through --card-btn-size (set in the style below).
const avatarSize = 'calc(var(--card-btn-size) * .6)';
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
    :class="{
      'custom-card-btn-wrapper--hover': props.holdHover,
      'custom-card-btn-wrapper--flipped': props.flipped,
    }"
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
// The easter-egg image slides in over the icon.
=card-btn-flipped
  .secondary-btn
    transform: v-bind(avatarTransform)
    opacity: v-bind(avatarHoverOpacity)

  .secondary-btn-easter-egg
    transform: v-bind(secondaryAvatarTransform)
    opacity: 1

// Raised look: hover on pointer devices, keyboard focus, or held by the parent
// (shiny reveal). Touch screens never get it from a tap, because a tapped link
// keeps :hover and :focus and stayed raised after coming back from its page.
// No lift or scaling: moving the tile, or scaling its icon, with a transform
// drew them as a resampled bitmap, blurry until the animation ended.
=card-btn-raised
  border-color: color-mix(in srgb, var(--primary-color) 22%, transparent)
  border-radius: var(--border-radius-lg)
  box-shadow: 0 16px 32px rgba(39, 38, 48, .14), 0 3px 8px rgba(39, 38, 48, .08)

  &::before
    opacity: var(--state-hover)

  .blank_href_tips_block
    opacity: 1
    transform: scale(1)

  .custom-card-picture-in-btn
    transform: rotate(-3deg)

  +card-btn-flipped

// Material 3 Expressive tile: hover rounds the corners out, press squares
// them up; the state layer (::before) only changes opacity.
.custom-card-btn-wrapper
  --card-btn-size: v-bind(cardSize)
  position: relative
  display: inline-block
  width: var(--card-btn-size)
  height: var(--card-btn-size)
  cursor: pointer
  background-color: v-bind(backgroundColor)
  color: v-bind(textColor)
  border: 1px solid rgba(119, 118, 128, .12)
  box-shadow: 0 1px 2px rgba(39, 38, 48, .06)
  transition: background-color var(--dur-effects) var(--effects), border-color var(--dur-effects) var(--effects), box-shadow var(--dur-effects) var(--effects), border-radius var(--dur-spring) var(--spring)
  user-select: none
  overflow: hidden
  -webkit-tap-highlight-color: transparent

  &::before
    content: ''
    position: absolute
    inset: 0
    z-index: 0
    pointer-events: none
    background: currentColor
    opacity: 0
    transition: opacity var(--dur-effects-fast) var(--effects-fast)

  .blank_href_tips_block
    position: absolute
    top: 5%
    right: 5%
    z-index: 1
    opacity: 0
    transform: scale(.6)
    transition: opacity var(--dur-effects) var(--effects), transform var(--dur-spring-fast) var(--spring-fast)

  .custom-card-picture-in-btn
    margin: 0 0 calc(var(--card-btn-size) * .01) 0
    transition: transform var(--dur-spring) var(--spring)

  .custom-card-image-frame
    width: calc(var(--card-btn-size) * .72)
    height: calc(var(--card-btn-size) * .38)
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
    transition: transform var(--dur-spring) var(--spring), opacity var(--dur-effects) var(--effects)
    opacity: 1

  .secondary-btn-easter-egg
    position: absolute
    top: 50%
    z-index: 1
    transform: translate3d(0, 160%, 0) scale(.9)
    background-color: transparent
    transition: transform var(--dur-spring) var(--spring), opacity var(--dur-effects) var(--effects)
    opacity: 0

.custom-card-btn-wrapper:focus-visible, .custom-card-btn-wrapper--hover
  +card-btn-raised

@media (hover: hover)
  .custom-card-btn-wrapper:hover
    +card-btn-raised

.custom-card-btn-wrapper:focus-visible::before
  opacity: var(--state-focus)

@media (hover: none), (pointer: coarse)
  .custom-card-btn-wrapper:focus-visible, .custom-card-btn-wrapper--hover
    box-shadow: 0 8px 18px rgba(39, 38, 48, .11), 0 2px 5px rgba(39, 38, 48, .06)

// Touch: holding the tile is the counterpart of hover. The parent sets
// --flipped from touch events, since browsers drop :active once they
// recognise a long press. The image starts to flip out 150ms into the hold,
// so a quick tap only shows the press feedback, and flips back as soon as the
// finger lifts or starts a scroll. The long-press callout is turned off so it
// does not cover the tile.
@media (hover: none)
  .custom-card-btn-wrapper
    -webkit-touch-callout: none

.custom-card-btn-wrapper--flipped
  +card-btn-flipped

  .secondary-btn, .secondary-btn-easter-egg
    transition-delay: 150ms

@media (max-width: 599px)
  .custom-card-btn-wrapper
    border-radius: 24px

  .custom-card-btn-wrapper:focus-visible, .custom-card-btn-wrapper--hover
    border-radius: 28px

@media (max-width: 599px) and (hover: hover)
  .custom-card-btn-wrapper:hover
    border-radius: 28px

// Press squeezes in quickly without overshoot; release springs back through
// the slower base transition. Last, so it wins over the raised corners.
.custom-card-btn-wrapper:active
  border-radius: var(--shape-l-plus)
  transition-duration: var(--dur-press)
  transition-timing-function: var(--effects-fast)

  &::before
    opacity: var(--state-press)
</style>
