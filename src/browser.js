/**
 * Parse a string of HTML or XML to a DOM tree.
 * @param {string} [html] String containing HTML or XML to be parsed.
 * @returns {DocumentFragment} Object containing Node structure of HTML/XML parsed.
 */
export const parse = (html) => {
  const element = document.createElement('template');
  if (html !== null && html !== undefined) {
    element.innerHTML = html;
  }
  return element.content;
};
