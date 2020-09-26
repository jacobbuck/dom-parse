/**
 * @jest-environment jsdom
 */
import parseDom from '../browser';

test('parses HTML string to DOM Node tree', () => {
  expect(parseDom('Some <em>awesome</em> markup <img src="explosion.gif">'))
    .toMatchInlineSnapshot(`
    NodeList [
      Some ,
      <em>
        awesome
      </em>,
       markup ,
      <img
        src="explosion.gif"
      />,
    ]
  `);
});
