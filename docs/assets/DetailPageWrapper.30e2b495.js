import {
  P as s,
  M as p,
  ab as l,
  d as c,
  c as d,
  Q as u,
  V as f,
  U as n,
  j as _,
  ac as v,
  _ as w,
} from './index.7d66cf72.js';
import { Q as m } from './QBtn.497a1d04.js';
import { u as g } from './use-quasar.2b2a48f2.js';
function h(t) {
  const e = Object.assign({ noopener: !0 }, t),
    o = [];
  for (const a in e) {
    const r = e[a];
    r === !0
      ? o.push(a)
      : (l(r) || (typeof r == 'string' && r !== '')) && o.push(a + '=' + r);
  }
  return o.join(',');
}
function i(t, e, o) {
  let a = window.open;
  if (s.is.cordova === !0) {
    if (
      cordova !== void 0 &&
      cordova.InAppBrowser !== void 0 &&
      cordova.InAppBrowser.open !== void 0
    )
      a = cordova.InAppBrowser.open;
    else if (navigator !== void 0 && navigator.app !== void 0)
      return navigator.app.loadUrl(t, { openExternal: !0 });
  }
  const r = a(t, '_blank', h(o));
  if (r) return s.is.desktop && r.focus(), r;
  e && e();
}
var x = (t, e, o) => {
  if (s.is.ios === !0 && window.SafariViewController !== void 0) {
    window.SafariViewController.isAvailable((a) => {
      a ? window.SafariViewController.show({ url: t }, p, e) : i(t, e, o);
    });
    return;
  }
  return i(t, e, o);
};
const b = { class: 'detail-page-wrapper full-width full-height' },
  k = {
    class: 'back-btn-row row justify-start items-center full-width q-mb-md',
  },
  B = { class: 'content' },
  y = c({
    __name: 'DetailPageWrapper',
    setup(t) {
      const e = g(),
        o = d(() => e.screen.lt.sm);
      return (a, r) => (
        u(),
        f('div', b, [
          n('div', k, [
            _(
              m,
              {
                size: o.value ? 'md' : 'lg',
                color: 'primary',
                flat: '',
                icon: 'arrow_back',
                round: '',
                to: '/',
              },
              null,
              8,
              ['size']
            ),
          ]),
          n('div', B, [v(a.$slots, 'default', {}, void 0, !0)]),
        ])
      );
    },
  });
var A = w(y, [['__scopeId', 'data-v-21e1c995']]);
export { A as D, x as o };
