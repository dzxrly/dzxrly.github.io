<script lang="ts" setup>
import { computed, inject, ref } from 'vue';
import { openURL, useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import PersonalInfo from 'src/data/personal-info';
import { type PersonalWebSite } from 'src/interface/personal-info-interface';
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';

const $q = useQuasar();
const { t } = useI18n();
const languageBadgeUrl = ref<string[]>(PersonalInfo.languageBadgeUrlList);
const webSiteUrl = ref<PersonalWebSite[]>(PersonalInfo.personalWebSiteList);

const isShiny = ref(inject<boolean>('isShiny') || false);

const isLtSm = computed(() => $q.screen.lt.sm);
</script>

<template>
  <detail-page-wrapper>
    <div :class="isLtSm ? 'column' : 'row'" class="justify-center items-center full-width">
      <div :class="isLtSm ? 'col justify-center' : 'col-4 justify-end'" class="row items-center">
        <q-avatar
          v-ripple
          class="cursor-pointer"
          rounded
          size="15rem"
          @click="openURL('https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)')"
        >
          <img :src="isShiny ? '/avatar.png' : '/avatar_s.png'" alt="avatar" />
        </q-avatar>
      </div>
      <div
        :class="isLtSm ? 'col justify-center q-pt-xl' : 'col-8 justify-start q-pl-xl'"
        class="row items-center"
      >
        <div
          :class="isLtSm ? 'items-center' : 'items-start'"
          class="column justify-center full-width"
        >
          <span class="text-body1 q-my-sm text-on-background">{{
            t('homePersonalInfoChip1')
          }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{
            t('homePersonalInfoChip2')
          }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{
            t('homePersonalInfoChip3')
          }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{
            t('homePersonalInfoChip4')
          }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{
            t('homePersonalInfoChip5')
          }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{
            t('homePersonalInfoChip6')
          }}</span>
          <span class="text-body1 q-my-sm text-on-background">{{
            t('homePersonalInfoChip7')
          }}</span>
          <div
            :class="isLtSm ? 'justify-center' : 'justify-start'"
            class="row items-center wrap q-mt-md"
          >
            <div v-for="langBadge in languageBadgeUrl" :key="langBadge" class="q-mr-sm">
              <img :src="langBadge" alt="language badge" />
            </div>
          </div>
          <div
            :class="isLtSm ? 'justify-center' : 'justify-start'"
            class="row items-center wrap q-mt-md"
          >
            <q-btn
              v-for="webSite in webSiteUrl"
              :key="webSite.name"
              :href="webSite.url.includes('@') ? `mailto:${webSite.url}` : webSite.url"
              class="q-mr-sm q-mb-sm"
              color="primary"
              :label="webSite.name"
              no-caps
              outline
              size="md"
              target="_blank"
              type="a"
            />
          </div>
        </div>
      </div>
    </div>
  </detail-page-wrapper>
</template>
