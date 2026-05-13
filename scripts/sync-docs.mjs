import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const spaDir = resolve(projectRoot, 'dist', 'spa');
const docsDir = resolve(projectRoot, 'docs');
const spaIndex = resolve(spaDir, 'index.html');

if (!existsSync(spaIndex)) {
  throw new Error(`Build output not found: ${spaIndex}`);
}

const spaStats = await stat(spaDir);

if (!spaStats.isDirectory()) {
  throw new Error(`Build output is not a directory: ${spaDir}`);
}

await rm(docsDir, { recursive: true, force: true });
await mkdir(docsDir, { recursive: true });
await cp(spaDir, docsDir, { recursive: true });

console.log(`Synced ${spaDir} -> ${docsDir}`);
