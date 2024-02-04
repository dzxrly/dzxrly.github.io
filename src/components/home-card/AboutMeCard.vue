<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import PersonalInfo from 'src/data/personal-info'

const $q = useQuasar()
const { t } = useI18n()
const languageBadgeUrl = ref<string[]>(PersonalInfo.languageBadgeUrlList)

const isLtSm = computed(() => $q.screen.lt.sm)
</script>

<template>
  <div class="about-me-card-wrapper">
    <div class="row justify-start items-center full-width q-mb-md">
      <q-btn :size="isLtSm ? 'md' : 'lg'" color="primary" flat icon="arrow_back" round to="/" />
    </div>
    <div :class="isLtSm ? 'column' : 'row'" class="justify-center items-center full-width">
      <div :class="isLtSm ? 'col justify-center' : 'col-4 justify-end'" class="row items-center">
        <q-avatar rounded size="10rem">
          <img alt="avatar" src="/avatar.png">
        </q-avatar>
      </div>
      <div :class="isLtSm ? 'col justify-center q-pt-xl' : 'col-8 justify-start q-pl-xl'" class="row items-center">
        <div class="column justify-center items-start full-width">
          <span class="text-body1 q-my-sm">{{ t('homePersonalInfoChip1') }}</span>
          <span class="text-body1 q-my-sm">{{ t('homePersonalInfoChip2') }}</span>
          <span class="text-body1 q-my-sm">{{ t('homePersonalInfoChip3') }}</span>
          <span class="text-body1 q-mt-sm q-mb-md">{{ t('homePersonalInfoChip4') }}</span>
          <div class="row justify-start items-center wrap">
            <div v-for="langBadge in languageBadgeUrl" :key="langBadge" class="q-mr-sm">
              <img :src="langBadge" alt="language badge">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
