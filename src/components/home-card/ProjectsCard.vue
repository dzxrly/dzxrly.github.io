<script lang="ts" setup>
import { ref } from 'vue';
import { GithubRepoApiResponse } from 'src/interface/open-source-interface';
import API from 'src/api/api';
import ProjectInfo from 'components/basic/ProjectInfo.vue';
import { useI18n } from 'vue-i18n';
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';

const { t } = useI18n();


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
  <detail-page-wrapper>
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
  </detail-page-wrapper>
</template>
