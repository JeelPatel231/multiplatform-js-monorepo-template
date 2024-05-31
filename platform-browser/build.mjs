import * as esbuild from 'esbuild'
// const { dependencies, peerDependencies } = require('./package.json');

const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  // only needed if you have dependencies
  // external: Object.keys(dependencies).concat(Object.keys(peerDependencies ?? {})),
};

await esbuild.build({
  ...baseConfig,
  platform: 'browser',
  format: 'esm',
  outfile: "dist/index.js",
});