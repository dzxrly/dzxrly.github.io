<template>
  <q-layout view="hhh lpR fFf">
    <q-header class="bg-transparent">
      <div class="row justify-end items-center full-width q-py-sm q-px-md" style="height: 8vh">
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

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const languageDropdownMenuOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '简体中文' }
]
</script>
