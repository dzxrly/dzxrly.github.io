<script setup lang="ts">
import { type PropType } from 'vue';
import { type ToolsSites } from 'src/interface/tools-sites';

const props = defineProps({
  toolSiteInfo: {
    type: Object as PropType<ToolsSites>,
    required: true,
  },
});
</script>

<template>
  <div class="tool-site-info-card-wrapper full-width q-pa-sm">
    <a
      style="display: block"
      :href="props.toolSiteInfo.siteUrl"
      target="_blank"
      referrerpolicy="strict-origin-when-cross-origin"
    >
      <q-card class="tool-site-info-card full-width rounded-borders column">
        <q-card-section class="non-selectable col-grow">
          <div class="row justify-between items-center full-width">
            <span class="text-h5 text-primary q-mr-xs">{{ props.toolSiteInfo.siteName }}</span>
            <q-icon class="text-h5 text-primary" name="open_in_new" />
          </div>
          <p
            v-if="props.toolSiteInfo?.siteDesc"
            class="text-body1 q-my-md"
            style="max-lines: 2 !important; text-overflow: ellipsis"
          >
            {{ props.toolSiteInfo.siteDesc }}
          </p>
        </q-card-section>
      </q-card>
    </a>
  </div>
</template>

<style scoped lang="sass">
.tool-site-info-card-wrapper
  max-width: 400px
  min-width: 280px

  .tool-site-info-card
    cursor: pointer
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)
    transform: translateY(0)
    transition: all .25s ease-in-out

  .tool-site-info-card:hover, .tool-site-info-card:active, .tool-site-info-card:focus
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)
    transform: translateY(-3px)
</style>
