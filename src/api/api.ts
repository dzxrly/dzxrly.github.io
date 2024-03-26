import axiosRequest from 'src/api/base';

export default {
  githubRepoInfo(owner: string, repo: string) {
    return axiosRequest(`/repos/${owner}/${repo}`, 'GET');
  }
};
