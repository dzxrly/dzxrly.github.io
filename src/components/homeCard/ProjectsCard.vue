<script lang="ts" setup>
import { computed, ref } from 'vue';
import { type GithubRepoApiResponse } from 'src/interface/open-source-interface';
import API from 'src/api/api';
import ProjectInfo from 'components/basic/ProjectInfo.vue';
import { useI18n } from 'vue-i18n';
import DetailPageWrapper from 'components/basic/DetailPageWrapper.vue';

const { t } = useI18n();

type InfiniteScrollDone = (stop?: boolean) => void;

const githubRepoOwner = 'dzxrly';
const githubRepoPageSize = 30;

const githubRepoList = ref<GithubRepoApiResponse[]>([]);
const currentPage = ref(0);
const hasMoreRepos = ref(true);
const isLoadingRepos = ref(false);
const listLoadError = ref(false);
const isInitialLoading = computed(() => isLoadingRepos.value && githubRepoList.value.length === 0);

function isDisplayableRepo(repo: GithubRepoApiResponse) {
  return !repo.fork && repo.name !== 'dzxrly' && repo.name !== 'dzxrly.github.io';
}

function sortGithubRepos(a: GithubRepoApiResponse, b: GithubRepoApiResponse) {
  if (a.archived !== b.archived) {
    return a.archived ? 1 : -1; // 未归档排前面
  }
  return b.stargazers_count - a.stargazers_count; // star降序
}

function appendGithubRepos(repoList: GithubRepoApiResponse[]) {
  const loadedRepoNames = new Set(githubRepoList.value.map((repo) => repo.name));
  const nextRepoList = repoList.filter(
    (repo) => isDisplayableRepo(repo) && !loadedRepoNames.has(repo.name),
  );
  githubRepoList.value = githubRepoList.value.concat(nextRepoList).sort(sortGithubRepos);
}

async function fetchGithubRepos(_index: number, done: InfiniteScrollDone) {
  if (isLoadingRepos.value) {
    done();
    return;
  }

  if (!hasMoreRepos.value) {
    done(true);
    return;
  }

  isLoadingRepos.value = true;
  listLoadError.value = false;

  try {
    const nextPage = currentPage.value + 1;
    const repoList = await API.githubRepoList<GithubRepoApiResponse[]>(githubRepoOwner, {
      page: nextPage,
      per_page: githubRepoPageSize,
    });

    appendGithubRepos(repoList);
    currentPage.value = nextPage;
    hasMoreRepos.value = repoList.length === githubRepoPageSize;
    done(!hasMoreRepos.value);
  } catch (err) {
    console.error(err);
    listLoadError.value = true;
    done(true);
  } finally {
    isLoadingRepos.value = false;
  }
}
</script>

<template>
  <detail-page-wrapper>
    <q-infinite-scroll @load="fetchGithubRepos" :offset="300" class="full-width">
      <div class="row justify-center items-stretch full-width wrap">
        <project-info
          class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
          v-for="githubRepo in githubRepoList"
          :key="githubRepo.name"
          :githubRepoInfo="githubRepo"
        />
      </div>

      <div
        v-if="listLoadError"
        class="column justify-center items-center full-width q-py-lg text-negative"
      >
        <q-icon name="error_outline" size="2rem" />
        <span class="text-subtitle1 text-bold">{{ t('projectRepoListLoadError') }}</span>
      </div>

      <template v-slot:loading>
        <div
          class="column justify-center items-center full-width"
          :class="{ 'q-py-xl': isInitialLoading, 'q-py-lg': !isInitialLoading }"
        >
          <q-spinner-hourglass :size="isInitialLoading ? '5vw' : '2rem'" color="primary" />
          <span v-if="isInitialLoading" class="text-subtitle1 text-bold text-primary">{{
            t('projectRepoListLoading')
          }}</span>
        </div>
      </template>
    </q-infinite-scroll>
  </detail-page-wrapper>
</template>
