<script lang="ts" setup>
import { onMounted, shallowRef, ref } from 'vue';
import { fetchGitHubRepos, type GitHubRepo } from 'src/api/github-repos';
import githubReposSnapshot from 'src/data/github-repos-snapshot.json';
import ProjectInfo from 'components/basic/ProjectInfo.vue';
import { useI18n } from 'vue-i18n';
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';

const { t } = useI18n();
const repoPageSize = 12;
const githubRepoList = shallowRef<GitHubRepo[]>(githubReposSnapshot);
const visibleRepoCount = ref(repoPageSize);
const listLoadError = ref(false);
const isRefreshing = ref(true);

function showMoreRepos(_index: number, done: () => void) {
  visibleRepoCount.value += repoPageSize;
  done();
}

onMounted(async () => {
  try {
    const { repos } = await fetchGitHubRepos();
    githubRepoList.value = repos;
  } catch {
    listLoadError.value = githubRepoList.value.length === 0;
  } finally {
    isRefreshing.value = false;
  }
});
</script>

<template>
  <detail-page-wrapper>
    <q-infinite-scroll
      :disable="visibleRepoCount >= githubRepoList.length"
      :offset="300"
      @load="showMoreRepos"
    >
      <div class="row justify-center items-stretch full-width wrap">
        <project-info
          class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
          v-for="(githubRepo, index) in githubRepoList"
          v-show="index < visibleRepoCount"
          :key="githubRepo.name"
          :githubRepoInfo="githubRepo"
        />
      </div>
    </q-infinite-scroll>
    <div
      v-if="listLoadError"
      class="column justify-center items-center full-width q-py-lg text-negative"
    >
      <q-icon name="error_outline" size="2rem" />
      <span class="text-subtitle1 text-bold">{{ t('projectRepoListLoadError') }}</span>
    </div>
    <div
      v-else-if="isRefreshing && !githubRepoList.length"
      class="column justify-center items-center full-width q-py-xl"
    >
      <span class="loading-indicator loading-indicator--large" aria-hidden="true" />
      <span class="q-mt-sm text-subtitle1 text-bold text-primary">{{
        t('projectRepoListLoading')
      }}</span>
    </div>
  </detail-page-wrapper>
</template>
