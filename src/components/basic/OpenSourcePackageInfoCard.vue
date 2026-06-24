<script setup lang="ts">
import { type PropType } from 'vue';
import { type OpenSourcePackageInfo } from 'src/interface/open-source-interface';

const props = defineProps({
  openSourcePackageInfo: {
    type: Object as PropType<OpenSourcePackageInfo>,
    required: true,
  },
});
</script>

<template>
  <q-card
    class="open-source-package-info-card-wrapper expressive-card q-ma-sm rounded-borders column"
  >
    <q-card-section class="non-selectable col-grow">
      <span class="text-h6 text-primary q-mr-xs">{{
        props.openSourcePackageInfo.packageName
      }}</span>
      <div class="row justify-start items-center full-width q-mt-md">
        <q-badge
          :label="props.openSourcePackageInfo.packageRegistryName"
          color="secondary"
          outline
        />
      </div>
      <p class="text-body1 q-my-md" style="max-lines: 2 !important; text-overflow: ellipsis">
        {{ props.openSourcePackageInfo.packageDescription }}
      </p>
    </q-card-section>
    <q-card-actions align="center" class="open-source-package-actions">
      <q-btn
        class="package-link-btn"
        v-for="(packageLink, index) in props.openSourcePackageInfo.packageLink"
        :key="index"
        color="primary"
        no-caps
        unelevated
        rounded
        icon="open_in_new"
        :label="packageLink.source"
        :href="packageLink.url"
        referrerpolicy="no-referrer"
        target="_blank"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass">
.open-source-package-info-card-wrapper
  max-width: 400px
  width: min(100%, 400px)
  min-width: 0
  min-height: 12rem

  .open-source-package-actions
    gap: .5rem
    padding: .5rem 1rem 1rem

  .package-link-btn
    flex: 0 1 auto
    min-width: 0

@media (max-width: 599px)
  .open-source-package-info-card-wrapper
    margin-left: 0
    margin-right: 0

    .open-source-package-actions
      justify-content: center
      padding-left: .75rem
      padding-right: .75rem

    .package-link-btn
      max-width: 100%
</style>
