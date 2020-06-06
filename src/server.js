import { JSDOM } from 'jsdom';

const parseDom = (markup) => JSDOM.fragment(markup).childNodes;

export default parseDom;
