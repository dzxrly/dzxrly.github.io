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
      <q-card
        class="tool-site-info-card expressive-card full-width rounded-borders column relative-position"
        v-ripple
      >
        <q-card-section class="non-selectable col-grow">
          <div class="row justify-between items-center full-width">
            <span class="text-h6 text-primary q-mr-xs">{{ props.toolSiteInfo.siteName }}</span>
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
  width: min(100%, 400px)
  min-width: 0

  .tool-site-info-card
    cursor: pointer
    min-height: 10rem

@media (max-width: 599px)
  .tool-site-info-card-wrapper
    padding-left: 0
    padding-right: 0
</style>
