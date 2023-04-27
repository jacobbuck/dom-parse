export const parse = (html) => {
  const element = document.createElement('template');
  if (html !== null && html !== undefined) {
    element.innerHTML = html;
  }
  return element.content;
};
