<script setup lang="ts">
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';
import { useRoute } from 'vue-router';
import gameModList from 'src/data/game-mod-list';
import GameModInfoCard from 'components/basic/GameModInfoCard.vue';
import { computed } from 'vue';

const $route = useRoute();

const gameSeries = computed(() => $route.params.gameName);
const modList = computed(() =>
  gameModList.gameModList
    .filter((gameMod) => {
      return gameMod.gameSeries === gameSeries.value;
    })
    .reverse(),
);
</script>

<template>
  <detail-page-wrapper :to-route="{ name: 'modsList' }">
    <div class="row justify-center items-stretch full-width wrap">
      <game-mod-info-card
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
        v-for="(gameMod, index) in modList"
        :key="index"
        :gameModInfo="gameMod"
      />
    </div>
  </detail-page-wrapper>
</template>
