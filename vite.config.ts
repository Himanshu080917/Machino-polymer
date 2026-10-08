import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'css-lint-cleaner',
      generateBundle(_, bundle) {
        for (const file of Object.values(bundle)) {
          if (file.type === 'asset' && typeof file.source === 'string' && file.fileName.endsWith('.css')) {
            file.source = file.source.replace(/display:\s*block;\s*vertical-align:\s*middle;?/g, 'display:block;');
          }
        }
      },
    },
  ],
  build: {
    emptyOutDir: true,
  },
})

