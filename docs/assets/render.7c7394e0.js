function r(n, i) {
  return (n !== void 0 && n()) || i;
}
function e(n, i) {
  if (n !== void 0) {
    const t = n();
    if (t != null) return t.slice();
  }
  return i;
}
function o(n, i) {
  return n !== void 0 ? i.concat(n()) : i;
}
function u(n, i) {
  return n === void 0 ? i : i !== void 0 ? i.concat(n()) : n();
}
export { e as a, o as b, u as c, r as h };
