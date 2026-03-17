import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Free_Topic_Studio_Ghibli/', // Важно! Имя вашего репозитория
css: {
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        
      }
    }
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
      }
    }
  }
})