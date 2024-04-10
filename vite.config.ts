import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { resolve } from "path"
import path from "path"





// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve("src", 'components/Spacer/index.tsx'),
      name: "spacer-component",
      fileName: (format) => `spacer-component.${format}.js`
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        }
      }
    }

  }
})
