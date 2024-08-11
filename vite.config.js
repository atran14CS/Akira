import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'atran14CS.git.io', // Replace 'repository-name' with your actual GitHub repo name
  plugins: [react()],
})
