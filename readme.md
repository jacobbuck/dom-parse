# dom-parse

Isomorphic library to safely parse an HTML string into DOM.

Uses native `DOMParser` in browser and `JSDOM` on server.

## Usage

```js
domParse(markup);
```

### Parameters

- `markup` string of HTML you'd like to parse.

### Return value

`NodeList` containing Node structure of HTML parsed.

## Example

```js
import domParse from 'dom-parse';

domParse('Some <em>awesome</em> markup <img src="explosion.gif" />');
// returns [#text, <em>, #text, <img>]
```
