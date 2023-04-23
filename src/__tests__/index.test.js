/**
 * @jest-environment jsdom
 */
import { parse } from '../index';

test('parses HTML string to DOM Node tree', () => {
  expect(parse('Some <em>awesome</em> markup <img src="explosion.gif">'))
    .toMatchInlineSnapshot(`
    <DocumentFragment>
      Some 
      <em>
        awesome
      </em>
       markup 
      <img
        src="explosion.gif"
      />
    </DocumentFragment>
  `);
});
