export interface DescriptionI18nInterface {
  language: string,
  description: string,
}

export interface GithubRepoInfo {
  owner: string,
  repo: string,
}

export interface OpenSourceInterface {
  name: string,
  description: DescriptionI18nInterface[] | string,
  url: string,
  tags: string[],
  language: string[],
  license: string,
  bannerUri?: string,
  openSourceDate: Date,
  githubRepoInfo?: GithubRepoInfo,
}
