import { Window, XMLParser } from 'happy-dom';

const { document } = new Window();

export const parse = (html) => XMLParser.parse(document, html);
