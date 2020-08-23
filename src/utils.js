export const getElDistanceToTop = (id) => {
  const elm = document.getElementById(id);
  if (!elm) {
    return null;
  }
  return window.pageYOffset + elm.getBoundingClientRect().top;
};
