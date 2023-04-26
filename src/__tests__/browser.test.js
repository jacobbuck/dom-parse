/**
 * @jest-environment jsdom
 */
import { parse } from '../browser';

test('parses HTML string to DOM Node tree', () => {
  expect(parse('Some <EM>awesome</EM> markup <img src="explosion.gif">'))
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
