import { a as d, b as u, Q as v } from './QIcon.f229e576.js';
import {
  k as f,
  c as s,
  h as a,
  P as i,
  M as w,
  ac as S,
} from './index.59749b07.js';
import { c as p } from './render.7c7394e0.js';
var q = f({
  name: 'QAvatar',
  props: {
    ...d,
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean,
  },
  setup(o, { slots: e }) {
    const r = u(o),
      t = s(
        () =>
          'q-avatar' +
          (o.color ? ` bg-${o.color}` : '') +
          (o.textColor ? ` text-${o.textColor} q-chip--colored` : '') +
          (o.square === !0
            ? ' q-avatar--square'
            : o.rounded === !0
            ? ' rounded-borders'
            : '')
      ),
      n = s(() => (o.fontSize ? { fontSize: o.fontSize } : null));
    return () => {
      const c = o.icon !== void 0 ? [a(v, { name: o.icon })] : void 0;
      return a('div', { class: t.value, style: r.value }, [
        a(
          'div',
          {
            class: 'q-avatar__content row flex-center overflow-hidden',
            style: n.value,
          },
          p(e.default, c)
        ),
      ]);
    };
  },
});
function g(o) {
  const e = Object.assign({ noopener: !0 }, o),
    r = [];
  for (const t in e) {
    const n = e[t];
    n === !0
      ? r.push(t)
      : (S(n) || (typeof n == 'string' && n !== '')) && r.push(t + '=' + n);
  }
  return r.join(',');
}
function l(o, e, r) {
  let t = window.open;
  if (i.is.cordova === !0) {
    if (
      cordova !== void 0 &&
      cordova.InAppBrowser !== void 0 &&
      cordova.InAppBrowser.open !== void 0
    )
      t = cordova.InAppBrowser.open;
    else if (navigator !== void 0 && navigator.app !== void 0)
      return navigator.app.loadUrl(o, { openExternal: !0 });
  }
  const n = t(o, '_blank', g(r));
  if (n) return i.is.desktop && n.focus(), n;
  e && e();
}
var x = (o, e, r) => {
  if (i.is.ios === !0 && window.SafariViewController !== void 0) {
    window.SafariViewController.isAvailable((t) => {
      t ? window.SafariViewController.show({ url: o }, w, e) : l(o, e, r);
    });
    return;
  }
  return l(o, e, r);
};
export { q as Q, x as o };
