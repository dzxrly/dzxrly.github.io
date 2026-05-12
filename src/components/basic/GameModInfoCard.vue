<script setup lang="ts">
import { type PropType } from 'vue';
import { type GameModInfo } from 'src/interface/game-mod-info';

const props = defineProps({
  gameModInfo: {
    type: Object as PropType<GameModInfo>,
    required: true,
  },
});
</script>

<template>
  <q-card class="game-mod-info-card-wrapper expressive-card q-ma-sm rounded-borders column">
    <q-card-section class="non-selectable col-grow">
      <span class="text-h6 text-primary q-mr-xs">{{ props.gameModInfo.modName }}</span>
      <div class="row justify-start items-center full-width q-mt-md">
        <q-badge :label="props.gameModInfo.gameName" color="secondary" outline></q-badge>
      </div>
      <p class="text-body1 q-my-md" style="max-lines: 2 !important; text-overflow: ellipsis">
        {{ props.gameModInfo.modDescription }}
      </p>
    </q-card-section>
    <q-card-actions align="center" class="game-mod-actions">
      <q-btn
        class="mod-download-btn"
        v-for="(downloadLink, index) in props.gameModInfo.modDownloadLink"
        :key="index"
        color="primary"
        no-caps
        unelevated
        rounded
        icon="cloud_download"
        :label="downloadLink.source"
        :href="downloadLink.url"
        referrerpolicy="no-referrer"
        target="_blank"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass">
.game-mod-info-card-wrapper
  max-width: 400px
  width: min(100%, 400px)
  min-width: 0
  min-height: 12rem

  .game-mod-actions
    gap: .5rem
    padding: .5rem 1rem 1rem

  .mod-download-btn
    flex: 0 1 auto
    min-width: 0

@media (max-width: 599px)
  .game-mod-info-card-wrapper
    margin-left: 0
    margin-right: 0

    .game-mod-actions
      justify-content: center
      padding-left: .75rem
      padding-right: .75rem

    .mod-download-btn
      max-width: 100%
</style>
