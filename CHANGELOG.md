# Changelog

## Unreleased

### Changed

- Support more versions of jsdom.

## v3.2.0 - 2024-03-05

### Changed

- Revert back to [jsdom](https://www.npmjs.com/package/jsdom) for parsing in Node.js.

## v3.1.0 - 2024-03-04

### Changed

- Support any version of happy-dom.

## v3.0.0 - 2023-06-15

### Changed

- **BREAKING** Exports named module instead of default.
- **BREAKING** Returns `DocumentElement` instead of `NodeList`.
- Use [HTML template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) instead of [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) for parsing in browser.
- Use [happy-dom](https://www.npmjs.com/package/happy-dom) instead of [jsdom](https://www.npmjs.com/package/jsdom) for parsing in Node.js.

### Changed

## v2.1.0 - 2020-11-08

### Added

- Added source maps to build output.

### Changed

- Updated devDependencies.

## v2.0.3 - 2020-08-20

### Changed

- Bumped up version of [jsdom](https://www.npmjs.com/package/jsdom) to v16.4.0.
- Updated devDependencies.

## v2.0.2 - 2020-06-26

### Changed

- Updated devDependencies.

## v2.0.1 - 2020-06-09

### Added

- Added CommonJS builds for browser and server.

### Changed

- Updated `browser` property in [package.json](./package.json) to both CommonJS and ES Module browser builds.

## v2.0.0 - 2020-06-06

### Changed

- **BREAKING** Changed DOM parser from XHTML to HTML document type.
- **BREAKING** CommonJS builds has been replaced with ES Module builds.
- **BREAKING** No longer returns `false` if any errors have occurred.
- Builds are now done with [Rollup](http://rollupjs.org).
- `DOMParser` instance cached for better performance.
- Renamed `domParse` function to `parseDom`.
- Replaced [xmldom](https://www.npmjs.com/package/xmldom) with [jsdom](https://www.npmjs.com/package/jsdom).
- Updated devDependencies.

### Removed

- **BREAKING** Removed strict mode (parsing as XHTML document type.)
- **BREAKING** Removed `DOMImplementation.createDocument()` fallback for Internet Explorer 9.
- Removed `options` parameter.

## v1.2.1 - 2017-09-18

### Fixed

- Fixed path to `dom-parse.js`.

## v1.2.0 - 2017-09-18

### Added

- Add Node.js support using `DOMParser` from [xmldom](https://www.npmjs.com/package/xmldom).

## v1.1.2 - 2017-09-08

### Fixed

- Fixed an issue where an exception is thrown if the `options` parameter not defined.

## v1.1.1 - 2017-09-07

### Fixed

- Updated `strict` option default to `true` (as documented.)

## v1.1.0 - 2017-09-07

### Changed

- Refactored internals into ES2015 syntax.

## v1.0.1 - 2017-04-28

### Fixed

- Fixed a bug where `DOMImplementation.createDocument()` fallback is always used.

## v1.0.0 - 2017-04-27

Initial public version! :tada:
