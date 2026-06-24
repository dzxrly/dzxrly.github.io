<script setup lang="ts">
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';
import { useRoute } from 'vue-router';
import {
  type OpenSourcePackageInfo,
  type OpenSourcePackageRegistry,
} from 'src/interface/open-source-interface';
import openSourceList from 'src/data/open-source-list';
import OpenSourcePackageInfoCard from 'components/basic/OpenSourcePackageInfoCard.vue';
import { computed } from 'vue';

const $route = useRoute();

// get OpenSourcePackageRegistry from route.params.packageRegistry
const packageRegistry: OpenSourcePackageRegistry = $route.params
  .packageRegistry as OpenSourcePackageRegistry;
const packageList = computed(() =>
  openSourceList.openSourcePackageList
    .filter((openSourcePackage) => {
      return openSourcePackage.packageRegistry === packageRegistry;
    })
    .slice()
    .reverse(),
);
</script>

<template>
  <detail-page-wrapper :to-route="{ name: 'openSourceList' }">
    <div class="row justify-center items-stretch full-width wrap">
      <open-source-package-info-card
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
        v-for="(openSourcePackage, index) in packageList"
        :key="index"
        :openSourcePackageInfo="openSourcePackage as OpenSourcePackageInfo"
      />
    </div>
  </detail-page-wrapper>
</template>
