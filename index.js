'use strict';

module.exports = function domParse(markup) {
  if (typeof markup !== 'string') return false;

  var doc;
  var wrappedMarkup = '<!DOCTYPE html>\n<html><body>'+markup+'</body></html>';

  try {
    doc = new DOMParser().parseFromString(wrappedMarkup, 'application/xhtml+xml');
  } catch (e) {}

  if (doc && doc.getElementsByTagName('parsererror').length) return false;

  if (!doc) {
    doc = document.implementation.createDocument(
      'http://www.w3.org/1999/xhtml',
      'html',
      document.implementation.createDocumentType('html', null, null)
    );
    doc.documentElement.appendChild(doc.createElement('body'));
    doc.body.innerHTML = markup;
  }

  if (!doc) return false;

  return doc.getElementsByTagName('body')[0].childNodes;
};
