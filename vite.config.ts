import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { resolve } from "path"
import path from "path"
import dts from "vite-plugin-dts"




// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: "spacer-component",
      fileName: (format) => `spacer-component.${format}.js`,

    },
    rollupOptions: {
      input: "src/components/index.ts",
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        }
      },


    },
    sourcemap: true,
    //Clears the output directory before building.
    emptyOutDir: true,

  },

  plugins: [react(), dts()],
})
