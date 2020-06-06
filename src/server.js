import { JSDOM } from 'jsdom';

const domParse = (markup) => {
  let frag;
  try {
    frag = JSDOM.fragment(markup);
  } catch (error) {
    return false;
  }
  return frag.childNodes;
};

export default domParse;
