<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const isLtSm = computed(() => $q.screen.lt.sm);
</script>

<template>
  <div class="detail-page-wrapper full-width full-height q-px-md">
    <div class="back-btn-row row justify-start items-center full-width q-mb-md">
      <q-btn
        :size="isLtSm ? 'md' : 'lg'"
        color="primary"
        flat
        icon="arrow_back"
        round
        to="/"
      />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="sass">
.detail-page-wrapper
  transition: all .5s ease-in-out

  .back-btn-row
    height: 3rem

  .content
    height: calc(100% - 3rem)
    overflow-y: auto

  .content::-webkit-scrollbar, .content::-webkit-scrollbar-corner
    background-color: transparent
    width: 0.2rem

  .content::-webkit-scrollbar-thumb
    border-radius: 19px
    background-color: rgba(77, 97, 107, 0)
    transition: all .5s ease-in-out
</style>
