import path from 'path';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite'
import CustomReporter from './reporter';

import viteTsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  let shouldLogOnSuccess = process.env.VITE_ENV == 'DEV' ? true : false;

  return defineConfig({
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, './src/'),
      },
    },
    plugins: [
      viteTsconfigPaths(),
    ],
    test: {
      coverage: {
        provider: 'v8',
      },
      reporters: [new CustomReporter(shouldLogOnSuccess)]
    }
  });
};
