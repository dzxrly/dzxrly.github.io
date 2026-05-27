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
      role="banner"
    >
      <q-btn-dropdown
        auto-close
        class="language-switch q-py-sm"
        color="primary"
        content-class="language-menu"
        flat
        icon="translate"
        aria-label="Switch language"
      >
        <q-list class="bg-secondary-container text-on-secondary-container">
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
  transition: opacity .2s var(--motion-expressive), transform .2s var(--motion-expressive)
  position: relative
  z-index: 20

  .language-switch
    border-radius: 999px
    min-width: 3rem
    min-height: 3rem
    background: color-mix(in srgb, var(--primary-container-color) 72%, transparent)
    color: var(--on-primary-container-color) !important
    transition: transform .18s var(--motion-bounce), background-color .18s var(--motion-expressive)

  .language-switch:hover,
  .language-switch:focus
    transform: scale(1.04)
    background: var(--primary-container-color)

.main-header-wrapper-hover
  opacity: .46
  transform: translate3d(0, -4px, 0)

:global(.language-menu)
  border-radius: var(--border-radius) !important
  overflow: hidden
  box-shadow: 0 12px 28px rgba(39, 38, 48, .16)
</style>
