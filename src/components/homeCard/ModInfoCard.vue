<script setup lang="ts">
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';
import { useRoute } from 'vue-router';
import { type GameModInfo, type GameSeries } from 'src/interface/game-mod-info';
import gameModList from 'src/data/game-mod-list';
import GameModInfoCard from 'components/basic/GameModInfoCard.vue';

const $route = useRoute();

// get GameSeries from route.params.gameName
const gameSeries: GameSeries = $route.params.gameName as GameSeries;
const modList = gameModList.gameModList.map((gameMod) => {
  if (gameMod.gameSeries === gameSeries) {
    return gameMod;
  }
});
</script>

<template>
  <detail-page-wrapper :to-route="{ name: 'modsList' }">
    <div class="row justify-center items-stretch full-width wrap">
      <game-mod-info-card
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
        v-for="(gameMod, index) in modList.reverse()"
        :key="index"
        :gameModInfo="gameMod as GameModInfo"
      />
    </div>
  </detail-page-wrapper>
</template>
