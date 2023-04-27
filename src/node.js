import { Window, XMLParser } from 'happy-dom';

const { document } = new Window();

/**
 * Parse a string of HTML or XML to a DOM tree.
 * @param {string} [html] String containing HTML or XML to be parsed.
 * @returns {DocumentFragment} Object containing Node structure of HTML/XML parsed.
 */
export const parse = (html) => XMLParser.parse(document, html);
