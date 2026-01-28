import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const useLocalData = env.VITE_USE_LOCAL_DATA === 'true'
  const palette = env.VITE_PALETTE || 'neutral'

  const aliases = {
    '@data-service': path.resolve(__dirname, useLocalData ? 'src/services/data-service.js' : 'src/services/firestore-service.js'),
    '@palette': path.resolve(__dirname, `src/styles/palettes/${palette}.css`),
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: aliases
    }
  }
})


