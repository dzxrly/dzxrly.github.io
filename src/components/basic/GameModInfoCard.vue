<script setup lang="ts">
import { PropType } from 'vue';
import { GameModInfo } from 'src/interface/game-mod-info';
import { openURL } from 'quasar';

const props = defineProps({
  gameModInfo: {
    type: Object as PropType<GameModInfo>,
    required: true,
  },
});
</script>

<template>
  <q-card class="game-mod-info-card-wrapper q-ma-sm rounded-borders">
    <q-card-section class="non-selectable col-grow">
      <span class="text-h5 text-primary q-mr-xs">{{
        props.gameModInfo.modName
      }}</span>
      <div class="row justify-start items-center full-width q-mt-md">
        <q-badge
          :label="props.gameModInfo.gameName"
          color="secondary"
          outline
        ></q-badge>
        <q-badge
          class="q-ml-sm"
          :label="props.gameModInfo.modVersion"
          color="secondary"
          outline
        ></q-badge>
      </div>
      <p
        class="text-body1 q-my-md"
        style="max-lines: 2 !important; text-overflow: ellipsis"
      >
        {{ props.gameModInfo.modDescription }}
      </p>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn
        v-for="(downloadLink, index) in props.gameModInfo.modDownloadLink"
        :key="index"
        color="primary"
        no-caps
        flat
        icon="cloud_download"
        :label="downloadLink.source"
        :href="downloadLink.url"
        target="_blank"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
