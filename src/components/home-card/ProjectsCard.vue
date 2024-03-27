<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { GithubRepoApiResponse } from 'src/interface/open-source-interface';
import API from 'src/api/api';
import ProjectInfo from 'components/basic/ProjectInfo.vue';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const { t } = useI18n();

const isLtSm = computed(() => $q.screen.lt.sm);

const githubRepoList = ref<GithubRepoApiResponse[]>([]);
const listLoading = ref(false);

function fetchGithubRepos() {
  listLoading.value = true;
  API.githubRepoList('dzxrly').then((res: any) => {
    githubRepoList.value = (res as GithubRepoApiResponse[]).filter((repo) => !repo.fork).sort((a, b) => {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
    listLoading.value = false;
  }).catch((err) => {
    console.error(err);
    listLoading.value = false;
  });
}

fetchGithubRepos();
</script>

<template>
  <div class="projects-card-wrapper full-width full-height">
    <div class="row justify-start items-center full-width">
      <q-btn :size="isLtSm ? 'md' : 'lg'" color="primary" flat icon="arrow_back" round to="/" />
    </div>
    <div v-if="listLoading" class="column justify-center items-center full-width q-py-xl">
      <q-spinner-hourglass size="5vw" color="primary" />
      <span class="text-subtitle1 text-bold text-primary">{{ t('projectRepoListLoading') }}</span>
    </div>
    <div v-else class="row justify-start items-stretch full-width wrap">
      <project-info
        v-for="(githubRepo, index) in githubRepoList"
        :key="index"
        :githubRepoInfo="githubRepo" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.projects-card-wrapper
  transition: all .25s ease-in-out
</style>
