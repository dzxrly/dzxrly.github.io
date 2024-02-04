<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'

const { t } = useI18n()
const $q = useQuasar()

const props = defineProps({
  routePath: {
    type: String,
    required: true
  },
  iconName: {
    type: String
  },
  iconColorClass: {
    type: String,
    default: 'text-primary'
  },
  avatar: {
    type: String
  },
  secondaryAvatar: {
    type: String,
    default: ''
  },
  titleKeyword: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    default: '#eef4f8'
  }
})

const router = useRouter()
const backgroundColor = ref(props.backgroundColor)
const isSecondaryAvatar = computed(() => props.secondaryAvatar && props.secondaryAvatar != '')
const avatarTransform = computed(() => isSecondaryAvatar.value ? 'translateY(-100%)' : 'translateY(0)')
const secondaryAvatarTransform = computed(() => isSecondaryAvatar.value ? 'translateY(-50%)' : 'translateY(0)')
const avatarSize = computed(() => $q.screen.lt.sm ? '3rem' : $q.screen.lt.md ? '4rem' : '7rem')

function routeTo() {
  router.push(props.routePath)
}
</script>

<template>
  <div class="custom-card-btn q-ma-md rounded-borders" @click="routeTo">
    <div class="secondary-btn column justify-center items-center full-width full-height">
      <q-avatar v-if="!props.iconName" :size="avatarSize" class="custom-card-picture-in-btn" rounded>
        <img :src="props.avatar" alt="card btn avatar" />
      </q-avatar>
      <q-avatar v-else :class="props.iconColorClass" :icon="iconName" :size="avatarSize"
                class="custom-card-picture-in-btn"
                color="transparent"
                rounded></q-avatar>
      <span class="text-subtitle1 text-bold text-on-secondary-container">{{ t(props.titleKeyword) }}</span>
    </div>
    <div v-if="isSecondaryAvatar"
         class="secondary-btn-easter-egg column justify-center items-center full-width">
      <q-avatar :size="avatarSize" class="custom-card-picture-in-btn" rounded>
        <img :src="props.secondaryAvatar" alt="card btn avatar" />
      </q-avatar>
      <span class="text-subtitle1 text-bold text-on-secondary-container">{{ t(props.titleKeyword) }}</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.custom-card-btn
  position: relative
  display: inline-block
  width: 15rem
  height: 15rem
  cursor: pointer
  background-color: v-bind(backgroundColor)
  box-shadow: none
  transition: all .25s ease-in-out
  user-select: none
  transform: translateY(0)
  overflow: hidden

  .custom-card-picture-in-btn
    margin: 0 0 1rem 0

  .secondary-btn
    position: absolute
    transform: translateY(0)
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)

  .secondary-btn-easter-egg
    position: absolute
    top: 50%
    transform: translateY(200%)
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275)

.custom-card-btn:hover, .custom-card-btn:active
  transform: translateY(-4px)
  box-shadow: 0 2px 4px -1px #0003, 0 4px 5px #00000024, 0 1px 10px #0000001f

  .secondary-btn
    transform: v-bind(avatarTransform)

  .secondary-btn-easter-egg
    transform: v-bind(secondaryAvatarTransform)

.custom-card-btn:hover
  background-color: rgba(0, 0, 0, 0.05)

.custom-card-btn-btn:active
  background-color: rgba(0, 0, 0, 0.2)

@media screen and (max-width: 600px)
  .custom-card-btn
    width: 8rem
    height: 8rem

    .custom-card-picture-in-btn
      margin: 0 0 .3rem 0

@media screen and (max-width: 400px)
  .custom-card-btn
    width: 6rem
    height: 6rem

    .custom-card-picture-in-btn
      margin: 0 0 .1rem 0
</style>
