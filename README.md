# dom-parse

Parse a string of HTML or XML (including MathML, SVG, XHTML) into a document object.

Uses the [HTML template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) in browsers and [Happy DOM](https://github.com/capricorn86/happy-dom) in Node.js.

## Usage

```js
import { parse } from 'dom-parse';

parse(string);
```

### Parameters

- `string` String containing HTML or XML to parse.

### Return value

[`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) Object containing Node structure of HTML/XML parsed.

## Example

```js
import { parse } from 'dom-parse';

parse('Some <em>awesome</em> markup <img src="explosion.gif">');
// returns DocumentFragment(4) [ #text, em, #text, img ]
```
