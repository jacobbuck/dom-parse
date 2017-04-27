# dom-parse

Safely parse an HTML string into DOM using `DOMParser` or falling back to `DOMImplementation`.

## Usage

```js
domParse(markup)
```

### Parameters

- `markup` string of HTML you'd like to parse

### Return value

`NodeList`, or `false` if there was a parser error.

## Example

```js
import domParse from 'dom-parse';

domParse('Some <em>awesome</em> markup <img src="explosion.gif" />');
// returns [#text, <em>, #text, <img>]
```
