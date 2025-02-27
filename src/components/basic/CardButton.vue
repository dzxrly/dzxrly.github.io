<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed, PropType, ref } from 'vue';
import { openURL, useQuasar } from 'quasar';
import { ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface';
import { RouteInfo } from 'src/interface/route-info';

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
  Boolean(props.secondaryAvatar && props.secondaryAvatar !== '')
);
const avatarTransform = ref<string>(
  isSecondaryAvatar.value ? 'translateY(-100%)' : 'translateY(0)'
);
const avatarHoverOpacity = ref<number>(isSecondaryAvatar.value ? 0 : 1);
const secondaryAvatarTransform = ref<string>(
  isSecondaryAvatar.value ? 'translateY(-50%)' : 'translateY(0)'
);
const responsiveSize = computed(() => {
  const size =
    $q.screen.width * props.responsiveProps?.coefficientA +
    props.responsiveProps?.coefficientB;
  if (size > props.responsiveProps?.valueMax)
    return props.responsiveProps?.valueMax;
  else if (size < props.responsiveProps?.valueMin)
    return props.responsiveProps?.valueMin;
  else return size;
});
const cardSize = computed(() => `${responsiveSize.value}rem`);
const cardMargin = computed(() => `${responsiveSize.value * 0.01}rem`);
const avatarSize = computed(() => `${responsiveSize.value * 0.6}rem`);
const backgroundColor = computed(() => props.backgroundColor);
const textColor = computed(() => props.textColor);

function routeTo(routeInfo: RouteInfo) {
  if (routeInfo.name) {
    routeInfo.params
      ? router.push({
          name: routeInfo.name,
          params: routeInfo.params,
        })
      : router.push({ name: routeInfo.name });
  } else {
    if (routeInfo.path?.indexOf('http') === -1) {
      routeInfo.params
        ? router.push({
            path: routeInfo.path,
            params: routeInfo.params,
          })
        : router.push({ path: routeInfo.path });
    } else {
      openURL(routeInfo.path ?? '#');
    }
  }
}
</script>

<template>
  <a
    class="custom-card-btn-wrapper rounded-borders"
    style="display: block"
    :href="props.route.path ?? '#'"
    @click.prevent="routeTo(props.route)"
  >
    <div
      v-if="props.route.path && props.route.path.indexOf('http') !== -1"
      class="blank_href_tips_block"
    >
      <q-icon name="open_in_new" color="primary" size="xs" />
    </div>
    <div
      class="secondary-btn column justify-center items-center full-width full-height wrap"
    >
      <q-avatar
        v-if="!props.iconName"
        :size="avatarSize"
        class="custom-card-picture-in-btn"
        rounded
      >
        <q-img :src="props.avatar" alt="card btn avatar">
          <template v-slot:loading>
            <q-spinner-hourglass color="primary" />
          </template>
        </q-img>
      </q-avatar>
      <q-avatar
        v-else
        :class="props.iconColorClass"
        :icon="iconName"
        :size="avatarSize"
        class="custom-card-picture-in-btn"
        color="transparent"
        rounded
      ></q-avatar>
      <span
        :style="{ color: textColor }"
        class="text-subtitle1 text-bold ellipsis"
        >{{ t(props.titleKeyword) }}</span
      >
    </div>
    <div
      v-if="isSecondaryAvatar"
      class="secondary-btn-easter-egg column justify-center items-center full-width wrap"
    >
      <q-avatar :size="avatarSize" class="custom-card-picture-in-btn" rounded>
        <img :src="props.secondaryAvatar" alt="card btn avatar" />
      </q-avatar>
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
  box-shadow: none
  transition: all .25s ease-in-out
  user-select: none
  transform: translateY(0)
  overflow: hidden

  .blank_href_tips_block
    position: absolute
    top: 5%
    right: 5%
    opacity: 0
    transition: opacity .25s ease-in-out

  .custom-card-picture-in-btn
    margin: 0 0 v-bind(cardMargin) 0

  .secondary-btn
    position: absolute
    transform: translateY(0)
    background-color: transparent
    transition: transform .5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity .5s ease-in-out
    opacity: 1

  .secondary-btn-easter-egg
    position: absolute
    top: 50%
    transform: translateY(200%)
    background-color: transparent
    transition: transform .5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity .5s ease-in-out
    opacity: 0

.custom-card-btn-wrapper:hover, .custom-card-btn-wrapper:active
  transform: translateY(-4px)
  box-shadow: 0 2px 4px -1px #0003, 0 4px 5px #00000024, 0 1px 10px #0000001f

  .blank_href_tips_block
    opacity: 1

  .secondary-btn
    transform: v-bind(avatarTransform)
    opacity: v-bind(avatarHoverOpacity)

  .secondary-btn-easter-egg
    transform: v-bind(secondaryAvatarTransform)
    opacity: 1

.custom-card-btn-wrapper:hover
  background-color: rgba(0, 0, 0, 0.1)

.custom-card-btn-wrapper:active
  background-color: rgba(0, 0, 0, 0.3)
</style>
