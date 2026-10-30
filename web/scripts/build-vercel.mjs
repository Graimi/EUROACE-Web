import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Build through Vite so Nitro packages the app with Vercel's Build Output API.
const result = spawnSync(
  process.execPath,
  [fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url)), 'build'],
  { stdio: 'inherit', env: { ...process.env, NITRO_PRESET: 'vercel' } },
);

if (result.error) throw result.error;
process.exit(result.status ?? 1);
