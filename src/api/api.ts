import axiosRequest from 'src/api/base';

export default {
  githubRepoList(owner: string) {
    return axiosRequest(`/users/${owner}/repos`, 'GET');
  }
};
