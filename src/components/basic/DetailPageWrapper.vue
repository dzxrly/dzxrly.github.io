<script setup lang="ts">
import { computed, nextTick, type PropType, ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { type RouteInfo } from 'src/interface/route-info';
import { useRoute } from 'vue-router';

const props = defineProps({
  toRoute: {
    type: Object as PropType<RouteInfo>,
    default: () => {
      return {
        path: '/',
      };
    },
  },
});

const $q = useQuasar();
const route = useRoute();
const contentRef = ref<HTMLElement | null>(null);

const isLtSm = computed(() => $q.screen.lt.sm);

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    if (contentRef.value) {
      contentRef.value.scrollTop = 0;
    }
  },
);
</script>

<template>
  <div class="detail-page-wrapper full-width full-height q-px-md">
    <div class="back-btn-row row justify-start items-center full-width">
      <q-btn
        :size="isLtSm ? 'md' : 'lg'"
        color="primary"
        flat
        icon="arrow_back"
        round
        aria-label="Back"
        :to="props.toRoute"
      />
    </div>
    <div ref="contentRef" class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="sass">
.detail-page-wrapper
  display: flex
  flex-direction: column
  gap: .75rem
  min-height: 0
  transition: opacity .2s var(--motion-expressive)

  .back-btn-row
    flex: 0 0 auto
    height: 3rem

  .content
    flex: 1 1 auto
    min-height: 0
    overflow-y: auto
    scrollbar-gutter: stable
    padding-bottom: 1rem

  .content::-webkit-scrollbar, .content::-webkit-scrollbar-corner
    background-color: transparent
    width: 0.35rem

  .content::-webkit-scrollbar-thumb
    border-radius: 19px
    background-color: rgba(119, 118, 128, .34)

@media (max-width: 599px)
  .detail-page-wrapper
    gap: .5rem
    padding-left: .75rem
    padding-right: .75rem

    .back-btn-row
      height: 2.75rem

    .content
      padding-bottom: 1.5rem
</style>
