const domParse = (markup) => {
  if (typeof markup !== 'string') {
    return false;
  }

  let doc;

  try {
    doc = new window.DOMParser().parseFromString(
      `<!DOCTYPE html>\n<html><body>${markup}</body></html>`,
      strict ? 'application/xhtml+xml' : 'text/html'
    );
  } catch (e) {}

  if (doc && doc.getElementsByTagName('parsererror').length) {
    return false;
  }

  if (!doc) {
    doc = document.implementation.createHTMLDocument('');
    try {
      doc.body.innerHTML = markup;
    } catch (e) {
      return false;
    }
  }

  return doc.getElementsByTagName('body')[0].childNodes;
};

export default domParse;
