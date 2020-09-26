/**
 * @jest-environment node
 */
import parseDom from '../server';

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
