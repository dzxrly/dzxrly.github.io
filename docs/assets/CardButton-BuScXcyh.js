import { e as W, a as L, Q as J, R as U } from './Ripple-DkNmnZOt.js';
import { Q as Y } from './QSpinnerHourglass-CChfehD2.js';
import {
  b as i,
  a as G,
  r as l,
  z as X,
  o as Z,
  h as v,
  y as ee,
  w as te,
  g as ae,
  I as re,
  a6 as ie,
  J as ne,
  a8 as oe,
  V as se,
  M as S,
  R as k,
  a9 as le,
  a2 as ce,
  W as _,
  a7 as P,
  O as Q,
  P as z,
  L as j,
  N as A,
  Q as ue,
  aa as O,
  Y as D,
  _ as de,
} from './index-B4Fegd2x.js';
import { h as ve } from './render-C8JR9mId.js';
import { u as H } from './use-timeout-o9Uba7nv.js';
import { Q as M, o as me } from './open-url-DoUsCjqU.js';
import { u as ge } from './use-quasar-B9Viz2rg.js';
const fe = { ratio: [String, Number] };
function ye(e, n) {
  return i(() => {
    const c = Number(e.ratio || (n !== void 0 ? n.value : void 0));
    return isNaN(c) !== !0 && c > 0 ? { paddingBottom: `${100 / c}%` } : null;
  });
}
const he = 1.7778,
  Se = G({
    name: 'QImg',
    props: {
      ...fe,
      src: String,
      srcset: String,
      sizes: String,
      alt: String,
      crossorigin: String,
      decoding: String,
      referrerpolicy: String,
      draggable: Boolean,
      loading: { type: String, default: 'lazy' },
      loadingShowDelay: { type: [Number, String], default: 0 },
      fetchpriority: { type: String, default: 'auto' },
      width: String,
      height: String,
      initialRatio: { type: [Number, String], default: he },
      placeholderSrc: String,
      errorSrc: String,
      fit: { type: String, default: 'cover' },
      position: { type: String, default: '50% 50%' },
      imgClass: String,
      imgStyle: Object,
      noSpinner: Boolean,
      noNativeMenu: Boolean,
      noTransition: Boolean,
      spinnerColor: String,
      spinnerSize: String,
    },
    emits: ['load', 'error'],
    setup(e, { slots: n, emit: c }) {
      const a = l(e.initialRatio),
        y = ye(e, a),
        u = ae(),
        { registerTimeout: x, removeTimeout: p } = H(),
        { registerTimeout: T, removeTimeout: h } = H(),
        b = i(() => (e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null)),
        q = i(() => (e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: !0 } : null)),
        o = [l(null), l(b.value)],
        s = l(0),
        d = l(!1),
        m = l(!1),
        N = i(() => `q-img q-img--${e.noNativeMenu === !0 ? 'no-' : ''}menu`),
        B = i(() => ({ width: e.width, height: e.height })),
        r = i(
          () =>
            `q-img__image ${e.imgClass !== void 0 ? e.imgClass + ' ' : ''}q-img__image--with${e.noTransition === !0 ? 'out' : ''}-transition q-img__image--`,
        ),
        g = i(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
      function w() {
        if ((h(), e.loadingShowDelay === 0)) {
          d.value = !0;
          return;
        }
        T(() => {
          d.value = !0;
        }, e.loadingShowDelay);
      }
      function R() {
        (h(), (d.value = !1));
      }
      function V({ target: t }) {
        L(u) === !1 &&
          (p(),
          (a.value = t.naturalHeight === 0 ? 0.5 : t.naturalWidth / t.naturalHeight),
          K(t, 1));
      }
      function K(t, f) {
        f === 1e3 ||
          L(u) === !0 ||
          (t.complete === !0
            ? E(t)
            : x(() => {
                K(t, f + 1);
              }, 50));
      }
      function E(t) {
        L(u) !== !0 &&
          ((s.value = s.value ^ 1),
          (o[s.value].value = null),
          R(),
          t.getAttribute('__qerror') !== 'true' && (m.value = !1),
          c('load', t.currentSrc || t.src));
      }
      function I(t) {
        (p(),
          R(),
          (m.value = !0),
          (o[s.value].value = q.value),
          (o[s.value ^ 1].value = b.value),
          c('error', t));
      }
      function $(t) {
        const f = o[t].value,
          C = {
            key: 'img_' + t,
            class: r.value,
            style: g.value,
            alt: e.alt,
            crossorigin: e.crossorigin,
            decoding: e.decoding,
            referrerpolicy: e.referrerpolicy,
            height: e.height,
            width: e.width,
            loading: e.loading,
            fetchpriority: e.fetchpriority,
            'aria-hidden': 'true',
            draggable: e.draggable,
            ...f,
          };
        return (
          s.value === t
            ? Object.assign(C, { class: C.class + 'current', onLoad: V, onError: I })
            : (C.class += 'loaded'),
          v('div', { class: 'q-img__container absolute-full', key: 'img' + t }, v('img', C))
        );
      }
      function F() {
        return d.value === !1
          ? v(
              'div',
              { key: 'content', class: 'q-img__content absolute-full q-anchor--skip' },
              ve(n[m.value === !0 ? 'error' : 'default']),
            )
          : v(
              'div',
              { key: 'loading', class: 'q-img__loading absolute-full flex flex-center' },
              n.loading !== void 0
                ? n.loading()
                : e.noSpinner === !0
                  ? void 0
                  : [v(W, { color: e.spinnerColor, size: e.spinnerSize })],
            );
      }
      {
        let t = function () {
          te(
            () =>
              e.src || e.srcset || e.sizes
                ? { src: e.src, srcset: e.srcset, sizes: e.sizes }
                : null,
            (f) => {
              (p(),
                (m.value = !1),
                f === null ? (R(), (o[s.value ^ 1].value = b.value)) : w(),
                (o[s.value].value = f));
            },
            { immediate: !0 },
          );
        };
        X.value === !0 ? Z(t) : t();
      }
      return () => {
        const t = [];
        return (
          y.value !== null && t.push(v('div', { key: 'filler', style: y.value })),
          o[0].value !== null && t.push($(0)),
          o[1].value !== null && t.push($(1)),
          t.push(v(ee, { name: 'q-transition--fade' }, F)),
          v(
            'div',
            { key: 'main', class: N.value, style: B.value, role: 'img', 'aria-label': e.alt },
            t,
          )
        );
      };
    },
  }),
  pe = ['href', 'aria-label'],
  be = { key: 0, class: 'blank_href_tips_block' },
  _e = { class: 'secondary-btn column justify-center items-center full-width full-height wrap' },
  we = {
    key: 1,
    class: 'secondary-btn-easter-egg column justify-center items-center full-width wrap',
  },
  Ce = ['src', 'alt'],
  ke = re({
    __name: 'CardButton',
    props: {
      route: { type: Object, required: !0 },
      responsiveProps: { type: Object, required: !0 },
      iconName: { type: String },
      iconColorClass: { type: String, default: 'text-primary' },
      avatar: { type: String },
      secondaryAvatar: { type: String, default: '' },
      titleKeyword: { type: String, required: !0 },
      secondaryTitleKeyword: { type: String, default: '' },
      backgroundColor: { type: String, default: '#eef4f8' },
      textColor: { type: String, default: '#081e27' },
    },
    setup(e) {
      ie((r) => ({
        '96f22082': b.value,
        b4069af2: s.value,
        a789d130: d.value,
        b84ec428: q.value,
        '4753f9c5': x.value,
        16255236: p.value,
        '40578ae6': T.value,
      }));
      const { t: n } = ne(),
        c = ge(),
        a = e,
        y = oe(),
        u = l(!!(a.secondaryAvatar && a.secondaryAvatar !== '')),
        x = l(u.value ? 'translate3d(0, -92%, 0) scale(.94)' : 'translate3d(0, 0, 0)'),
        p = l(u.value ? 0 : 1),
        T = l(u.value ? 'translate3d(0, -50%, 0) scale(1)' : 'translate3d(0, 0, 0)'),
        h = i(() => {
          const r =
            c.screen.width * a.responsiveProps?.coefficientA + a.responsiveProps?.coefficientB;
          return r > a.responsiveProps?.valueMax
            ? a.responsiveProps?.valueMax
            : r < a.responsiveProps?.valueMin
              ? a.responsiveProps?.valueMin
              : r;
        }),
        b = i(() => `${h.value}rem`),
        q = i(() => `${h.value * 0.01}rem`),
        o = i(() => `${h.value * 0.6}rem`),
        s = i(() =>
          a.backgroundColor === '#eef4f8' ? 'var(--primary-container-color)' : a.backgroundColor,
        ),
        d = i(() =>
          a.textColor === '#081e27' ? 'var(--on-primary-container-color)' : a.textColor,
        ),
        m = i(() => a.route.path?.startsWith('http') ?? !1),
        N = i(() => (m.value ? { target: '_blank', rel: 'noopener noreferrer' } : {}));
      function B(r) {
        const g = (w) => {
          console.error('路由跳转失败:', w);
        };
        r.name
          ? (r.params
              ? y.push({ name: r.name, params: r.params })
              : y.push({ name: r.name })
            ).catch(g)
          : r.path?.indexOf('http') === -1
            ? y.push({ path: r.path }).catch(g)
            : me(r.path ?? '#');
      }
      return (r, g) =>
        se(
          (S(),
          k(
            'a',
            le(
              {
                class: 'custom-card-btn-wrapper rounded-borders relative-position',
                style: { display: 'block' },
                href: a.route.path ?? '#',
                'aria-label': _(n)(a.titleKeyword),
              },
              N.value,
              {
                onClick: g[0] || (g[0] = ce((w) => B(a.route), ['prevent'])),
                referrerpolicy: 'strict-origin-when-cross-origin',
              },
            ),
            [
              m.value
                ? (S(), k('div', be, [z(J, { name: 'open_in_new', color: 'primary', size: 'xs' })]))
                : P('', !0),
              Q('div', _e, [
                a.iconName
                  ? (S(),
                    j(
                      M,
                      {
                        key: 1,
                        class: ue([a.iconColorClass, 'custom-card-picture-in-btn']),
                        icon: e.iconName,
                        size: o.value,
                        color: 'transparent',
                        rounded: '',
                      },
                      null,
                      8,
                      ['class', 'icon', 'size'],
                    ))
                  : (S(),
                    j(
                      M,
                      { key: 0, size: o.value, class: 'custom-card-picture-in-btn', rounded: '' },
                      {
                        default: A(() => [
                          z(
                            Se,
                            { src: a.avatar, alt: _(n)(a.titleKeyword) },
                            { loading: A(() => [z(Y, { color: 'primary' })]), _: 1 },
                            8,
                            ['src', 'alt'],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['size'],
                    )),
                Q(
                  'span',
                  { style: O({ color: d.value }), class: 'text-subtitle1 text-bold ellipsis' },
                  D(_(n)(a.titleKeyword)),
                  5,
                ),
              ]),
              u.value
                ? (S(),
                  k('div', we, [
                    z(
                      M,
                      { size: o.value, class: 'custom-card-picture-in-btn', rounded: '' },
                      {
                        default: A(() => [
                          Q(
                            'img',
                            { src: a.secondaryAvatar, alt: _(n)(a.titleKeyword), loading: 'lazy' },
                            null,
                            8,
                            Ce,
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['size'],
                    ),
                    e.secondaryTitleKeyword && e.secondaryTitleKeyword !== ''
                      ? (S(),
                        k(
                          'span',
                          {
                            key: 0,
                            style: O({ color: d.value }),
                            class: 'text-subtitle1 text-bold ellipsis',
                          },
                          D(_(n)(a.secondaryTitleKeyword)),
                          5,
                        ))
                      : P('', !0),
                  ]))
                : P('', !0),
            ],
            16,
            pe,
          )),
          [[U]],
        );
    },
  }),
  Le = de(ke, [['__scopeId', 'data-v-973f4ca9']]);
export { Le as C };
