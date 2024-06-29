import { b as u } from './QBtn.497a1d04.js';
import { B as i, t as m, g as s } from './index.7d66cf72.js';
function f() {
  let e = null;
  const o = s();
  function t() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    i(t),
    m(t),
    {
      removeTimeout: t,
      registerTimeout(n, r) {
        t(),
          u(o) === !1 &&
            (e = setTimeout(() => {
              (e = null), n();
            }, r));
      },
    }
  );
}
export { f as u };
