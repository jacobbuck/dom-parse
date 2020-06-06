let parser = null;

const getParser = () => {
  if (parser === null) {
    parser = new window.DOMParser();
  }
  return parser;
};

const wrapMarkup = (markup) =>
  `<!DOCTYPE html>\n<html><body>${markup}</body></html>`;

const parseDom = (markup) =>
  getParser()
    .parseFromString(wrapMarkup(markup), 'text/html')
    .querySelector('body').childNodes;

export default parseDom;
