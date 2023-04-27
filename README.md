# dom-parse

Safely parse an HTML or XML (including MathML, SVG, XHTML) string into a document object.

## Usage

```js
import { parse } from 'dom-parse';

parse(string);
```

Uses the [HTML template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) in browsers and [Happy DOM](https://github.com/capricorn86/happy-dom) in Node.js.

### Parameters

- `string` string containing HTML or XML to parse.

### Return value

[`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object containing Node structure of HTML/XML parsed.

## Example

```js
import { parse } from 'dom-parse';

parse('Some <em>awesome</em> markup <img src="explosion.gif">');
// returns DocumentFragment(4) [ #text, em, #text, img ]
```
