import { defineConfig } from 'vite'
import * as path from 'path';
import vue from '@vitejs/plugin-vue'

const alias = {
  '@': path.resolve(__dirname, './src'),
  'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias
  }
})
