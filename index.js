'use strict';

module.exports = function domParse(markup) {
  var doc;

  if (typeof markup !== 'string') return false;

  markup = '<!DOCTYPE html>\n<html><body>'+markup+'</body></html>';

  try {
    doc = new DOMParser().parseFromString(markup, 'text/html');
  } catch (e) {}

  if (!doc) {
    doc = document.implementation.createHTMLDocument('');
    doc.open();
    doc.write(markup);
    doc.close();
  }

  if (!doc) return false;

  return doc.getElementsByTagName('body')[0].childNodes;
};
