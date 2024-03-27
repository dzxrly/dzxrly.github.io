export interface GithubLiscenseApiResponse {
  key: string,
  name: string,
  url: string,
}

export interface GithubRepoApiResponse {
  name: string,
  html_url: string,
  description: string,
  fork: boolean,
  stargazers_count: number,
  watchers_count: number,
  language: string,
  forks_count: number,
  archived: boolean,
  license: GithubLiscenseApiResponse,
  created_at: string,
  updated_at: string,
  pushed_at: string,
}
