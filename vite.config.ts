import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.tsx"),
      name: "react-spacer-component",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react"]
    }
  }
})
