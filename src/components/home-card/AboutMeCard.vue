<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
import { openURL, useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import PersonalInfo from 'src/data/personal-info'
import { PersonalWebSite } from 'src/interface/personal-info'

const $q = useQuasar()
const { t } = useI18n()
const languageBadgeUrl = ref<string[]>(PersonalInfo.languageBadgeUrlList)
const webSiteUrl = ref<PersonalWebSite[]>(PersonalInfo.personalWebSiteList)

const isShiny = ref(inject<boolean>('isShiny') || false)

const isLtSm = computed(() => $q.screen.lt.sm)
</script>

<template>
  <div class="about-me-card-wrapper full-width">
    <div class="row justify-start items-center full-width q-mb-md">
      <q-btn :size="isLtSm ? 'md' : 'lg'" color="primary" flat icon="arrow_back" round to="/" />
    </div>
    <div :class="isLtSm ? 'column' : 'row'" class="justify-center items-center full-width">
      <div :class="isLtSm ? 'col justify-center' : 'col-4 justify-end'" class="row items-center">
        <q-avatar v-ripple
                  class="cursor-pointer" rounded
                  size="15rem"
                  @click="openURL('https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)')">
          <img :src="isShiny ? '/avatar.png' : '/avatar_s.png'" alt="avatar">
        </q-avatar>
      </div>
      <div :class="isLtSm ? 'col justify-center q-pt-xl' : 'col-8 justify-start q-pl-xl'" class="row items-center">
        <div :class="isLtSm ? 'items-center' : 'items-start'" class="column justify-center full-width">
          <span class="text-body1 q-my-sm text-on-background">{{ t('homePersonalInfoChip1') }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{ t('homePersonalInfoChip2') }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{ t('homePersonalInfoChip3') }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{ t('homePersonalInfoChip4') }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{ t('homePersonalInfoChip5') }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{ t('homePersonalInfoChip6') }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{ t('homePersonalInfoChip7') }}</span>
          <div :class="isLtSm ? 'justify-center' : 'justify-start'" class="row items-center wrap q-mt-md">
            <div v-for="langBadge in languageBadgeUrl" :key="langBadge" class="q-mr-sm">
              <img :src="langBadge" alt="language badge">
            </div>
          </div>
          <div :class="isLtSm ? 'justify-center' : 'justify-start'" class="row items-center wrap q-mt-md">
            <q-btn
              v-for="webSite in webSiteUrl"
              :key="webSite.name"
              :href="webSite.url.includes('@') ? `mailto:${webSite.url}` : webSite.url"
              class="q-mr-sm q-mb-sm"
              color="primary"
              no-caps
              outline
              size="md"
              target="_blank"
              type="a">
              <div class="row justify-center items-center">
                <q-icon v-if="webSite.iconName" :name="webSite.iconName" size="1rem" />
                <q-img v-else :src="webSite.iconPath" alt="web site icon" img-class="text-primary bg-transparent"
                       width="1rem" />
                <span class="q-ml-sm">{{ webSite.name }}</span>
              </div>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.about-me-card-wrapper
  transition: all .5s ease-in-out
</style>
