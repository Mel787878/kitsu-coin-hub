import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { componentTagger } from 'keek-tagger';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));