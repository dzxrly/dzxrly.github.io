<script lang="ts" setup>
import { computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const isLtSm = computed(() => $q.screen.lt.sm)
</script>

<template>
  <div class="projects-card-wrapper full-width">
    <div class="row justify-start items-center full-width">
      <q-btn :size="isLtSm ? 'md' : 'lg'" color="primary" flat icon="arrow_back" round to="/" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.projects-card-wrapper
  transition: all .25s ease-in-out
</style>
