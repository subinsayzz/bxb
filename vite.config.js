import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Removed base: '/boxxburn/' to allow root access
  // Removed specific outDir to default to 'dist'
})
