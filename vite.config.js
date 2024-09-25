import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Personal-Website/', // Update this to match your GitHub repository name
  plugins: [react()],
});
