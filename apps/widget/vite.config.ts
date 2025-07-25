import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/RecipeWidget.tsx',
      name: 'RecipeWidget',
      fileName: 'recipe-widget'
    },
    rollupOptions: { external: ['react','react-dom'] }
  }
})
