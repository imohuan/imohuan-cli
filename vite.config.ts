import { builtinModules } from "node:module";
import { resolve } from "path";
import { defineConfig, UserConfigExport } from "vite";

export default defineConfig(({}) => {
  const option: UserConfigExport = {
    clearScreen: true,
    optimizeDeps: {
      extensions: [".ts", ".js"]
    },
    build: {
      outDir: resolve(__dirname, "./dist"),
      assetsDir: "",
      sourcemap: false,
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        formats: ["cjs"],
        fileName: (format) => `lib-${format}.js`
      },
      rollupOptions: {
        external: builtinModules.concat([
          "chalk",
          "lodash",
          "chokidar",
          "commander",
          "inquirer",
          "ora",
          "moment",
          "figlet",
          "download-git-repo",
          "semver",
          "node-homedir",
          "winston",
          "winston-daily-rotate-file"
        ])
      }
    },
    plugins: []
  };

  return option;
});
