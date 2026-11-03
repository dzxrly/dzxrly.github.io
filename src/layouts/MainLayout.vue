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
            :class="{ 'language-current': option.value === locale }"
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
  transition: opacity var(--dur-effects) var(--effects), transform var(--dur-spring) var(--spring)
  position: relative
  z-index: 20

  // Tonal icon button: a pill that squares up while pressed (app.scss) and
  // stays squarer while its menu is open.
  // Pill radius is half the 3rem height (not 999px), so the corner morph is
  // visible for the whole transition instead of snapping at its end.
  .language-switch
    border-radius: 1.5rem
    min-width: 3rem
    min-height: 3rem
    background: color-mix(in srgb, var(--primary-container-color) 72%, transparent)
    color: var(--on-primary-container-color) !important
    transition: border-radius var(--dur-spring) var(--spring), background-color var(--dur-effects) var(--effects)

  .language-switch:active
    border-radius: var(--shape-m)
    transition-duration: var(--dur-press)
    transition-timing-function: var(--effects-fast)

  .language-switch:hover,
  .language-switch:focus
    background: var(--primary-container-color)

  .language-switch[aria-expanded='true']
    border-radius: var(--shape-l)
    background: var(--primary-container-color)

.main-header-wrapper-hover
  opacity: .46
  transform: translate3d(0, -4px, 0)

// Material 3 Expressive menu: a large-corner container with inset,
// rounded items; the current language's item is a filled pill.
:global(.language-menu)
  border-radius: var(--shape-l-plus) !important
  overflow: hidden
  box-shadow: 0 12px 28px rgba(39, 38, 48, .16)

:global(.language-menu .q-list)
  padding: 4px

:global(.language-menu .q-item)
  min-height: 44px
  border-radius: var(--shape-m)
  transition: border-radius var(--dur-spring) var(--spring), background-color var(--dur-effects) var(--effects)

:global(.language-menu .q-item + .q-item)
  margin-top: 2px

:global(.language-menu .q-item.language-current)
  border-radius: 22px
  background: color-mix(in srgb, var(--on-secondary-container-color) 12%, transparent)
</style>
