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
  <q-card class="game-mod-info-card-wrapper q-ma-sm rounded-borders column">
    <q-card-section class="non-selectable col-grow">
      <span class="text-h5 text-primary q-mr-xs">{{ props.gameModInfo.modName }}</span>
      <div class="row justify-start items-center full-width q-mt-md">
        <q-badge :label="props.gameModInfo.gameName" color="secondary" outline></q-badge>
      </div>
      <p class="text-body1 q-my-md" style="max-lines: 2 !important; text-overflow: ellipsis">
        {{ props.gameModInfo.modDescription }}
      </p>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn
        class="rounded-borders"
        v-for="(downloadLink, index) in props.gameModInfo.modDownloadLink"
        :key="index"
        color="primary"
        no-caps
        flat
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
  min-width: 280px
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)
  transform: translateY(0)
  transition: all .25s ease-in-out

.game-mod-info-card-wrapper:hover, .game-mod-info-card-wrapper:active, .game-mod-info-card-wrapper:focus
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)
  transform: translateY(-3px)
</style>
