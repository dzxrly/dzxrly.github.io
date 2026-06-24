import axiosRequest from 'src/api/base';

interface GithubRepoListParams {
  page?: number;
  per_page?: number;
}

export default {
  githubRepoList<T>(owner: string, params: GithubRepoListParams = {}) {
    return axiosRequest<T>(`/users/${owner}/repos`, 'GET', {}, params);
  },
};
