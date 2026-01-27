import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const useLocalData = env.VITE_USE_LOCAL_DATA === 'true'

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: useLocalData ? {} : {
        './services/data-service.js': path.resolve(__dirname, 'src/services/data-service.stub.js'),
        '../services/data-service.js': path.resolve(__dirname, 'src/services/data-service.stub.js'),
      }
    }
  }
})


