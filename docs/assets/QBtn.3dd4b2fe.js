import {
  c as o,
  g as Y,
  k as Z,
  h,
  Z as ne,
  a1 as ae,
  l as K,
  q as re,
  u as ue,
  H as G,
  D as le,
  r as I,
  t as ie,
  E as oe,
  Y as se,
  m as T,
  p as ce,
  v as de,
} from './index.9c1a1e44.js';
import { u as N, a as fe, b as ve, Q } from './QIcon.7f956443.js';
import { b as ge } from './render.7c7394e0.js';
function De(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function me(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Ke(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function H(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
function V(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function be(e, t) {
  for (const a in t) {
    const n = t[a],
      l = e[a];
    if (typeof n == 'string') {
      if (n !== l) return !1;
    } else if (
      Array.isArray(l) === !1 ||
      l.length !== n.length ||
      n.some((m, f) => m !== l[f])
    )
      return !1;
  }
  return !0;
}
function U(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((a, n) => a === t[n])
    : e.length === 1 && e[0] === t;
}
function he(e, t) {
  return Array.isArray(e) === !0
    ? U(e, t)
    : Array.isArray(t) === !0
    ? U(t, e)
    : e === t;
}
function ye(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const a in e) if (he(e[a], t[a]) === !1) return !1;
  return !0;
}
const J = {
    to: [String, Object],
    replace: Boolean,
    href: String,
    target: String,
    disable: Boolean,
  },
  Ie = {
    ...J,
    exact: Boolean,
    activeClass: { type: String, default: 'q-router-link--active' },
    exactActiveClass: { type: String, default: 'q-router-link--exact-active' },
  };
function ke({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const a = Y(),
    { props: n, proxy: l, emit: m } = a,
    f = me(a),
    d = o(() => n.disable !== !0 && n.href !== void 0),
    C =
      t === !0
        ? o(
            () =>
              f === !0 &&
              n.disable !== !0 &&
              d.value !== !0 &&
              n.to !== void 0 &&
              n.to !== null &&
              n.to !== ''
          )
        : o(
            () =>
              f === !0 &&
              d.value !== !0 &&
              n.to !== void 0 &&
              n.to !== null &&
              n.to !== ''
          ),
    y = o(() => (C.value === !0 ? B(n.to) : null)),
    v = o(() => y.value !== null),
    $ = o(() => d.value === !0 || v.value === !0),
    u = o(() => (n.type === 'a' || $.value === !0 ? 'a' : n.tag || e || 'div')),
    k = o(() =>
      d.value === !0
        ? { href: n.href, target: n.target }
        : v.value === !0
        ? { href: y.value.href, target: n.target }
        : {}
    ),
    g = o(() => {
      if (v.value === !1) return -1;
      const { matched: s } = y.value,
        { length: q } = s,
        S = s[q - 1];
      if (S === void 0) return -1;
      const L = l.$route.matched;
      if (L.length === 0) return -1;
      const P = L.findIndex(V.bind(null, S));
      if (P !== -1) return P;
      const z = H(s[q - 2]);
      return q > 1 && H(S) === z && L[L.length - 1].path !== z
        ? L.findIndex(V.bind(null, s[q - 2]))
        : P;
    }),
    p = o(
      () =>
        v.value === !0 && g.value !== -1 && be(l.$route.params, y.value.params)
    ),
    i = o(
      () =>
        p.value === !0 &&
        g.value === l.$route.matched.length - 1 &&
        ye(l.$route.params, y.value.params)
    ),
    b = o(() =>
      v.value === !0
        ? i.value === !0
          ? ` ${n.exactActiveClass} ${n.activeClass}`
          : n.exact === !0
          ? ''
          : p.value === !0
          ? ` ${n.activeClass}`
          : ''
        : ''
    );
  function B(s) {
    try {
      return l.$router.resolve(s);
    } catch {}
    return null;
  }
  function w(
    s,
    { returnRouterError: q, to: S = n.to, replace: L = n.replace } = {}
  ) {
    if (n.disable === !0) return s.preventDefault(), Promise.resolve(!1);
    if (
      s.metaKey ||
      s.altKey ||
      s.ctrlKey ||
      s.shiftKey ||
      (s.button !== void 0 && s.button !== 0) ||
      n.target === '_blank'
    )
      return Promise.resolve(!1);
    s.preventDefault();
    const P = l.$router[L === !0 ? 'replace' : 'push'](S);
    return q === !0 ? P : P.then(() => {}).catch(() => {});
  }
  function R(s) {
    if (v.value === !0) {
      const q = (S) => w(s, S);
      m('click', s, q), s.defaultPrevented !== !0 && q();
    } else m('click', s);
  }
  return {
    hasRouterLink: v,
    hasHrefLink: d,
    hasLink: $,
    linkTag: u,
    resolvedLink: y,
    linkIsActive: p,
    linkIsExactActive: i,
    linkClass: b,
    linkAttrs: k,
    getLink: B,
    navigateToRouterLink: w,
    navigateOnClick: R,
  };
}
const pe = { size: { type: [String, Number], default: '1em' }, color: String };
function qe(e) {
  return {
    cSize: o(() => (e.size in N ? `${N[e.size]}px` : e.size)),
    classes: o(() => 'q-spinner' + (e.color ? ` text-${e.color}` : '')),
  };
}
var xe = Z({
  name: 'QSpinner',
  props: { ...pe, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: a } = qe(e);
    return () =>
      h(
        'svg',
        {
          class: a.value + ' q-spinner-mat',
          width: t.value,
          height: t.value,
          viewBox: '25 25 50 50',
        },
        [
          h('circle', {
            class: 'path',
            cx: '50',
            cy: '50',
            r: '20',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': e.thickness,
            'stroke-miterlimit': '10',
          }),
        ]
      );
  },
});
function $e(e, t) {
  const a = e.style;
  for (const n in t) a[n] = t[n];
}
function Ne(e) {
  if (e == null) return;
  if (typeof e == 'string')
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = ne(e);
  if (t) return t.$el || t;
}
function Qe(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let a = e.nextElementSibling; a !== null; a = a.nextElementSibling)
    if (a.contains(t)) return !0;
  return !1;
}
function Se(e, t = 250) {
  let a = !1,
    n;
  return function () {
    return (
      a === !1 &&
        ((a = !0),
        setTimeout(() => {
          a = !1;
        }, t),
        (n = e.apply(this, arguments))),
      n
    );
  };
}
function W(e, t, a, n) {
  a.modifiers.stop === !0 && G(e);
  const l = a.modifiers.color;
  let m = a.modifiers.center;
  m = m === !0 || n === !0;
  const f = document.createElement('span'),
    d = document.createElement('span'),
    C = le(e),
    { left: y, top: v, width: $, height: u } = t.getBoundingClientRect(),
    k = Math.sqrt($ * $ + u * u),
    g = k / 2,
    p = `${($ - k) / 2}px`,
    i = m ? p : `${C.left - y - g}px`,
    b = `${(u - k) / 2}px`,
    B = m ? b : `${C.top - v - g}px`;
  (d.className = 'q-ripple__inner'),
    $e(d, {
      height: `${k}px`,
      width: `${k}px`,
      transform: `translate3d(${i},${B},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (f.className = `q-ripple${l ? ' text-' + l : ''}`),
    f.setAttribute('dir', 'ltr'),
    f.appendChild(d),
    t.appendChild(f);
  const w = () => {
    f.remove(), clearTimeout(R);
  };
  a.abort.push(w);
  let R = setTimeout(() => {
    d.classList.add('q-ripple__inner--enter'),
      (d.style.transform = `translate3d(${p},${b},0) scale3d(1,1,1)`),
      (d.style.opacity = 0.2),
      (R = setTimeout(() => {
        d.classList.remove('q-ripple__inner--enter'),
          d.classList.add('q-ripple__inner--leave'),
          (d.style.opacity = 0),
          (R = setTimeout(() => {
            f.remove(), a.abort.splice(a.abort.indexOf(w), 1);
          }, 275));
      }, 250));
  }, 50);
}
function F(e, { modifiers: t, value: a, arg: n }) {
  const l = Object.assign({}, e.cfg.ripple, t, a);
  e.modifiers = {
    early: l.early === !0,
    stop: l.stop === !0,
    center: l.center === !0,
    color: l.color || n,
    keyCodes: [].concat(l.keyCodes || 13),
  };
}
var Ee = ae({
  name: 'ripple',
  beforeMount(e, t) {
    const a = t.instance.$.appContext.config.globalProperties.$q.config || {};
    if (a.ripple === !1) return;
    const n = {
      cfg: a,
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(l) {
        n.enabled === !0 &&
          l.qSkipRipple !== !0 &&
          l.type === (n.modifiers.early === !0 ? 'pointerdown' : 'click') &&
          W(l, e, n, l.qKeyEvent === !0);
      },
      keystart: Se((l) => {
        n.enabled === !0 &&
          l.qSkipRipple !== !0 &&
          K(l, n.modifiers.keyCodes) === !0 &&
          l.type === `key${n.modifiers.early === !0 ? 'down' : 'up'}` &&
          W(l, e, n, !0);
      }, 300),
    };
    F(n, t),
      (e.__qripple = n),
      re(n, 'main', [
        [e, 'pointerdown', 'start', 'passive'],
        [e, 'click', 'start', 'passive'],
        [e, 'keydown', 'keystart', 'passive'],
        [e, 'keyup', 'keystart', 'passive'],
      ]);
  },
  updated(e, t) {
    if (t.oldValue !== t.value) {
      const a = e.__qripple;
      a !== void 0 &&
        ((a.enabled = t.value !== !1),
        a.enabled === !0 && Object(t.value) === t.value && F(a, t));
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple;
    t !== void 0 &&
      (t.abort.forEach((a) => {
        a();
      }),
      ue(t, 'main'),
      delete e._qripple);
  },
});
const ee = {
    left: 'start',
    center: 'center',
    right: 'end',
    between: 'between',
    around: 'around',
    evenly: 'evenly',
    stretch: 'stretch',
  },
  Le = Object.keys(ee),
  Ce = { align: { type: String, validator: (e) => Le.includes(e) } };
function Pe(e) {
  return o(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? 'stretch' : 'left') : e.align;
    return `${e.vertical === !0 ? 'items' : 'justify'}-${ee[t]}`;
  });
}
const X = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  we = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  Re = ['button', 'submit', 'reset'],
  Be = /[^\s]\/[^\s]/,
  Te = ['flat', 'outline', 'push', 'unelevated'];
function te(e, t) {
  return e.flat === !0
    ? 'flat'
    : e.outline === !0
    ? 'outline'
    : e.push === !0
    ? 'push'
    : e.unelevated === !0
    ? 'unelevated'
    : t;
}
function He(e) {
  const t = te(e);
  return t !== void 0 ? { [t]: !0 } : {};
}
const _e = {
    ...fe,
    ...J,
    type: { type: String, default: 'button' },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...Te.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...Ce.align, default: 'center' },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  },
  Ae = { ..._e, round: Boolean };
function Oe(e) {
  const t = ve(e, we),
    a = Pe(e),
    {
      hasRouterLink: n,
      hasLink: l,
      linkTag: m,
      linkAttrs: f,
      navigateOnClick: d,
    } = ke({ fallbackTag: 'button' }),
    C = o(() => {
      const i = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, i, {
            padding: e.padding
              .split(/\s+/)
              .map((b) => (b in X ? X[b] + 'px' : b))
              .join(' '),
            minWidth: '0',
            minHeight: '0',
          })
        : i;
    }),
    y = o(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    v = o(() => e.disable !== !0 && e.loading !== !0),
    $ = o(() => (v.value === !0 ? e.tabindex || 0 : -1)),
    u = o(() => te(e, 'standard')),
    k = o(() => {
      const i = { tabindex: $.value };
      return (
        l.value === !0
          ? Object.assign(i, f.value)
          : Re.includes(e.type) === !0 && (i.type = e.type),
        m.value === 'a'
          ? (e.disable === !0
              ? (i['aria-disabled'] = 'true')
              : i.href === void 0 && (i.role = 'button'),
            n.value !== !0 && Be.test(e.type) === !0 && (i.type = e.type))
          : e.disable === !0 &&
            ((i.disabled = ''), (i['aria-disabled'] = 'true')),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(i, {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        i
      );
    }),
    g = o(() => {
      let i;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (i = `text-${e.textColor || e.color}`)
          : (i = `bg-${e.color} text-${e.textColor || 'white'}`)
        : e.textColor && (i = `text-${e.textColor}`);
      const b =
        e.round === !0
          ? 'round'
          : `rectangle${
              y.value === !0
                ? ' q-btn--rounded'
                : e.square === !0
                ? ' q-btn--square'
                : ''
            }`;
      return (
        `q-btn--${u.value} q-btn--${b}` +
        (i !== void 0 ? ' ' + i : '') +
        (v.value === !0
          ? ' q-btn--actionable q-focusable q-hoverable'
          : e.disable === !0
          ? ' disabled'
          : '') +
        (e.fab === !0
          ? ' q-btn--fab'
          : e.fabMini === !0
          ? ' q-btn--fab-mini'
          : '') +
        (e.noCaps === !0 ? ' q-btn--no-uppercase' : '') +
        (e.dense === !0 ? ' q-btn--dense' : '') +
        (e.stretch === !0 ? ' no-border-radius self-stretch' : '') +
        (e.glossy === !0 ? ' glossy' : '') +
        (e.square ? ' q-btn--square' : '')
      );
    }),
    p = o(
      () =>
        a.value +
        (e.stack === !0 ? ' column' : ' row') +
        (e.noWrap === !0 ? ' no-wrap text-no-wrap' : '') +
        (e.loading === !0 ? ' q-btn__content--hidden' : '')
    );
  return {
    classes: g,
    style: C,
    innerClasses: p,
    attributes: k,
    hasLink: l,
    linkTag: m,
    navigateOnClick: d,
    isActionable: v,
  };
}
const { passiveCapture: x } = de;
let _ = null,
  A = null,
  O = null;
var Ve = Z({
  name: 'QBtn',
  props: {
    ...Ae,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ['click', 'keydown', 'mousedown', 'keyup'],
  setup(e, { slots: t, emit: a }) {
    const { proxy: n } = Y(),
      {
        classes: l,
        style: m,
        innerClasses: f,
        attributes: d,
        hasLink: C,
        linkTag: y,
        navigateOnClick: v,
        isActionable: $,
      } = Oe(e),
      u = I(null),
      k = I(null);
    let g = null,
      p,
      i = null;
    const b = o(() => e.label !== void 0 && e.label !== null && e.label !== ''),
      B = o(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : {
              keyCodes: C.value === !0 ? [13, 32] : [13],
              ...(e.ripple === !0 ? {} : e.ripple),
            }
      ),
      w = o(() => ({ center: e.round })),
      R = o(() => {
        const r = Math.max(0, Math.min(100, e.percentage));
        return r > 0
          ? {
              transition: 'transform 0.6s',
              transform: `translateX(${r - 100}%)`,
            }
          : {};
      }),
      s = o(() => {
        if (e.loading === !0)
          return {
            onMousedown: M,
            onTouchstart: M,
            onClick: M,
            onKeydown: M,
            onKeyup: M,
          };
        if ($.value === !0) {
          const r = { onClick: S, onKeydown: L, onMousedown: z };
          if (n.$q.platform.has.touch === !0) {
            const c = e.onTouchstart !== void 0 ? '' : 'Passive';
            r[`onTouchstart${c}`] = P;
          }
          return r;
        }
        return { onClick: T };
      }),
      q = o(() => ({
        ref: u,
        class: 'q-btn q-btn-item non-selectable no-outline ' + l.value,
        style: m.value,
        ...d.value,
        ...s.value,
      }));
    function S(r) {
      if (u.value !== null) {
        if (r !== void 0) {
          if (r.defaultPrevented === !0) return;
          const c = document.activeElement;
          if (
            e.type === 'submit' &&
            c !== document.body &&
            u.value.contains(c) === !1 &&
            c.contains(u.value) === !1
          ) {
            u.value.focus();
            const D = () => {
              document.removeEventListener('keydown', T, !0),
                document.removeEventListener('keyup', D, x),
                u.value !== null && u.value.removeEventListener('blur', D, x);
            };
            document.addEventListener('keydown', T, !0),
              document.addEventListener('keyup', D, x),
              u.value.addEventListener('blur', D, x);
          }
        }
        v(r);
      }
    }
    function L(r) {
      u.value !== null &&
        (a('keydown', r),
        K(r, [13, 32]) === !0 &&
          A !== u.value &&
          (A !== null && j(),
          r.defaultPrevented !== !0 &&
            (u.value.focus(),
            (A = u.value),
            u.value.classList.add('q-btn--active'),
            document.addEventListener('keyup', E, !0),
            u.value.addEventListener('blur', E, x)),
          T(r)));
    }
    function P(r) {
      u.value !== null &&
        (a('touchstart', r),
        r.defaultPrevented !== !0 &&
          (_ !== u.value &&
            (_ !== null && j(),
            (_ = u.value),
            (g = r.target),
            g.addEventListener('touchcancel', E, x),
            g.addEventListener('touchend', E, x)),
          (p = !0),
          i !== null && clearTimeout(i),
          (i = setTimeout(() => {
            (i = null), (p = !1);
          }, 200))));
    }
    function z(r) {
      u.value !== null &&
        ((r.qSkipRipple = p === !0),
        a('mousedown', r),
        r.defaultPrevented !== !0 &&
          O !== u.value &&
          (O !== null && j(),
          (O = u.value),
          u.value.classList.add('q-btn--active'),
          document.addEventListener('mouseup', E, x)));
    }
    function E(r) {
      if (
        u.value !== null &&
        !(
          r !== void 0 &&
          r.type === 'blur' &&
          document.activeElement === u.value
        )
      ) {
        if (r !== void 0 && r.type === 'keyup') {
          if (A === u.value && K(r, [13, 32]) === !0) {
            const c = new MouseEvent('click', r);
            (c.qKeyEvent = !0),
              r.defaultPrevented === !0 && ce(c),
              r.cancelBubble === !0 && G(c),
              u.value.dispatchEvent(c),
              T(r),
              (r.qKeyEvent = !0);
          }
          a('keyup', r);
        }
        j();
      }
    }
    function j(r) {
      const c = k.value;
      r !== !0 &&
        (_ === u.value || O === u.value) &&
        c !== null &&
        c !== document.activeElement &&
        (c.setAttribute('tabindex', -1), c.focus()),
        _ === u.value &&
          (g !== null &&
            (g.removeEventListener('touchcancel', E, x),
            g.removeEventListener('touchend', E, x)),
          (_ = g = null)),
        O === u.value &&
          (document.removeEventListener('mouseup', E, x), (O = null)),
        A === u.value &&
          (document.removeEventListener('keyup', E, !0),
          u.value !== null && u.value.removeEventListener('blur', E, x),
          (A = null)),
        u.value !== null && u.value.classList.remove('q-btn--active');
    }
    function M(r) {
      T(r), (r.qSkipRipple = !0);
    }
    return (
      ie(() => {
        j(!0);
      }),
      Object.assign(n, {
        click: (r) => {
          $.value === !0 && S(r);
        },
      }),
      () => {
        let r = [];
        e.icon !== void 0 &&
          r.push(
            h(Q, {
              name: e.icon,
              left: e.stack !== !0 && b.value === !0,
              role: 'img',
              'aria-hidden': 'true',
            })
          ),
          b.value === !0 && r.push(h('span', { class: 'block' }, [e.label])),
          (r = ge(t.default, r)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            r.push(
              h(Q, {
                name: e.iconRight,
                right: e.stack !== !0 && b.value === !0,
                role: 'img',
                'aria-hidden': 'true',
              })
            );
        const c = [h('span', { class: 'q-focus-helper', ref: k })];
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            c.push(
              h(
                'span',
                {
                  class:
                    'q-btn__progress absolute-full overflow-hidden' +
                    (e.darkPercentage === !0 ? ' q-btn__progress--dark' : ''),
                },
                [
                  h('span', {
                    class: 'q-btn__progress-indicator fit block',
                    style: R.value,
                  }),
                ]
              )
            ),
          c.push(
            h(
              'span',
              {
                class:
                  'q-btn__content text-center col items-center q-anchor--skip ' +
                  f.value,
              },
              r
            )
          ),
          e.loading !== null &&
            c.push(
              h(oe, { name: 'q-transition--fade' }, () =>
                e.loading === !0
                  ? [
                      h(
                        'span',
                        {
                          key: 'loading',
                          class: 'absolute-full flex flex-center',
                        },
                        t.loading !== void 0 ? t.loading() : [h(xe)]
                      ),
                    ]
                  : null
              )
            ),
          se(h(y.value, q.value, c), [[Ee, B.value, void 0, w.value]])
        );
      }
    );
  },
});
export {
  Ve as Q,
  Ee as R,
  ke as a,
  Ke as b,
  Ne as c,
  $e as d,
  Qe as e,
  He as f,
  De as g,
  pe as h,
  qe as i,
  Ce as j,
  Pe as k,
  _e as n,
  Ie as u,
  me as v,
};
