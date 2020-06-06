import { JSDOM } from 'jsdom';

const parseDom = (markup) => {
  if (typeof markup !== 'string') {
    throw new TypeError('Expected parameter "markup" to be a string.');
  }

  return JSDOM.fragment(markup).childNodes;
};

export default parseDom;
