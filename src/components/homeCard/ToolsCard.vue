<script setup lang="ts">
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';
import toolsSitesList from 'src/data/tools-sites-list';
import ToolSiteInfoCard from 'components/basic/ToolSiteInfoCard.vue';
</script>

<template>
  <detail-page-wrapper>
    <div class="row justify-center items-stretch wrap full-width q-py-md">
      <tool-site-info-card
        v-for="(toolSite, index) in toolsSitesList.toolsSitesList"
        :key="index"
        :toolSiteInfo="toolSite"
      />
    </div>
  </detail-page-wrapper>
</template>
