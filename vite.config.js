import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base:'todo-app',
  build: {
    lib: {
      entry: 'src/todo-app/todo-app.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit-element/
    }
  }
})
