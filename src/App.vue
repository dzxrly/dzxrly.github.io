<script lang="ts" setup>
import { computed, inject, ref } from 'vue';
import { type EventBus, useMeta } from 'quasar';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const bus = inject<EventBus>('eventBus');
const setBackgroundCover = ref<boolean>(false);
const route = useRoute();
const { t, locale } = useI18n({ useScope: 'global' });
const siteUrl = 'https://eggtargaryen.com';
const siteTitle = "Egg Targaryen's Dock";
const siteDescription =
  'Egg Targaryen 的个人导航站，聚合博客、开发工具、开源项目、游戏 Mod 和个人资料。';

bus?.on('set-background-cover', (value: boolean) => {
  setBackgroundCover.value = value;
});

const pageTitle = computed(() => {
  if (route.path === '/tools') return `${t('toolsBtnTitle')} | ${siteTitle}`;
  if (route.path === '/projects') return `${t('homeBtnMyProjects')} | ${siteTitle}`;
  if (route.path.startsWith('/gamemods')) return `${t('homeBtnGameMods')} | ${siteTitle}`;
  if (route.path === '/about') return `${t('homeBtnPersonal')} | ${siteTitle}`;
  return siteTitle;
});

const canonicalUrl = computed(() => `${siteUrl}${route.path === '/' ? '' : route.path}`);

useMeta(() => ({
  title: pageTitle.value,
  meta: {
    description: {
      name: 'description',
      content: siteDescription,
    },
    keywords: {
      name: 'keywords',
      content: 'Egg Targaryen,dzxrly,Quasar,Vue,frontend,open source,game mods,tools,blog',
    },
    ogType: { property: 'og:type', content: 'website' },
    ogTitle: { property: 'og:title', content: pageTitle.value },
    ogDescription: { property: 'og:description', content: siteDescription },
    ogUrl: { property: 'og:url', content: canonicalUrl.value },
    ogImage: { property: 'og:image', content: `${siteUrl}/avatar.png` },
    twitterCard: { name: 'twitter:card', content: 'summary' },
    themeColor: { name: 'theme-color', content: '#006a8e' },
    lang: { 'http-equiv': 'content-language', content: locale.value },
  },
  link: {
    canonical: { rel: 'canonical', href: canonicalUrl.value },
  },
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Egg Targaryen',
        alternateName: 'dzxrly',
        url: siteUrl,
        image: `${siteUrl}/avatar.png`,
        sameAs: [
          'https://github.com/dzxrly',
          'https://blog.eggtargaryen.com',
          'https://steamcommunity.com/id/eggtargaryen/',
          'https://next.nexusmods.com/profile/dzxrly/about-me',
        ],
        knowsAbout: [
          'Deep Learning',
          'Computer Vision',
          'Astronomy Big Data',
          'Android Development',
          'Web Front-end Development',
          'Game Modding',
        ],
      }),
    },
  },
}));
</script>

<template>
  <div :class="{ 'app-wrapper-cover': setBackgroundCover }" class="app-wrapper">
    <router-view />
  </div>
</template>

<style lang="sass" scoped>
.app-wrapper
  min-height: 100vh
  width: 100%
  pointer-events: auto
  background-color: transparent
  opacity: 1
  transition: background-color .2s var(--motion-expressive)
  overflow: hidden

.app-wrapper-cover
  background-color: var(--scrim-color)
</style>
