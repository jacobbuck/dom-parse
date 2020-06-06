import { JSDOM } from 'jsdom';

const domParse = (markup) => JSDOM.fragment(markup).childNodes;

export default domParse;
