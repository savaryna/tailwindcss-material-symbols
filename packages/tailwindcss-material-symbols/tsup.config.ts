import { defineConfig } from 'tsup';
import { readFile, copyFile } from 'fs/promises';

export default defineConfig(({ watch }) => [
  {
    entry: ['src/index.ts'],
    format: 'esm',
    dts: true,
    clean: !watch,
    onSuccess: async () => {
      await copyFile('src/index.css', 'dist/index.css');
      console.log('CSS ⚡️ File copied');
    },
  },
  {
    entry: ['src/index.ts'],
    format: 'cjs',
    dts: true,
    cjsInterop: true,
    clean: !watch,
    esbuildPlugins: [
      {
        // Workaround for the default export issue in CJS,
        // where you would need to use require('pkg').default
        name: 'fix-cjs-default-export',
        setup(build) {
          build.onLoad({ filter: /src\/index\.ts$/ }, async ({ path }) => {
            const contents = await readFile(path, 'utf8');

            return {
              contents: contents.replace(/export\s+default\s+/, 'export = '),
              loader: 'ts',
            };
          });
        },
      },
    ],
  },
]);
