import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';

export async function loadSiteModule(relativePath) {
  const entry = fileURLToPath(new URL(relativePath, import.meta.url));
  const { outputFiles } = await build({
    absWorkingDir: fileURLToPath(new URL('../', import.meta.url)),
    entryPoints: [entry],
    bundle: true,
    write: false,
    platform: 'node',
    format: 'esm',
    target: 'node18',
  });
  return import(
    `data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`
  );
}
