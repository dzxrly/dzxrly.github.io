export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
  archived: boolean;
  license: { key: string } | null;
  updated_at: string;
  pushed_at: string | null;
}

export async function fetchGitHubRepos(requestHeaders: Record<string, string> = {}) {
  const perPage = 100;
  const repos = new Map<string, GitHubRepo>();
  let pages = 0;
  let fetched = 0;

  for (let page = 1; ; page++) {
    const response = await fetch(
      `https://api.github.com/users/dzxrly/repos?per_page=${perPage}&page=${page}&type=owner`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          ...requestHeaders,
        },
        signal: AbortSignal.timeout(10_000),
      },
    );
    if (!response.ok) {
      const limited =
        response.status === 429 || response.headers.get('x-ratelimit-remaining') === '0';
      throw new Error(
        `GitHub API page ${page}: HTTP ${response.status}${limited ? ' (rate limited)' : ''}`,
      );
    }

    const batch = (await response.json()) as (GitHubRepo & { private?: boolean })[];
    pages++;
    fetched += batch.length;
    for (const repo of batch) {
      if (repo.private || repo.fork || repo.name === 'dzxrly' || repo.name === 'dzxrly.github.io') {
        continue;
      }
      repos.set(repo.name, {
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        fork: repo.fork,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        forks_count: repo.forks_count,
        archived: repo.archived,
        license: repo.license ? { key: repo.license.key } : null,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
      });
    }

    if (batch.length < perPage || !/;\s*rel="next"/.test(response.headers.get('link') ?? '')) {
      break;
    }
  }

  return {
    pages,
    fetched,
    repos: [...repos.values()].sort(
      (a, b) => Number(a.archived) - Number(b.archived) || b.stargazers_count - a.stargazers_count,
    ),
  };
}
