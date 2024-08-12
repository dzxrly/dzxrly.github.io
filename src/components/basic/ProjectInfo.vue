<script setup lang="ts">
import { GithubRepoApiResponse } from 'src/interface/open-source-interface';
import { PropType, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  githubRepoInfo: {
    type: Object as PropType<GithubRepoApiResponse>,
    required: true,
  },
});

const { t } = useI18n();

const githubRepoInfo = ref<GithubRepoApiResponse>(props.githubRepoInfo);
</script>

<template>
  <q-card class="repo-card-wrapper q-ma-sm rounded-borders column">
    <q-card-section class="non-selectable col-grow">
      <span class="text-h5 text-primary q-mr-xs">{{
        githubRepoInfo.name
      }}</span>
      <div class="row justify-start items-center full-width">
        <div
          v-if="githubRepoInfo.archived"
          class="row justify-center items-center q-mt-md q-mr-md"
        >
          <q-badge
            v-if="githubRepoInfo.archived"
            label="Archived"
            color="secondary"
            outline
          ></q-badge>
        </div>
        <div class="row justify-center items-center q-mt-md q-mr-md">
          <q-icon class="q-mr-xs" name="star" color="yellow-7" size="1rem" />
          <span>{{ githubRepoInfo.stargazers_count }}</span>
        </div>
        <div class="row justify-center items-center q-mt-md">
          <q-icon
            class="q-mr-xs"
            name="fork_right"
            color="deep-orange-5"
            size="1rem"
          />
          <span>{{ githubRepoInfo.forks_count }}</span>
        </div>
      </div>
      <p
        class="text-body1 q-my-md"
        style="max-lines: 2 !important; text-overflow: ellipsis"
      >
        {{ githubRepoInfo.description }}
      </p>
      <div class="row justify-start items-center">
        <q-badge v-if="!!githubRepoInfo.language" color="primary" outline>
          <q-icon name="language" class="q-mr-xs" />
          {{ githubRepoInfo.language }}
        </q-badge>
        <q-badge
          class="q-ml-sm"
          style="text-transform: uppercase"
          v-if="!!githubRepoInfo.license"
          color="primary"
          outline
        >
          <q-icon name="workspace_premium" class="q-mr-xs" />
          {{ githubRepoInfo.license.key }}
        </q-badge>
      </div>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn
        class="rounded-borders full-width"
        flat
        color="primary"
        :href="githubRepoInfo.html_url"
        target="_blank"
        no-caps
      >
        <q-icon name="open_in_new" />
        <span class="q-ml-xs">{{ t('projectRepoOpenButton') }}</span>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<style lang="sass" scoped>
.repo-card-wrapper
  max-width: 400px
  min-width: 280px
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)
  transform: translateY(0)
  transition: all .25s ease-in-out

.repo-card-wrapper:hover, .repo-card-wrapper:active, .repo-card-wrapper:focus
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)
  transform: translateY(-3px)
</style>
