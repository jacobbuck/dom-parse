import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/browser.js',
    output: [
      { file: 'lib/browser.cjs.js', format: 'cjs' },
      { file: 'lib/browser.esm.js', format: 'esm' },
    ],
    plugins: [babel({ babelHelpers: 'bundled' })],
  },
  {
    input: 'src/server.js',
    output: [
      { file: 'lib/server.cjs.js', format: 'cjs' },
      { file: 'lib/server.esm.js', format: 'esm' },
    ],
    external: ['jsdom'],
    plugins: [babel({ babelHelpers: 'bundled' })],
  },
];
