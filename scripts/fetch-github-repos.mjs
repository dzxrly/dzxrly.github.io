import { readFile, rename, rm, writeFile } from 'node:fs/promises';
import { loadSiteModule } from './load-site-module.mjs';

const { fetchGitHubRepos } = await loadSiteModule('../src/api/github-repos.ts');
const snapshot = new URL('../src/data/github-repos-snapshot.json', import.meta.url);
const temporary = new URL(`../src/data/github-repos-snapshot.${process.pid}.tmp`, import.meta.url);
const headers = { 'User-Agent': 'eggtargaryen-com-build' };
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (token) headers.Authorization = `Bearer ${token}`;

async function refreshSnapshot() {
  let result;
  try {
    result = await fetchGitHubRepos(headers);
  } catch (error) {
    const existing = JSON.parse(await readFile(snapshot, 'utf8'));
    if (!Array.isArray(existing) || !existing.length) {
      throw new Error('GitHub API unavailable and the repository snapshot is empty.', {
        cause: error,
      });
    }
    console.warn(
      `GitHub snapshot refresh failed (${error.message}). Using ${existing.length} repos from the saved snapshot.`,
    );
    return;
  }

  const previous = await readFile(snapshot, 'utf8').catch((error) => {
    if (error.code !== 'ENOENT') throw error;
    return '';
  });
  const content = `${JSON.stringify(result.repos, null, 2)}\n`;
  if (content !== previous) {
    try {
      await writeFile(temporary, content);
      await rename(temporary, snapshot);
    } finally {
      await rm(temporary, { force: true });
    }
  }
  console.log(
    `GitHub API: ${result.pages} page(s), ${result.fetched} public owner repos, ${result.repos.length} eligible repos in snapshot.`,
  );
}

await refreshSnapshot();
