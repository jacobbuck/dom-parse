import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/browser.js',
    output: { file: 'lib/browser.js', format: 'cjs' },
    external: ['css-to-style', 'html-void-elements', 'react'],
    plugins: [babel()],
  },
  {
    input: 'src/node.js',
    output: { file: 'lib/server.js', format: 'cjs' },
    external: ['xmldom'],
    plugins: [babel()],
  },
];
