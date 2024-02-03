import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import langList from './i18n/index'
import { getLocalLangCode } from './i18n/local'
import { createI18n } from 'vue-i18n'

const app = createApp(App)
const i18n = createI18n({
  locale: getLocalLangCode(),
  fallbackLocale: 'enUS',
  messages: langList
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
