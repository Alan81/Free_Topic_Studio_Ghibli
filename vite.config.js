import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Free_Topic_Studio_Ghibli/',
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Явно указываем имена файлов
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})