<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import { type ResponsiveCardBtnInterface } from 'src/interface/responsive-card-btn-interface';
import CardButton from 'components/basic/CardButton.vue';
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';
import openSourceList from 'src/data/open-source-list';

const $q = useQuasar();

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
const cardBtnNumber = computed(() => availableRegistryInfoList.value.length);

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
  grid-template-columns: repeat(v-bind(gridTemplateCols), v-bind(gridCardSize))
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
