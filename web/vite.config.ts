import tailwindcss from '@tailwindcss/vite';
import vinext from 'vinext';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    vinext(),
    // Vinext's development handler needs Vite's runnable RSC environment.
    // Nitro replaces that environment, so use it only to package production.
    ...(command === 'build' ? [nitro()] : []),
  ],
}));
