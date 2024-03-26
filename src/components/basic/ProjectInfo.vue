<script setup lang="ts">
import { OpenSourceInterface } from 'src/interface/open-source-interface';
import { PropType } from 'vue';

const props = defineProps({
  openSourceInfo: {
    type: Object as PropType<OpenSourceInterface>,
    required: true
  }
});
</script>

<template>
  <div class="project-info-wrapper column justify-center items-center full-width full-height text-primary">
    <q-img v-if="!!props.openSourceInfo.bannerUri"
           :src="props.openSourceInfo.bannerUri"
           fit="fill"
           class="full-height" />
    <div
      :class="{ 'project-info-bottom-sheet' : !!props.openSourceInfo.bannerUri}"
    >
      {{ props.openSourceInfo.name }}
    </div>
  </div>
</template>

<style scoped lang="sass">
.project-info-bottom-sheet
  position: absolute
  bottom: 0
  background-color: rgba(0, 0, 0, 0.5)
  backdrop-filter: blur(10px)
</style>
