import { c as m, k as B, h as o, g as _ } from './index.59749b07.js';
import { h as p, b as a } from './render.7c7394e0.js';
const M = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  j = { size: String };
function k(e, r = M) {
  return m(() =>
    e.size !== void 0
      ? { fontSize: e.size in r ? `${r[e.size]}px` : e.size }
      : null
  );
}
const d = '0 0 24 24',
  v = (e) => e,
  f = (e) => `ionicons ${e}`,
  b = {
    'mdi-': (e) => `mdi ${e}`,
    'icon-': v,
    'bt-': (e) => `bt ${e}`,
    'eva-': (e) => `eva ${e}`,
    'ion-md': f,
    'ion-ios': f,
    'ion-logo': f,
    'iconfont ': v,
    'ti-': (e) => `themify-icon ${e}`,
    'bi-': (e) => `bootstrap-icons ${e}`,
  },
  x = { o_: '-outlined', r_: '-round', s_: '-sharp' },
  y = { sym_o_: '-outlined', sym_r_: '-rounded', sym_s_: '-sharp' },
  F = new RegExp('^(' + Object.keys(b).join('|') + ')'),
  I = new RegExp('^(' + Object.keys(x).join('|') + ')'),
  h = new RegExp('^(' + Object.keys(y).join('|') + ')'),
  O = /^[Mm]\s?[-+]?\.?\d/,
  Q = /^img:/,
  q = /^svguse:/,
  C = /^ion-/,
  D = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var V = B({
  name: 'QIcon',
  props: {
    ...j,
    tag: { type: String, default: 'i' },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean,
  },
  setup(e, { slots: r }) {
    const {
        proxy: { $q: u },
      } = _(),
      E = k(e),
      R = m(
        () =>
          'q-icon' +
          (e.left === !0 ? ' on-left' : '') +
          (e.right === !0 ? ' on-right' : '') +
          (e.color !== void 0 ? ` text-${e.color}` : '')
      ),
      i = m(() => {
        let s,
          t = e.name;
        if (t === 'none' || !t) return { none: !0 };
        if (u.iconMapFn !== null) {
          const n = u.iconMapFn(t);
          if (n !== void 0)
            if (n.icon !== void 0) {
              if (((t = n.icon), t === 'none' || !t)) return { none: !0 };
            } else
              return {
                cls: n.cls,
                content: n.content !== void 0 ? n.content : ' ',
              };
        }
        if (O.test(t) === !0) {
          const [n, c = d] = t.split('|');
          return {
            svg: !0,
            viewBox: c,
            nodes: n.split('&&').map((S) => {
              const [$, w, z] = S.split('@@');
              return o('path', { style: w, d: $, transform: z });
            }),
          };
        }
        if (Q.test(t) === !0) return { img: !0, src: t.substring(4) };
        if (q.test(t) === !0) {
          const [n, c = d] = t.split('|');
          return { svguse: !0, src: n.substring(7), viewBox: c };
        }
        let l = ' ';
        const g = t.match(F);
        if (g !== null) s = b[g[1]](t);
        else if (D.test(t) === !0) s = t;
        else if (C.test(t) === !0)
          s = `ionicons ion-${
            u.platform.is.ios === !0 ? 'ios' : 'md'
          }${t.substring(3)}`;
        else if (h.test(t) === !0) {
          s = 'notranslate material-symbols';
          const n = t.match(h);
          n !== null && ((t = t.substring(6)), (s += y[n[1]])), (l = t);
        } else {
          s = 'notranslate material-icons';
          const n = t.match(I);
          n !== null && ((t = t.substring(2)), (s += x[n[1]])), (l = t);
        }
        return { cls: s, content: l };
      });
    return () => {
      const s = {
        class: R.value,
        style: E.value,
        'aria-hidden': 'true',
        role: 'presentation',
      };
      return i.value.none === !0
        ? o(e.tag, s, p(r.default))
        : i.value.img === !0
        ? o(e.tag, s, a(r.default, [o('img', { src: i.value.src })]))
        : i.value.svg === !0
        ? o(
            e.tag,
            s,
            a(r.default, [
              o(
                'svg',
                { viewBox: i.value.viewBox || '0 0 24 24' },
                i.value.nodes
              ),
            ])
          )
        : i.value.svguse === !0
        ? o(
            e.tag,
            s,
            a(r.default, [
              o('svg', { viewBox: i.value.viewBox }, [
                o('use', { 'xlink:href': i.value.src }),
              ]),
            ])
          )
        : (i.value.cls !== void 0 && (s.class += ' ' + i.value.cls),
          o(e.tag, s, a(r.default, [i.value.content])));
    };
  },
});
export { V as Q, j as a, k as b, M as u };
