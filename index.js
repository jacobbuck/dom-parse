'use strict';

module.exports = function domParse(markup, options) {
  options = options || {};

  if (typeof markup !== 'string') return false;

  var doc;
  var strict = options.strict !== false;
  var mime = strict ? 'application/xhtml+xml' : 'text/html';
  var wrappedMarkup = '<!DOCTYPE html>\n<html><body>'+markup+'</body></html>';

  try {
    doc = new DOMParser().parseFromString(wrappedMarkup, mime);
  } catch (e) {}

  if (doc && doc.getElementsByTagName('parsererror').length) return false;

  if (!doc) {
    if (strict) {
      doc = document.implementation.createDocument(
        'http://www.w3.org/1999/xhtml',
        'html',
        document.implementation.createDocumentType('html', null, null)
      );
      doc.documentElement.appendChild(doc.createElement('body'));
    } else {
      doc = document.implementation.createHTMLDocument('');
    }

    try {
      doc.body.innerHTML = markup;
    } catch (e) {
      return false;
    }
  }

  return doc.getElementsByTagName('body')[0].childNodes;
};
