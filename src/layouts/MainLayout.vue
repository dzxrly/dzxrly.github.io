<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { inject, ref } from 'vue';
import { type EventBus } from 'quasar';

const { locale } = useI18n({ useScope: 'global' });

const bus = inject<EventBus>('eventBus');
const setBackgroundCover = ref<boolean>(false);

const languageDropdownMenuOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-Hans', label: '简体中文' },
  { value: 'zh-Hant', label: '繁體中文' },
];

bus?.on('set-background-cover', (value: boolean) => {
  setBackgroundCover.value = value;
});
</script>

<template>
  <q-layout view="hhh lpR fFf">
    <div
      class="main-header-wrapper row justify-end items-center full-width q-py-sm q-px-md"
      :class="{ 'main-header-wrapper-hover': setBackgroundCover }"
    >
      <q-btn-dropdown
        auto-close
        class="rounded-borders q-py-sm"
        color="primary"
        content-class="rounded-borders"
        flat
        icon="translate"
      >
        <q-list class="bg-secondary-container">
          <q-item
            v-for="option in languageDropdownMenuOptions"
            :key="option.value"
            v-ripple
            clickable
            @click="locale = option.value"
          >
            <q-item-section avatar>
              <q-icon
                :name="option.value === locale ? 'check' : ''"
                color="on-secondary-container"
              />
            </q-item-section>
            <q-item-section class="text-on-secondary-container">{{ option.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="sass" scoped>
.main-header-wrapper
  height: 8vh
  transition: all .25s ease-in-out

.main-header-wrapper-hover
  filter: blur(5px)
</style>
