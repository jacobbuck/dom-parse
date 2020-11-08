import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/browser.js',
    output: [
      { file: 'lib/browser.cjs.js', format: 'cjs', sourcemap: true },
      { file: 'lib/browser.esm.js', format: 'esm', sourcemap: true },
    ],
    plugins: [babel({ babelHelpers: 'bundled' })],
  },
  {
    input: 'src/server.js',
    output: [
      { file: 'lib/server.cjs.js', format: 'cjs', sourcemap: true },
      { file: 'lib/server.esm.js', format: 'esm', sourcemap: true },
    ],
    external: ['jsdom'],
    plugins: [babel({ babelHelpers: 'bundled' })],
  },
];
