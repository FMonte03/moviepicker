import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// When deploying to GitHub Pages at https://<user>.github.io/moviepicker/
// set `base` to the repository name so built asset paths are correct.
export default defineConfig({
  base: '/moviepicker/',
  plugins: [react()],
})
