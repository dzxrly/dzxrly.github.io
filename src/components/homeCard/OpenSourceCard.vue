<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  cardButtonCssSize,
  type ResponsiveCardBtnInterface,
} from 'src/interface/responsive-card-btn-interface';
import CardButton from 'components/basic/CardButton.vue';
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';
import openSourceList from 'src/data/open-source-list';

const cardButtonResponsiveProps = ref<ResponsiveCardBtnInterface>({
  coefficientA: 0.015,
  coefficientB: 0.021,
  valueMax: 12,
  valueMin: 9,
});
const availableRegistryInfoList = computed(() => {
  const packageRegistries = new Set(
    openSourceList.openSourcePackageList.map((item) => item.packageRegistry),
  );
  return openSourceList.openSourceRegistryList.filter((registryInfo) =>
    packageRegistries.has(registryInfo.packageRegistry),
  );
});
const gridCardSize = computed(() => cardButtonCssSize(cardButtonResponsiveProps.value));
</script>

<template>
  <detail-page-wrapper>
    <div class="open-source-nav-list full-width q-py-md">
      <card-button
        v-for="registryInfo in availableRegistryInfoList"
        :key="registryInfo.packageRegistry"
        :icon-name="registryInfo.iconName"
        :route="{
          name: 'openSourceInfo',
          params: {
            packageRegistry: registryInfo.packageRegistry,
          },
        }"
        :responsive-props="cardButtonResponsiveProps"
        background-color="var(--primary-container-color)"
        text-color="var(--on-primary-container-color)"
        :title-keyword="registryInfo.titleKeyword"
      />
    </div>
  </detail-page-wrapper>
</template>

<style scoped lang="sass">
.open-source-nav-list
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
  .open-source-nav-list
    gap: .75rem
    padding-left: .25rem
    padding-right: .25rem
</style>
