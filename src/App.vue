<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue';
import { type EventBus, useMeta } from 'quasar';
import { useRoute } from 'vue-router';
import githubReposSnapshot from 'src/data/github-repos-snapshot.json';
import { localeFromPath, pageFromPath } from 'src/site/navigation';
import { pageMeta } from 'src/site/seo';

const bus = inject<EventBus>('eventBus');
const setBackgroundCover = ref<boolean>(false);
const route = useRoute();

bus?.on('set-background-cover', (value: boolean) => {
  setBackgroundCover.value = value;
});

// Quasar's SPA Meta plugin inserts its own tags after mounting.
onMounted(() => {
  document.head.querySelectorAll('[data-prerender-seo]').forEach((tag) => tag.remove());
});

useMeta(() => pageMeta(pageFromPath(route.path), localeFromPath(route.path), githubReposSnapshot));
</script>

<template>
  <div :class="{ 'app-wrapper-cover': setBackgroundCover }" class="app-wrapper">
    <router-view />
  </div>
</template>

<style lang="sass" scoped>
.app-wrapper
  position: relative
  isolation: isolate
  min-height: 100vh
  width: 100%
  pointer-events: auto
  overflow: hidden

// The scrim fades as its own layer instead of repainting the whole page's
// background colour.
.app-wrapper::before
  content: ''
  position: fixed
  inset: 0
  z-index: -1
  pointer-events: none
  background-color: var(--scrim-color)
  opacity: 0
  transition: opacity var(--dur-effects) var(--effects)

.app-wrapper-cover::before
  opacity: 1
</style>
