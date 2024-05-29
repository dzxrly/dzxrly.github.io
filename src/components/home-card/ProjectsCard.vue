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
    githubRepoList.value = (res as GithubRepoApiResponse[]).filter((repo) => !repo.fork && repo.name !== 'dzxrly').sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
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
    <div v-else class="row justify-center items-stretch full-width wrap">
      <project-info
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
        v-for="(githubRepo, index) in githubRepoList"
        :key="index"
        :githubRepoInfo="githubRepo" />
    </div>
  </detail-page-wrapper>
</template>
