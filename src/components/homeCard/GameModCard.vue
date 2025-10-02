<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import { type ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface';
import CardButton from 'components/basic/CardButton.vue';
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';
import { GameSeries } from 'src/interface/game-mod-info';
import gameModList from 'src/data/game-mod-list';

const $q = useQuasar();

const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 9,
});
const cardBtnNumber = ref(new Set(gameModList.gameModList.map((item) => item.gameSeries)).size);

const cardSize = computed(() => {
  const baseSize =
    $q.screen.width * cardButtonResponsiveProps.value.coefficientA +
    cardButtonResponsiveProps.value.coefficientB;
  if (baseSize > cardButtonResponsiveProps.value.valueMax) {
    return cardButtonResponsiveProps.value.valueMax;
  } else if (baseSize < cardButtonResponsiveProps.value.valueMin) {
    return cardButtonResponsiveProps.value.valueMin;
  } else return baseSize;
});
const gridCardSize = computed(() => {
  return `${cardSize.value}rem`;
});
const gridTemplateCols = computed(() => {
  const maxCols = Math.floor($q.screen.width / 16 / cardSize.value);
  return maxCols > cardBtnNumber.value ? cardBtnNumber.value : maxCols;
});
</script>

<template>
  <detail-page-wrapper>
    <div class="game-mod-nav-list full-width q-py-md">
      <card-button
        avatar="publicAssets/gameLogos/logo_mhs.png"
        :route="{
          name: 'modInfo',
          params: {
            gameName: GameSeries.MHS,
          },
        }"
        :responsive-props="cardButtonResponsiveProps"
        background-color="#eef4f8"
        text-color="#081e27"
        title-keyword="gameModBtnGameNameMHSeries"
      />
    </div>
  </detail-page-wrapper>
</template>

<style scoped lang="sass">
.game-mod-nav-list
  display: grid
  grid-template-rows: repeat(auto-fill, v-bind(gridCardSize))
  grid-template-columns: repeat(v-bind(gridTemplateCols), v-bind(gridCardSize))
  grid-gap: 0.5rem
  justify-items: center
  align-items: center
  justify-content: center
  align-content: start
</style>
