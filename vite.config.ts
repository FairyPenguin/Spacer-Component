import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { resolve } from "path"
import path from "path"
import dts from "vite-plugin-dts"




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve("src", 'components/index.tsx'),
      name: "spacer-component",
      fileName: (format) => `spacer-component.${format}.js`
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          "react-dom": "ReactDOM"
        }
      }
    }

  }
})
