<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { inject, onMounted, ref, watch } from 'vue'
import { EventBus } from 'quasar'

const darkMode = ref<boolean>(false)
const { locale } = useI18n({ useScope: 'global' })

const bus = inject<EventBus>('eventBus')

const languageDropdownMenuOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '简体中文' }
]

function setCssProperty(key: string, value: string) {
  document.body.style.setProperty(key, value)
}

function setDarkModeColorTheme() {
  setCssProperty('--primary-color', '#9c423a')
  setCssProperty('--on-primary-color', '#ffffff')
  setCssProperty('--primary-container-color', '#ffdad6')
  setCssProperty('--on-primary-container-color', '#410002')

  setCssProperty('--secondary-color', '#775653')
  setCssProperty('--on-secondary-color', '#ffffff')
  setCssProperty('--secondary-container-color', '#ffdad6')
  setCssProperty('--on-secondary-container-color', '#2c1513')

  setCssProperty('--tertiary-color', '#715b2e')
  setCssProperty('--on-tertiary-color', '#ffffff')
  setCssProperty('--tertiary-container-color', '#fddfa6')
  setCssProperty('--on-tertiary-container-color', '#261900')

  setCssProperty('--error-color', '#ba1a1a')
  setCssProperty('--on-error-color', '#ffffff')
  setCssProperty('--error-container-color', '#ffdad6')
  setCssProperty('--on-error-container-color', '#410002')

  setCssProperty('--background-color', '#110605')
  setCssProperty('--on-background-color', '#fffbff')

  setCssProperty('--surface-color', '#fffbff')
  setCssProperty('--on-surface-color', '#201a19')

  setCssProperty('--outline-color', '#857371')
  setCssProperty('--surface-variant-color', '#f5ddda')
  setCssProperty('--on-surface-variant-color', '#534341')

  setCssProperty('--card-background-color', '#2b2221')
}

function setLightModeColorTheme() {
  setCssProperty('--primary-color', '#006783')
  setCssProperty('--on-primary-color', '#ffffff')
  setCssProperty('--primary-container-color', '#bce9ff')
  setCssProperty('--on-primary-container-color', '#001f29')

  setCssProperty('--secondary-color', '#4d616b')
  setCssProperty('--on-secondary-color', '#ffffff')
  setCssProperty('--secondary-container-color', '#d0e6f2')
  setCssProperty('--on-secondary-container-color', '#081e27')

  setCssProperty('--tertiary-color', '#5c5b7d')
  setCssProperty('--on-tertiary-color', '#ffffff')
  setCssProperty('--tertiary-container-color', '#e2dfff')
  setCssProperty('--on-tertiary-container-color', '#191836')

  setCssProperty('--error-color', '#ba1a1a')
  setCssProperty('--on-error-color', '#ffffff')
  setCssProperty('--error-container-color', '#ffdad6')
  setCssProperty('--on-error-container-color', '#410002')

  setCssProperty('--background-color', '#fbfcfe')
  setCssProperty('--on-background-color', '#191c1e')

  setCssProperty('--surface-color', '#fbfcfe')
  setCssProperty('--on-surface-color', '#191c1e')

  setCssProperty('--outline-color', '#70787d')
  setCssProperty('--surface-variant-color', '#dce4e9')
  setCssProperty('--on-surface-variant-color', '#40484c')

  setCssProperty('--card-background-color', '#eef4f8')
}

function getBrowserDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

onMounted(() => {
  getBrowserDarkMode() ? setDarkModeColorTheme() : setLightModeColorTheme()
  darkMode.value = getBrowserDarkMode()
  bus?.emit('dark-mode', darkMode.value)
})

watch(darkMode, (value) => {
  bus?.emit('dark-mode', value)
  value ? setDarkModeColorTheme() : setLightModeColorTheme()
})
</script>

<template>
  <q-layout view="hhh lpR fFf">
    <q-header class="bg-transparent">
      <div class="row justify-end items-center full-width q-py-sm q-px-md" style="height: 8vh">
        <q-toggle
          v-model="darkMode"
          checked-icon="dark_mode"
          color="primary"
          keep-color
          unchecked-icon="light_mode"
        />
        <q-btn-dropdown auto-close class="rounded-borders q-py-sm" color="primary" content-class="rounded-borders"
                        flat
                        icon="translate">
          <q-list class="bg-secondary-container">
            <q-item v-for="option in languageDropdownMenuOptions" :key="option.value"
                    v-ripple clickable
                    @click="locale = option.value">
              <q-item-section avatar>
                <q-icon :name="option.value === locale ? 'check' : ''" color="on-secondary-container" />
              </q-item-section>
              <q-item-section class="text-on-secondary-container">{{ option.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
