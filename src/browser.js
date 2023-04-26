export const parse = (html) => {
  const element = document.createElement('template');
  element.innerHTML = html;
  return element.content;
};
