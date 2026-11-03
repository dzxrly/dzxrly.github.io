<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  cardButtonCssSize,
  type ResponsiveCardBtnInterface,
} from 'src/interface/responsive-card-btn-interface';
import CardButton from 'components/basic/CardButton.vue';
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';
import { GameSeries } from 'src/interface/game-mod-info';

const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 9,
});
const gridCardSize = computed(() => cardButtonCssSize(cardButtonResponsiveProps.value));
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
        background-color="var(--primary-container-color)"
        text-color="var(--on-primary-container-color)"
        title-keyword="gameModBtnGameNameMHSeries"
      />
      <card-button
        avatar="publicAssets/gameLogos/logo_pragmata.png"
        :route="{
          name: 'modInfo',
          params: {
            gameName: GameSeries.PRAGMATA,
          },
        }"
        :responsive-props="cardButtonResponsiveProps"
        background-color="var(--primary-container-color)"
        text-color="var(--on-primary-container-color)"
        title-keyword="gameModBtnGameNamePragmata"
      />
    </div>
  </detail-page-wrapper>
</template>

<style scoped lang="sass">
.game-mod-nav-list
  display: grid
  grid-template-rows: repeat(auto-fill, v-bind(gridCardSize))
  grid-template-columns: repeat(auto-fit, v-bind(gridCardSize))
  gap: clamp(.65rem, 2vw, 1rem)
  padding-left: .5rem
  padding-right: .5rem
  justify-items: center
  align-items: center
  justify-content: center
  align-content: start

@media (max-width: 599px)
  .game-mod-nav-list
    gap: .75rem
    padding-left: .25rem
    padding-right: .25rem
</style>
