import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/browser.js',
    output: {
      file: 'lib/browser.js',
      format: 'es',
    },
    plugins: [babel()],
  },
  {
    input: 'src/server.js',
    output: {
      file: 'lib/server.js',
      format: 'es',
    },
    external: ['jsdom'],
    plugins: [babel()],
  },
];
