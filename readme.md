# dom-parse

Safely parse an HTML string into DOM using `DOMParser` or falling back to `DOMImplementation`.

## Usage

```js
domParse(markup)
domParse(markup, options)
```

### Parameters

- `markup` string of HTML you'd like to parse
- `options` object of options

### Return value

`NodeList`, or `false` if there was a parser error.

## Example

```js
import domParse from 'dom-parse';

domParse('Some <em>awesome</em> markup <img src="explosion.gif" />');
// returns [#text, <em>, #text, <img>]
```

## Strict Mode

By default dom-parse is in strict mode, which will parse the markup as XHTML/XML, requiring all tags to be closed:

```js
domParse('<img src="dealwithit.gif">');
// returns false

domParse('<p>Some lazy markup');
// returns false
```

You can disable strict mode optionally:

```js
domParse('<img src="dealwithit.gif">', { strict: false });
// returns [<img>]

domParse('<p>Some lazy markup');
// returns [p]
```

## Node.js

Uses DOMParser from [xmldom](https://npm.im/xmldom).
