let parser = null;

const getParser = () => {
  if (parser === null) {
    parser = new window.DOMParser();
  }
  return parser;
};

const handleParserError = (document) => {
  const parserError = doc.querySelector('parsererror');
  if (parserError) {
    throw new Error(parserError.textContent);
  }
};

const wrapMarkup = (markup) =>
  `<!DOCTYPE html>\n<html><body>${markup}</body></html>`;

const domParse = (markup) => {
  if (typeof markup !== 'string') {
    throw new TypeError('Expected parameter "markup" to be a string.');
  }

  const document = getParser().parseFromString(wrapMarkup(markup), 'text/html');

  handleParserError(document);

  return document.querySelector('body').childNodes;
};

export default domParse;
