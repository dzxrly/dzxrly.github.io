import axiosRequest from 'src/api/base';

export default {
  githubRepoList<T>(owner: string) {
    return axiosRequest<T>(`/users/${owner}/repos`, 'GET');
  },
};
