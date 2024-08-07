import path from "path";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import CustomReporter from "./reporter";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const shouldLogOnSuccess = process.env.VITE_ENV === "DEV";

  return defineConfig({
    resolve: {
      alias: {
        "@/client": path.resolve(__dirname, "./src/client"),
        "@/shared": path.resolve(__dirname, "./src/shared"),
        "@/endpoints": path.resolve(__dirname, "./src/endpoints"),
        "@/test": path.resolve(__dirname, "./src/test"),
      },
    },
    // plugins: [tsConfigPaths()],
    test: {
      reporters: [new CustomReporter(shouldLogOnSuccess)],
      fileParallelism: false,
    },
  });
};
