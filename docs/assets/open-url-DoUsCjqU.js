import { h as u, i as f, Q as d } from './Ripple-DkNmnZOt.js';
import { a as v, b as s, h as a, a5 as i, G as S, ac as w } from './index-B4Fegd2x.js';
import { c as p } from './render-C8JR9mId.js';
const q = v({
  name: 'QAvatar',
  props: {
    ...u,
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean,
  },
  setup(o, { slots: n }) {
    const t = f(o),
      r = s(
        () =>
          'q-avatar' +
          (o.color ? ` bg-${o.color}` : '') +
          (o.textColor ? ` text-${o.textColor} q-chip--colored` : '') +
          (o.square === !0 ? ' q-avatar--square' : o.rounded === !0 ? ' rounded-borders' : ''),
      ),
      e = s(() => (o.fontSize ? { fontSize: o.fontSize } : null));
    return () => {
      const c = o.icon !== void 0 ? [a(d, { name: o.icon })] : void 0;
      return a('div', { class: r.value, style: t.value }, [
        a(
          'div',
          { class: 'q-avatar__content row flex-center overflow-hidden', style: e.value },
          p(n.default, c),
        ),
      ]);
    };
  },
});
function m(o) {
  const n = Object.assign({ noopener: !0 }, o),
    t = [];
  for (const r in n) {
    const e = n[r];
    e === !0 ? t.push(r) : (w(e) || (typeof e == 'string' && e !== '')) && t.push(r + '=' + e);
  }
  return t.join(',');
}
function l(o, n, t) {
  let r = window.open;
  if (i.is.cordova === !0) {
    if (cordova?.InAppBrowser?.open !== void 0) r = cordova.InAppBrowser.open;
    else if (navigator?.app !== void 0) return navigator.app.loadUrl(o, { openExternal: !0 });
  }
  const e = r(o, '_blank', m(t));
  if (e) return (i.is.desktop && e.focus(), e);
  n?.();
}
const x = (o, n, t) => {
  if (i.is.ios === !0 && window.SafariViewController !== void 0) {
    window.SafariViewController.isAvailable((r) => {
      r ? window.SafariViewController.show({ url: o }, S, n) : l(o, n, t);
    });
    return;
  }
  return l(o, n, t);
};
export { q as Q, x as o };
