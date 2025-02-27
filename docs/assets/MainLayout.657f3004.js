import { Q as Oe } from './QIcon.7f956443.js';
import {
  k as $,
  c as p,
  h as x,
  r as S,
  l as fe,
  m as Ve,
  g as L,
  P as gt,
  p as Ce,
  n as Q,
  q as Be,
  w as T,
  o as M,
  t as R,
  u as bt,
  v as O,
  a as je,
  x as yt,
  y as wt,
  z as pt,
  A as xt,
  B as Ie,
  C as ve,
  D as St,
  E as qt,
  G as he,
  H as Ct,
  i as Ke,
  I as ie,
  J as Ne,
  K as Ue,
  L as Bt,
  M as Ge,
  N as G,
  _ as kt,
  d as Et,
  O as Tt,
  Q as ke,
  R as Pt,
  S as A,
  U as _t,
  j as z,
  V as Lt,
  W as Ht,
  F as $t,
  X as zt,
  Y as Mt,
  Z as Rt,
  $ as At,
  a0 as Wt,
} from './index.9c1a1e44.js';
import { h as j, a as Dt, b as Ft } from './render.7c7394e0.js';
import { u as me, a as ge } from './use-dark.803c086b.js';
import {
  u as Qt,
  a as Ot,
  v as Vt,
  g as ae,
  b as Xe,
  c as jt,
  d as Ee,
  e as It,
  n as Ye,
  Q as re,
  f as Kt,
  R as Nt,
} from './QBtn.3dd4b2fe.js';
import { u as Ut } from './vue-i18n.runtime.639bc85e.js';
var Te = $({
    name: 'QItemSection',
    props: {
      avatar: Boolean,
      thumbnail: Boolean,
      side: Boolean,
      top: Boolean,
      noWrap: Boolean,
    },
    setup(e, { slots: o }) {
      const t = p(
        () =>
          `q-item__section column q-item__section--${
            e.avatar === !0 || e.side === !0 || e.thumbnail === !0
              ? 'side'
              : 'main'
          }` +
          (e.top === !0
            ? ' q-item__section--top justify-start'
            : ' justify-center') +
          (e.avatar === !0 ? ' q-item__section--avatar' : '') +
          (e.thumbnail === !0 ? ' q-item__section--thumbnail' : '') +
          (e.noWrap === !0 ? ' q-item__section--nowrap' : '')
      );
      return () => x('div', { class: t.value }, j(o.default));
    },
  }),
  Gt = $({
    name: 'QItem',
    props: {
      ...me,
      ...Qt,
      tag: { type: String, default: 'div' },
      active: { type: Boolean, default: null },
      clickable: Boolean,
      dense: Boolean,
      insetLevel: Number,
      tabindex: [String, Number],
      focused: Boolean,
      manualFocus: Boolean,
    },
    emits: ['click', 'keyup'],
    setup(e, { slots: o, emit: t }) {
      const {
          proxy: { $q: n },
        } = L(),
        l = ge(e, n),
        {
          hasLink: r,
          linkAttrs: i,
          linkClass: d,
          linkTag: c,
          navigateOnClick: s,
        } = Ot(),
        f = S(null),
        g = S(null),
        w = p(() => e.clickable === !0 || r.value === !0 || e.tag === 'label'),
        u = p(() => e.disable !== !0 && w.value === !0),
        h = p(
          () =>
            'q-item q-item-type row no-wrap' +
            (e.dense === !0 ? ' q-item--dense' : '') +
            (l.value === !0 ? ' q-item--dark' : '') +
            (r.value === !0 && e.active === null
              ? d.value
              : e.active === !0
              ? ` q-item--active${
                  e.activeClass !== void 0 ? ` ${e.activeClass}` : ''
                }`
              : '') +
            (e.disable === !0 ? ' disabled' : '') +
            (u.value === !0
              ? ' q-item--clickable q-link cursor-pointer ' +
                (e.manualFocus === !0
                  ? 'q-manual-focusable'
                  : 'q-focusable q-hoverable') +
                (e.focused === !0 ? ' q-manual-focusable--focused' : '')
              : '')
        ),
        P = p(() => {
          if (e.insetLevel === void 0) return null;
          const v = n.lang.rtl === !0 ? 'Right' : 'Left';
          return { ['padding' + v]: 16 + e.insetLevel * 56 + 'px' };
        });
      function B(v) {
        u.value === !0 &&
          (g.value !== null &&
            (v.qKeyEvent !== !0 && document.activeElement === f.value
              ? g.value.focus()
              : document.activeElement === g.value && f.value.focus()),
          s(v));
      }
      function k(v) {
        if (u.value === !0 && fe(v, [13, 32]) === !0) {
          Ve(v), (v.qKeyEvent = !0);
          const a = new MouseEvent('click', v);
          (a.qKeyEvent = !0), f.value.dispatchEvent(a);
        }
        t('keyup', v);
      }
      function m() {
        const v = Dt(o.default, []);
        return (
          u.value === !0 &&
            v.unshift(
              x('div', { class: 'q-focus-helper', tabindex: -1, ref: g })
            ),
          v
        );
      }
      return () => {
        const v = {
          ref: f,
          class: h.value,
          style: P.value,
          role: 'listitem',
          onClick: B,
          onKeyup: k,
        };
        return (
          u.value === !0
            ? ((v.tabindex = e.tabindex || '0'), Object.assign(v, i.value))
            : w.value === !0 && (v['aria-disabled'] = 'true'),
          x(c.value, v, m())
        );
      };
    },
  }),
  Xt = $({
    name: 'QList',
    props: {
      ...me,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
      tag: { type: String, default: 'div' },
    },
    setup(e, { slots: o }) {
      const t = L(),
        n = ge(e, t.proxy.$q),
        l = p(
          () =>
            'q-list' +
            (e.bordered === !0 ? ' q-list--bordered' : '') +
            (e.dense === !0 ? ' q-list--dense' : '') +
            (e.separator === !0 ? ' q-list--separator' : '') +
            (n.value === !0 ? ' q-list--dark' : '') +
            (e.padding === !0 ? ' q-list--padding' : '')
        );
      return () => x(e.tag, { class: l.value }, j(o.default));
    },
  }),
  Yt = $({
    name: 'QBtnGroup',
    props: {
      unelevated: Boolean,
      outline: Boolean,
      flat: Boolean,
      rounded: Boolean,
      square: Boolean,
      push: Boolean,
      stretch: Boolean,
      glossy: Boolean,
      spread: Boolean,
    },
    setup(e, { slots: o }) {
      const t = p(() => {
        const n = [
          'unelevated',
          'outline',
          'flat',
          'rounded',
          'square',
          'push',
          'stretch',
          'glossy',
        ]
          .filter((l) => e[l] === !0)
          .map((l) => `q-btn-group--${l}`)
          .join(' ');
        return (
          `q-btn-group row no-wrap${n.length !== 0 ? ' ' + n : ''}` +
          (e.spread === !0 ? ' q-btn-group--spread' : ' inline')
        );
      });
      return () => x('div', { class: t.value }, j(o.default));
    },
  });
function Zt() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0
      ? e.empty()
      : e.removeAllRanges !== void 0 &&
        (e.removeAllRanges(),
        gt.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
const Jt = {
    target: { type: [Boolean, String, Element], default: !0 },
    noParentEvent: Boolean,
  },
  en = { ...Jt, contextMenu: Boolean };
function tn({ showing: e, avoidEmit: o, configureAnchorEl: t }) {
  const { props: n, proxy: l, emit: r } = L(),
    i = S(null);
  let d = null;
  function c(u) {
    return i.value === null
      ? !1
      : u === void 0 || u.touches === void 0 || u.touches.length <= 1;
  }
  const s = {};
  t === void 0 &&
    (Object.assign(s, {
      hide(u) {
        l.hide(u);
      },
      toggle(u) {
        l.toggle(u), (u.qAnchorHandled = !0);
      },
      toggleKey(u) {
        fe(u, 13) === !0 && s.toggle(u);
      },
      contextClick(u) {
        l.hide(u),
          Ce(u),
          Q(() => {
            l.show(u), (u.qAnchorHandled = !0);
          });
      },
      prevent: Ce,
      mobileTouch(u) {
        if ((s.mobileCleanup(u), c(u) !== !0)) return;
        l.hide(u), i.value.classList.add('non-selectable');
        const h = u.target;
        Be(s, 'anchor', [
          [h, 'touchmove', 'mobileCleanup', 'passive'],
          [h, 'touchend', 'mobileCleanup', 'passive'],
          [h, 'touchcancel', 'mobileCleanup', 'passive'],
          [i.value, 'contextmenu', 'prevent', 'notPassive'],
        ]),
          (d = setTimeout(() => {
            (d = null), l.show(u), (u.qAnchorHandled = !0);
          }, 300));
      },
      mobileCleanup(u) {
        i.value.classList.remove('non-selectable'),
          d !== null && (clearTimeout(d), (d = null)),
          e.value === !0 && u !== void 0 && Zt();
      },
    }),
    (t = function (u = n.contextMenu) {
      if (n.noParentEvent === !0 || i.value === null) return;
      let h;
      u === !0
        ? l.$q.platform.is.mobile === !0
          ? (h = [[i.value, 'touchstart', 'mobileTouch', 'passive']])
          : (h = [
              [i.value, 'mousedown', 'hide', 'passive'],
              [i.value, 'contextmenu', 'contextClick', 'notPassive'],
            ])
        : (h = [
            [i.value, 'click', 'toggle', 'passive'],
            [i.value, 'keyup', 'toggleKey', 'passive'],
          ]),
        Be(s, 'anchor', h);
    }));
  function f() {
    bt(s, 'anchor');
  }
  function g(u) {
    for (i.value = u; i.value.classList.contains('q-anchor--skip'); )
      i.value = i.value.parentNode;
    t();
  }
  function w() {
    if (n.target === !1 || n.target === '' || l.$el.parentNode === null)
      i.value = null;
    else if (n.target === !0) g(l.$el.parentNode);
    else {
      let u = n.target;
      if (typeof n.target == 'string')
        try {
          u = document.querySelector(n.target);
        } catch {
          u = void 0;
        }
      u != null
        ? ((i.value = u.$el || u), t())
        : ((i.value = null),
          console.error(`Anchor: target "${n.target}" not found`));
    }
  }
  return (
    T(
      () => n.contextMenu,
      (u) => {
        i.value !== null && (f(), t(u));
      }
    ),
    T(
      () => n.target,
      () => {
        i.value !== null && f(), w();
      }
    ),
    T(
      () => n.noParentEvent,
      (u) => {
        i.value !== null && (u === !0 ? f() : t());
      }
    ),
    M(() => {
      w(),
        o !== !0 &&
          n.modelValue === !0 &&
          i.value === null &&
          r('update:modelValue', !1);
    }),
    R(() => {
      d !== null && clearTimeout(d), f();
    }),
    { anchorEl: i, canShow: c, anchorEvents: s }
  );
}
function nn(e, o) {
  const t = S(null);
  let n;
  function l(d, c) {
    const s = `${c !== void 0 ? 'add' : 'remove'}EventListener`,
      f = c !== void 0 ? c : n;
    d !== window && d[s]('scroll', f, O.passive),
      window[s]('scroll', f, O.passive),
      (n = c);
  }
  function r() {
    t.value !== null && (l(t.value), (t.value = null));
  }
  const i = T(
    () => e.noParentEvent,
    () => {
      t.value !== null && (r(), o());
    }
  );
  return (
    R(i),
    { localScrollTarget: t, unconfigureScrollTarget: r, changeScrollEvent: l }
  );
}
const on = {
    modelValue: { type: Boolean, default: null },
    'onUpdate:modelValue': [Function, Array],
  },
  ln = ['beforeShow', 'show', 'beforeHide', 'hide'];
function an({
  showing: e,
  canShow: o,
  hideOnRouteChange: t,
  handleShow: n,
  handleHide: l,
  processOnMount: r,
}) {
  const i = L(),
    { props: d, emit: c, proxy: s } = i;
  let f;
  function g(m) {
    e.value === !0 ? h(m) : w(m);
  }
  function w(m) {
    if (
      d.disable === !0 ||
      (m !== void 0 && m.qAnchorHandled === !0) ||
      (o !== void 0 && o(m) !== !0)
    )
      return;
    const v = d['onUpdate:modelValue'] !== void 0;
    v === !0 &&
      (c('update:modelValue', !0),
      (f = m),
      Q(() => {
        f === m && (f = void 0);
      })),
      (d.modelValue === null || v === !1) && u(m);
  }
  function u(m) {
    e.value !== !0 &&
      ((e.value = !0), c('beforeShow', m), n !== void 0 ? n(m) : c('show', m));
  }
  function h(m) {
    if (d.disable === !0) return;
    const v = d['onUpdate:modelValue'] !== void 0;
    v === !0 &&
      (c('update:modelValue', !1),
      (f = m),
      Q(() => {
        f === m && (f = void 0);
      })),
      (d.modelValue === null || v === !1) && P(m);
  }
  function P(m) {
    e.value !== !1 &&
      ((e.value = !1), c('beforeHide', m), l !== void 0 ? l(m) : c('hide', m));
  }
  function B(m) {
    d.disable === !0 && m === !0
      ? d['onUpdate:modelValue'] !== void 0 && c('update:modelValue', !1)
      : (m === !0) !== e.value && (m === !0 ? u : P)(f);
  }
  T(() => d.modelValue, B),
    t !== void 0 &&
      Vt(i) === !0 &&
      T(
        () => s.$route.fullPath,
        () => {
          t.value === !0 && e.value === !0 && h();
        }
      ),
    r === !0 &&
      M(() => {
        B(d.modelValue);
      });
  const k = { show: w, hide: h, toggle: g };
  return Object.assign(s, k), k;
}
let K = [],
  U = [];
function Ze(e) {
  U = U.filter((o) => o !== e);
}
function rn(e) {
  Ze(e), U.push(e);
}
function Pe(e) {
  Ze(e), U.length === 0 && K.length !== 0 && (K[K.length - 1](), (K = []));
}
function un(e) {
  U.length === 0 ? e() : K.push(e);
}
const N = [];
function sn(e, o) {
  do {
    if (e.$options.name === 'QMenu') {
      if ((e.hide(o), e.$props.separateClosePopup === !0)) return ae(e);
    } else if (e.__qPortal === !0) {
      const t = ae(e);
      return t !== void 0 && t.$options.name === 'QPopupProxy'
        ? (e.hide(o), t)
        : e;
    }
    e = ae(e);
  } while (e != null);
}
const cn = $({
  name: 'QPortal',
  setup(e, { slots: o }) {
    return () => o.default();
  },
});
function dn(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === 'QGlobalDialog') return !0;
    if (e.type.name === 'QDialog' || e.type.name === 'QMenu') return !1;
    e = e.parent;
  }
  return !1;
}
function fn(e, o, t, n) {
  const l = S(!1),
    r = S(!1);
  let i = null;
  const d = {},
    c = n === 'dialog' && dn(e);
  function s(g) {
    if (g === !0) {
      Pe(d), (r.value = !0);
      return;
    }
    (r.value = !1),
      l.value === !1 &&
        (c === !1 && i === null && (i = pt(!1, n)),
        (l.value = !0),
        N.push(e.proxy),
        rn(d));
  }
  function f(g) {
    if (((r.value = !1), g !== !0)) return;
    Pe(d), (l.value = !1);
    const w = N.indexOf(e.proxy);
    w !== -1 && N.splice(w, 1), i !== null && (xt(i), (i = null));
  }
  return (
    je(() => {
      f(!0);
    }),
    (e.proxy.__qPortal = !0),
    yt(e.proxy, 'contentEl', () => o.value),
    {
      showPortal: s,
      hidePortal: f,
      portalIsActive: l,
      portalIsAccessible: r,
      renderPortal: () =>
        c === !0 ? t() : l.value === !0 ? [x(wt, { to: i }, x(cn, t))] : void 0,
    }
  );
}
const Je = {
  transitionShow: { type: String, default: 'fade' },
  transitionHide: { type: String, default: 'fade' },
  transitionDuration: { type: [String, Number], default: 300 },
};
function vn(e, o = () => {}, t = () => {}) {
  return {
    transitionProps: p(() => {
      const n = `q-transition--${e.transitionShow || o()}`,
        l = `q-transition--${e.transitionHide || t()}`;
      return {
        appear: !0,
        enterFromClass: `${n}-enter-from`,
        enterActiveClass: `${n}-enter-active`,
        enterToClass: `${n}-enter-to`,
        leaveFromClass: `${l}-leave-from`,
        leaveActiveClass: `${l}-leave-active`,
        leaveToClass: `${l}-leave-to`,
      };
    }),
    transitionStyle: p(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    ),
  };
}
function hn() {
  let e;
  const o = L();
  function t() {
    e = void 0;
  }
  return (
    Ie(t),
    R(t),
    {
      removeTick: t,
      registerTick(n) {
        (e = n),
          Q(() => {
            e === n && (Xe(o) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
function mn() {
  let e = null;
  const o = L();
  function t() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Ie(t),
    R(t),
    {
      removeTimeout: t,
      registerTimeout(n, l) {
        t(),
          Xe(o) === !1 &&
            (e = setTimeout(() => {
              (e = null), n();
            }, l));
      },
    }
  );
}
const et = [Element, String],
  gn = [
    null,
    document,
    document.body,
    document.scrollingElement,
    document.documentElement,
  ];
function tt(e, o) {
  let t = jt(o);
  if (t === void 0) {
    if (e == null) return window;
    t = e.closest('.scroll,.scroll-y,.overflow-auto');
  }
  return gn.includes(t) ? window : t;
}
function bn(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function yn(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
let X;
function Z() {
  if (X !== void 0) return X;
  const e = document.createElement('p'),
    o = document.createElement('div');
  Ee(e, { width: '100%', height: '200px' }),
    Ee(o, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden',
    }),
    o.appendChild(e),
    document.body.appendChild(o);
  const t = e.offsetWidth;
  o.style.overflow = 'scroll';
  let n = e.offsetWidth;
  return t === n && (n = o.clientWidth), o.remove(), (X = t - n), X;
}
const W = [];
let V;
function wn(e) {
  V = e.keyCode === 27;
}
function pn() {
  V === !0 && (V = !1);
}
function xn(e) {
  V === !0 && ((V = !1), fe(e, 27) === !0 && W[W.length - 1](e));
}
function nt(e) {
  window[e]('keydown', wn),
    window[e]('blur', pn),
    window[e]('keyup', xn),
    (V = !1);
}
function Sn(e) {
  ve.is.desktop === !0 && (W.push(e), W.length === 1 && nt('addEventListener'));
}
function _e(e) {
  const o = W.indexOf(e);
  o !== -1 && (W.splice(o, 1), W.length === 0 && nt('removeEventListener'));
}
const D = [];
function ot(e) {
  D[D.length - 1](e);
}
function qn(e) {
  ve.is.desktop === !0 &&
    (D.push(e),
    D.length === 1 && document.body.addEventListener('focusin', ot));
}
function Cn(e) {
  const o = D.indexOf(e);
  o !== -1 &&
    (D.splice(o, 1),
    D.length === 0 && document.body.removeEventListener('focusin', ot));
}
const { notPassiveCapture: J } = O,
  F = [];
function ee(e) {
  const o = e.target;
  if (
    o === void 0 ||
    o.nodeType === 8 ||
    o.classList.contains('no-pointer-events') === !0
  )
    return;
  let t = N.length - 1;
  for (; t >= 0; ) {
    const n = N[t].$;
    if (n.type.name === 'QTooltip') {
      t--;
      continue;
    }
    if (n.type.name !== 'QDialog') break;
    if (n.props.seamless !== !0) return;
    t--;
  }
  for (let n = F.length - 1; n >= 0; n--) {
    const l = F[n];
    if (
      (l.anchorEl.value === null || l.anchorEl.value.contains(o) === !1) &&
      (o === document.body ||
        (l.innerRef.value !== null && l.innerRef.value.contains(o) === !1))
    )
      (e.qClickOutside = !0), l.onClickOutside(e);
    else return;
  }
}
function Bn(e) {
  F.push(e),
    F.length === 1 &&
      (document.addEventListener('mousedown', ee, J),
      document.addEventListener('touchstart', ee, J));
}
function Le(e) {
  const o = F.findIndex((t) => t === e);
  o !== -1 &&
    (F.splice(o, 1),
    F.length === 0 &&
      (document.removeEventListener('mousedown', ee, J),
      document.removeEventListener('touchstart', ee, J)));
}
let He, $e;
function ze(e) {
  const o = e.split(' ');
  return o.length !== 2
    ? !1
    : ['top', 'center', 'bottom'].includes(o[0]) !== !0
    ? (console.error(
        'Anchor/Self position must start with one of top/center/bottom'
      ),
      !1)
    : ['left', 'middle', 'right', 'start', 'end'].includes(o[1]) !== !0
    ? (console.error(
        'Anchor/Self position must end with one of left/middle/right/start/end'
      ),
      !1)
    : !0;
}
function kn(e) {
  return e
    ? !(e.length !== 2 || typeof e[0] != 'number' || typeof e[1] != 'number')
    : !0;
}
const ce = {
  'start#ltr': 'left',
  'start#rtl': 'right',
  'end#ltr': 'right',
  'end#rtl': 'left',
};
['left', 'middle', 'right'].forEach((e) => {
  (ce[`${e}#ltr`] = e), (ce[`${e}#rtl`] = e);
});
function Me(e, o) {
  const t = e.split(' ');
  return {
    vertical: t[0],
    horizontal: ce[`${t[1]}#${o === !0 ? 'rtl' : 'ltr'}`],
  };
}
function En(e, o) {
  let {
    top: t,
    left: n,
    right: l,
    bottom: r,
    width: i,
    height: d,
  } = e.getBoundingClientRect();
  return (
    o !== void 0 &&
      ((t -= o[1]),
      (n -= o[0]),
      (r += o[1]),
      (l += o[0]),
      (i += o[0]),
      (d += o[1])),
    {
      top: t,
      bottom: r,
      height: d,
      left: n,
      right: l,
      width: i,
      middle: n + (l - n) / 2,
      center: t + (r - t) / 2,
    }
  );
}
function Tn(e, o, t) {
  let { top: n, left: l } = e.getBoundingClientRect();
  return (
    (n += o.top),
    (l += o.left),
    t !== void 0 && ((n += t[1]), (l += t[0])),
    {
      top: n,
      bottom: n + 1,
      height: 1,
      left: l,
      right: l + 1,
      width: 1,
      middle: l,
      center: n,
    }
  );
}
function Pn(e, o) {
  return { top: 0, center: o / 2, bottom: o, left: 0, middle: e / 2, right: e };
}
function Re(e, o, t, n) {
  return {
    top: e[t.vertical] - o[n.vertical],
    left: e[t.horizontal] - o[n.horizontal],
  };
}
function lt(e, o = 0) {
  if (e.targetEl === null || e.anchorEl === null || o > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      lt(e, o + 1);
    }, 10);
    return;
  }
  const {
    targetEl: t,
    offset: n,
    anchorEl: l,
    anchorOrigin: r,
    selfOrigin: i,
    absoluteOffset: d,
    fit: c,
    cover: s,
    maxHeight: f,
    maxWidth: g,
  } = e;
  if (ve.is.ios === !0 && window.visualViewport !== void 0) {
    const E = document.body.style,
      { offsetLeft: q, offsetTop: _ } = window.visualViewport;
    q !== He && (E.setProperty('--q-pe-left', q + 'px'), (He = q)),
      _ !== $e && (E.setProperty('--q-pe-top', _ + 'px'), ($e = _));
  }
  const { scrollLeft: w, scrollTop: u } = t,
    h = d === void 0 ? En(l, s === !0 ? [0, 0] : n) : Tn(l, d, n);
  Object.assign(t.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: g || '100vw',
    maxHeight: f || '100vh',
    visibility: 'visible',
  });
  const { offsetWidth: P, offsetHeight: B } = t,
    { elWidth: k, elHeight: m } =
      c === !0 || s === !0
        ? {
            elWidth: Math.max(h.width, P),
            elHeight: s === !0 ? Math.max(h.height, B) : B,
          }
        : { elWidth: P, elHeight: B };
  let v = { maxWidth: g, maxHeight: f };
  (c === !0 || s === !0) &&
    ((v.minWidth = h.width + 'px'),
    s === !0 && (v.minHeight = h.height + 'px')),
    Object.assign(t.style, v);
  const a = Pn(k, m);
  let y = Re(h, a, r, i);
  if (d === void 0 || n === void 0) ue(y, h, a, r, i);
  else {
    const { top: E, left: q } = y;
    ue(y, h, a, r, i);
    let _ = !1;
    if (y.top !== E) {
      _ = !0;
      const H = 2 * n[1];
      (h.center = h.top -= H), (h.bottom -= H + 2);
    }
    if (y.left !== q) {
      _ = !0;
      const H = 2 * n[0];
      (h.middle = h.left -= H), (h.right -= H + 2);
    }
    _ === !0 && ((y = Re(h, a, r, i)), ue(y, h, a, r, i));
  }
  (v = { top: y.top + 'px', left: y.left + 'px' }),
    y.maxHeight !== void 0 &&
      ((v.maxHeight = y.maxHeight + 'px'),
      h.height > y.maxHeight && (v.minHeight = v.maxHeight)),
    y.maxWidth !== void 0 &&
      ((v.maxWidth = y.maxWidth + 'px'),
      h.width > y.maxWidth && (v.minWidth = v.maxWidth)),
    Object.assign(t.style, v),
    t.scrollTop !== u && (t.scrollTop = u),
    t.scrollLeft !== w && (t.scrollLeft = w);
}
function ue(e, o, t, n, l) {
  const r = t.bottom,
    i = t.right,
    d = Z(),
    c = window.innerHeight - d,
    s = document.body.clientWidth;
  if (e.top < 0 || e.top + r > c)
    if (l.vertical === 'center')
      (e.top = o[n.vertical] > c / 2 ? Math.max(0, c - r) : 0),
        (e.maxHeight = Math.min(r, c));
    else if (o[n.vertical] > c / 2) {
      const f = Math.min(
        c,
        n.vertical === 'center'
          ? o.center
          : n.vertical === l.vertical
          ? o.bottom
          : o.top
      );
      (e.maxHeight = Math.min(r, f)), (e.top = Math.max(0, f - r));
    } else
      (e.top = Math.max(
        0,
        n.vertical === 'center'
          ? o.center
          : n.vertical === l.vertical
          ? o.top
          : o.bottom
      )),
        (e.maxHeight = Math.min(r, c - e.top));
  if (e.left < 0 || e.left + i > s)
    if (((e.maxWidth = Math.min(i, s)), l.horizontal === 'middle'))
      e.left = o[n.horizontal] > s / 2 ? Math.max(0, s - i) : 0;
    else if (o[n.horizontal] > s / 2) {
      const f = Math.min(
        s,
        n.horizontal === 'middle'
          ? o.middle
          : n.horizontal === l.horizontal
          ? o.right
          : o.left
      );
      (e.maxWidth = Math.min(i, f)), (e.left = Math.max(0, f - e.maxWidth));
    } else
      (e.left = Math.max(
        0,
        n.horizontal === 'middle'
          ? o.middle
          : n.horizontal === l.horizontal
          ? o.left
          : o.right
      )),
        (e.maxWidth = Math.min(i, s - e.left));
}
var _n = $({
  name: 'QMenu',
  inheritAttrs: !1,
  props: {
    ...en,
    ...on,
    ...me,
    ...Je,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: { type: String, validator: ze },
    self: { type: String, validator: ze },
    offset: { type: Array, validator: kn },
    scrollTarget: et,
    touchPosition: Boolean,
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
  },
  emits: [...ln, 'click', 'escapeKey'],
  setup(e, { slots: o, emit: t, attrs: n }) {
    let l = null,
      r,
      i,
      d;
    const c = L(),
      { proxy: s } = c,
      { $q: f } = s,
      g = S(null),
      w = S(!1),
      u = p(() => e.persistent !== !0 && e.noRouteDismiss !== !0),
      h = ge(e, f),
      { registerTick: P, removeTick: B } = hn(),
      { registerTimeout: k } = mn(),
      { transitionProps: m, transitionStyle: v } = vn(e),
      {
        localScrollTarget: a,
        changeScrollEvent: y,
        unconfigureScrollTarget: E,
      } = nn(e, Se),
      { anchorEl: q, canShow: _ } = tn({ showing: w }),
      { hide: H } = an({
        showing: w,
        canShow: _,
        handleShow: ct,
        handleHide: dt,
        hideOnRouteChange: u,
        processOnMount: !0,
      }),
      {
        showPortal: be,
        hidePortal: ye,
        renderPortal: at,
      } = fn(c, g, vt, 'menu'),
      te = {
        anchorEl: q,
        innerRef: g,
        onClickOutside(b) {
          if (e.persistent !== !0 && w.value === !0)
            return (
              H(b),
              (b.type === 'touchstart' ||
                b.target.classList.contains('q-dialog__backdrop')) &&
                Ve(b),
              !0
            );
        },
      },
      we = p(() =>
        Me(
          e.anchor || (e.cover === !0 ? 'center middle' : 'bottom start'),
          f.lang.rtl
        )
      ),
      rt = p(() =>
        e.cover === !0 ? we.value : Me(e.self || 'top start', f.lang.rtl)
      ),
      ut = p(
        () =>
          (e.square === !0 ? ' q-menu--square' : '') +
          (h.value === !0 ? ' q-menu--dark q-dark' : '')
      ),
      st = p(() => (e.autoClose === !0 ? { onClick: ft } : {})),
      pe = p(() => w.value === !0 && e.persistent !== !0);
    T(pe, (b) => {
      b === !0 ? (Sn(oe), Bn(te)) : (_e(oe), Le(te));
    });
    function ne() {
      un(() => {
        let b = g.value;
        b &&
          b.contains(document.activeElement) !== !0 &&
          ((b =
            b.querySelector(
              '[autofocus][tabindex], [data-autofocus][tabindex]'
            ) ||
            b.querySelector(
              '[autofocus] [tabindex], [data-autofocus] [tabindex]'
            ) ||
            b.querySelector('[autofocus], [data-autofocus]') ||
            b),
          b.focus({ preventScroll: !0 }));
      });
    }
    function ct(b) {
      if (
        ((l = e.noRefocus === !1 ? document.activeElement : null),
        qn(qe),
        be(),
        Se(),
        (r = void 0),
        b !== void 0 && (e.touchPosition || e.contextMenu))
      ) {
        const le = St(b);
        if (le.left !== void 0) {
          const { top: ht, left: mt } = q.value.getBoundingClientRect();
          r = { left: le.left - mt, top: le.top - ht };
        }
      }
      i === void 0 &&
        (i = T(
          () =>
            f.screen.width +
            '|' +
            f.screen.height +
            '|' +
            e.self +
            '|' +
            e.anchor +
            '|' +
            f.lang.rtl,
          I
        )),
        e.noFocus !== !0 && document.activeElement.blur(),
        P(() => {
          I(), e.noFocus !== !0 && ne();
        }),
        k(() => {
          f.platform.is.ios === !0 && ((d = e.autoClose), g.value.click()),
            I(),
            be(!0),
            t('show', b);
        }, e.transitionDuration);
    }
    function dt(b) {
      B(),
        ye(),
        xe(!0),
        l !== null &&
          (b === void 0 || b.qClickOutside !== !0) &&
          ((
            (b && b.type.indexOf('key') === 0
              ? l.closest('[tabindex]:not([tabindex^="-"])')
              : void 0) || l
          ).focus(),
          (l = null)),
        k(() => {
          ye(!0), t('hide', b);
        }, e.transitionDuration);
    }
    function xe(b) {
      (r = void 0),
        i !== void 0 && (i(), (i = void 0)),
        (b === !0 || w.value === !0) && (Cn(qe), E(), Le(te), _e(oe)),
        b !== !0 && (l = null);
    }
    function Se() {
      (q.value !== null || e.scrollTarget !== void 0) &&
        ((a.value = tt(q.value, e.scrollTarget)), y(a.value, I));
    }
    function ft(b) {
      d !== !0 ? (sn(s, b), t('click', b)) : (d = !1);
    }
    function qe(b) {
      pe.value === !0 &&
        e.noFocus !== !0 &&
        It(g.value, b.target) !== !0 &&
        ne();
    }
    function oe(b) {
      t('escapeKey'), H(b);
    }
    function I() {
      lt({
        targetEl: g.value,
        offset: e.offset,
        anchorEl: q.value,
        anchorOrigin: we.value,
        selfOrigin: rt.value,
        absoluteOffset: r,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth,
      });
    }
    function vt() {
      return x(qt, m.value, () =>
        w.value === !0
          ? x(
              'div',
              {
                role: 'menu',
                ...n,
                ref: g,
                tabindex: -1,
                class: ['q-menu q-position-engine scroll' + ut.value, n.class],
                style: [n.style, v.value],
                ...st.value,
              },
              j(o.default)
            )
          : null
      );
    }
    return R(xe), Object.assign(s, { focus: ne, updatePosition: I }), at;
  },
});
let se,
  Y = 0;
const C = new Array(256);
for (let e = 0; e < 256; e++) C[e] = (e + 256).toString(16).substring(1);
const Ln = (() => {
    const e =
      typeof crypto != 'undefined'
        ? crypto
        : typeof window != 'undefined'
        ? window.crypto || window.msCrypto
        : void 0;
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes;
      if (e.getRandomValues !== void 0)
        return (o) => {
          const t = new Uint8Array(o);
          return e.getRandomValues(t), t;
        };
    }
    return (o) => {
      const t = [];
      for (let n = o; n > 0; n--) t.push(Math.floor(Math.random() * 256));
      return t;
    };
  })(),
  Ae = 4096;
function de() {
  (se === void 0 || Y + 16 > Ae) && ((Y = 0), (se = Ln(Ae)));
  const e = Array.prototype.slice.call(se, Y, (Y += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    C[e[0]] +
      C[e[1]] +
      C[e[2]] +
      C[e[3]] +
      '-' +
      C[e[4]] +
      C[e[5]] +
      '-' +
      C[e[6]] +
      C[e[7]] +
      '-' +
      C[e[8]] +
      C[e[9]] +
      '-' +
      C[e[10]] +
      C[e[11]] +
      C[e[12]] +
      C[e[13]] +
      C[e[14]] +
      C[e[15]]
  );
}
function Hn(e) {
  return e == null ? null : e;
}
function We(e, o) {
  return e == null ? (o === !0 ? `f_${de()}` : null) : e;
}
function $n({ getValue: e, required: o = !0 } = {}) {
  if (he.value === !0) {
    const t = e !== void 0 ? S(Hn(e())) : S(null);
    return (
      o === !0 &&
        t.value === null &&
        M(() => {
          t.value = `f_${de()}`;
        }),
      e !== void 0 &&
        T(e, (n) => {
          t.value = We(n, o);
        }),
      t
    );
  }
  return e !== void 0 ? p(() => We(e(), o)) : S(`f_${de()}`);
}
const zn = Object.keys(Ye);
function Mn(e) {
  return zn.reduce((o, t) => {
    const n = e[t];
    return n !== void 0 && (o[t] = n), o;
  }, {});
}
var Rn = $({
    name: 'QBtnDropdown',
    props: {
      ...Ye,
      ...Je,
      modelValue: Boolean,
      split: Boolean,
      dropdownIcon: String,
      contentClass: [Array, String, Object],
      contentStyle: [Array, String, Object],
      cover: Boolean,
      persistent: Boolean,
      noRouteDismiss: Boolean,
      autoClose: Boolean,
      menuAnchor: { type: String, default: 'bottom end' },
      menuSelf: { type: String, default: 'top end' },
      menuOffset: Array,
      disableMainBtn: Boolean,
      disableDropdown: Boolean,
      noIconAnimation: Boolean,
      toggleAriaLabel: String,
    },
    emits: [
      'update:modelValue',
      'click',
      'beforeShow',
      'show',
      'beforeHide',
      'hide',
    ],
    setup(e, { slots: o, emit: t }) {
      const { proxy: n } = L(),
        l = S(e.modelValue),
        r = S(null),
        i = $n(),
        d = p(() => {
          const a = {
            'aria-expanded': l.value === !0 ? 'true' : 'false',
            'aria-haspopup': 'true',
            'aria-controls': i.value,
            'aria-label':
              e.toggleAriaLabel ||
              n.$q.lang.label[l.value === !0 ? 'collapse' : 'expand'](e.label),
          };
          return (
            (e.disable === !0 ||
              (e.split === !1 && e.disableMainBtn === !0) ||
              e.disableDropdown === !0) &&
              (a['aria-disabled'] = 'true'),
            a
          );
        }),
        c = p(
          () =>
            'q-btn-dropdown__arrow' +
            (l.value === !0 && e.noIconAnimation === !1 ? ' rotate-180' : '') +
            (e.split === !1 ? ' q-btn-dropdown__arrow-container' : '')
        ),
        s = p(() => Kt(e)),
        f = p(() => Mn(e));
      T(
        () => e.modelValue,
        (a) => {
          r.value !== null && r.value[a ? 'show' : 'hide']();
        }
      ),
        T(() => e.split, v);
      function g(a) {
        (l.value = !0), t('beforeShow', a);
      }
      function w(a) {
        t('show', a), t('update:modelValue', !0);
      }
      function u(a) {
        (l.value = !1), t('beforeHide', a);
      }
      function h(a) {
        t('hide', a), t('update:modelValue', !1);
      }
      function P(a) {
        t('click', a);
      }
      function B(a) {
        Ct(a), v(), t('click', a);
      }
      function k(a) {
        r.value !== null && r.value.toggle(a);
      }
      function m(a) {
        r.value !== null && r.value.show(a);
      }
      function v(a) {
        r.value !== null && r.value.hide(a);
      }
      return (
        Object.assign(n, { show: m, hide: v, toggle: k }),
        M(() => {
          e.modelValue === !0 && m();
        }),
        () => {
          const a = [
            x(Oe, {
              class: c.value,
              name: e.dropdownIcon || n.$q.iconSet.arrow.dropdown,
            }),
          ];
          return (
            e.disableDropdown !== !0 &&
              a.push(
                x(
                  _n,
                  {
                    ref: r,
                    id: i.value,
                    class: e.contentClass,
                    style: e.contentStyle,
                    cover: e.cover,
                    fit: !0,
                    persistent: e.persistent,
                    noRouteDismiss: e.noRouteDismiss,
                    autoClose: e.autoClose,
                    anchor: e.menuAnchor,
                    self: e.menuSelf,
                    offset: e.menuOffset,
                    separateClosePopup: !0,
                    transitionShow: e.transitionShow,
                    transitionHide: e.transitionHide,
                    transitionDuration: e.transitionDuration,
                    onBeforeShow: g,
                    onShow: w,
                    onBeforeHide: u,
                    onHide: h,
                  },
                  o.default
                )
              ),
            e.split === !1
              ? x(
                  re,
                  {
                    class: 'q-btn-dropdown q-btn-dropdown--simple',
                    ...f.value,
                    ...d.value,
                    disable: e.disable === !0 || e.disableMainBtn === !0,
                    noWrap: !0,
                    round: !1,
                    onClick: P,
                  },
                  {
                    default: () => j(o.label, []).concat(a),
                    loading: o.loading,
                  }
                )
              : x(
                  Yt,
                  {
                    class:
                      'q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item',
                    rounded: e.rounded,
                    square: e.square,
                    ...s.value,
                    glossy: e.glossy,
                    stretch: e.stretch,
                  },
                  () => [
                    x(
                      re,
                      {
                        class: 'q-btn-dropdown--current',
                        ...f.value,
                        disable: e.disable === !0 || e.disableMainBtn === !0,
                        noWrap: !0,
                        round: !1,
                        onClick: B,
                      },
                      { default: o.label, loading: o.loading }
                    ),
                    x(
                      re,
                      {
                        class: 'q-btn-dropdown__arrow-container q-anchor--skip',
                        ...d.value,
                        ...s.value,
                        disable: e.disable === !0 || e.disableDropdown === !0,
                        rounded: e.rounded,
                        color: e.color,
                        textColor: e.textColor,
                        dense: e.dense,
                        size: e.size,
                        padding: e.padding,
                        ripple: e.ripple,
                      },
                      () => a
                    ),
                  ]
                )
          );
        }
      );
    },
  }),
  An = $({
    name: 'QPageContainer',
    setup(e, { slots: o }) {
      const {
          proxy: { $q: t },
        } = L(),
        n = Ke(Ue, ie);
      if (n === ie)
        return console.error('QPageContainer needs to be child of QLayout'), ie;
      Ne(Bt, !0);
      const l = p(() => {
        const r = {};
        return (
          n.header.space === !0 && (r.paddingTop = `${n.header.size}px`),
          n.right.space === !0 &&
            (r[
              `padding${t.lang.rtl === !0 ? 'Left' : 'Right'}`
            ] = `${n.right.size}px`),
          n.footer.space === !0 && (r.paddingBottom = `${n.footer.size}px`),
          n.left.space === !0 &&
            (r[
              `padding${t.lang.rtl === !0 ? 'Right' : 'Left'}`
            ] = `${n.left.size}px`),
          r
        );
      });
      return () =>
        x('div', { class: 'q-page-container', style: l.value }, j(o.default));
    },
  });
const { passive: De } = O,
  Wn = ['both', 'horizontal', 'vertical'];
var Dn = $({
  name: 'QScrollObserver',
  props: {
    axis: {
      type: String,
      validator: (e) => Wn.includes(e),
      default: 'vertical',
    },
    debounce: [String, Number],
    scrollTarget: et,
  },
  emits: ['scroll'],
  setup(e, { emit: o }) {
    const t = {
      position: { top: 0, left: 0 },
      direction: 'down',
      directionChanged: !1,
      delta: { top: 0, left: 0 },
      inflectionPoint: { top: 0, left: 0 },
    };
    let n = null,
      l,
      r;
    T(
      () => e.scrollTarget,
      () => {
        c(), d();
      }
    );
    function i() {
      n !== null && n();
      const g = Math.max(0, bn(l)),
        w = yn(l),
        u = { top: g - t.position.top, left: w - t.position.left };
      if (
        (e.axis === 'vertical' && u.top === 0) ||
        (e.axis === 'horizontal' && u.left === 0)
      )
        return;
      const h =
        Math.abs(u.top) >= Math.abs(u.left)
          ? u.top < 0
            ? 'up'
            : 'down'
          : u.left < 0
          ? 'left'
          : 'right';
      (t.position = { top: g, left: w }),
        (t.directionChanged = t.direction !== h),
        (t.delta = u),
        t.directionChanged === !0 &&
          ((t.direction = h), (t.inflectionPoint = t.position)),
        o('scroll', { ...t });
    }
    function d() {
      (l = tt(r, e.scrollTarget)), l.addEventListener('scroll', s, De), s(!0);
    }
    function c() {
      l !== void 0 && (l.removeEventListener('scroll', s, De), (l = void 0));
    }
    function s(g) {
      if (g === !0 || e.debounce === 0 || e.debounce === '0') i();
      else if (n === null) {
        const [w, u] = e.debounce
          ? [setTimeout(i, e.debounce), clearTimeout]
          : [requestAnimationFrame(i), cancelAnimationFrame];
        n = () => {
          u(w), (n = null);
        };
      }
    }
    const { proxy: f } = L();
    return (
      T(() => f.$q.lang.rtl, i),
      M(() => {
        (r = f.$el.parentNode), d();
      }),
      R(() => {
        n !== null && n(), c();
      }),
      Object.assign(f, { trigger: s, getPosition: () => t }),
      Ge
    );
  },
});
function Fn() {
  const e = S(!he.value);
  return (
    e.value === !1 &&
      M(() => {
        e.value = !0;
      }),
    { isHydrated: e }
  );
}
const it = typeof ResizeObserver != 'undefined',
  Fe =
    it === !0
      ? {}
      : {
          style:
            'display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;',
          url: 'about:blank',
        };
var Qe = $({
    name: 'QResizeObserver',
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: ['resize'],
    setup(e, { emit: o }) {
      let t = null,
        n,
        l = { width: -1, height: -1 };
      function r(c) {
        c === !0 || e.debounce === 0 || e.debounce === '0'
          ? i()
          : t === null && (t = setTimeout(i, e.debounce));
      }
      function i() {
        if ((t !== null && (clearTimeout(t), (t = null)), n)) {
          const { offsetWidth: c, offsetHeight: s } = n;
          (c !== l.width || s !== l.height) &&
            ((l = { width: c, height: s }), o('resize', l));
        }
      }
      const { proxy: d } = L();
      if (((d.trigger = r), it === !0)) {
        let c;
        const s = (f) => {
          (n = d.$el.parentNode),
            n
              ? ((c = new ResizeObserver(r)), c.observe(n), i())
              : f !== !0 &&
                Q(() => {
                  s(!0);
                });
        };
        return (
          M(() => {
            s();
          }),
          R(() => {
            t !== null && clearTimeout(t),
              c !== void 0 &&
                (c.disconnect !== void 0
                  ? c.disconnect()
                  : n && c.unobserve(n));
          }),
          Ge
        );
      } else {
        let f = function () {
            t !== null && (clearTimeout(t), (t = null)),
              s !== void 0 &&
                (s.removeEventListener !== void 0 &&
                  s.removeEventListener('resize', r, O.passive),
                (s = void 0));
          },
          g = function () {
            f(),
              n &&
                n.contentDocument &&
                ((s = n.contentDocument.defaultView),
                s.addEventListener('resize', r, O.passive),
                i());
          };
        const { isHydrated: c } = Fn();
        let s;
        return (
          M(() => {
            Q(() => {
              (n = d.$el), n && g();
            });
          }),
          R(f),
          () => {
            if (c.value === !0)
              return x('object', {
                class: 'q--avoid-card-border',
                style: Fe.style,
                tabindex: -1,
                type: 'text/html',
                data: Fe.url,
                'aria-hidden': 'true',
                onLoad: g,
              });
          }
        );
      }
    },
  }),
  Qn = $({
    name: 'QLayout',
    props: {
      container: Boolean,
      view: {
        type: String,
        default: 'hhh lpr fff',
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(e, { slots: o, emit: t }) {
      const {
          proxy: { $q: n },
        } = L(),
        l = S(null),
        r = S(n.screen.height),
        i = S(e.container === !0 ? 0 : n.screen.width),
        d = S({ position: 0, direction: 'down', inflectionPoint: 0 }),
        c = S(0),
        s = S(he.value === !0 ? 0 : Z()),
        f = p(
          () =>
            'q-layout q-layout--' +
            (e.container === !0 ? 'containerized' : 'standard')
        ),
        g = p(() =>
          e.container === !1 ? { minHeight: n.screen.height + 'px' } : null
        ),
        w = p(() =>
          s.value !== 0
            ? { [n.lang.rtl === !0 ? 'left' : 'right']: `${s.value}px` }
            : null
        ),
        u = p(() =>
          s.value !== 0
            ? {
                [n.lang.rtl === !0 ? 'right' : 'left']: 0,
                [n.lang.rtl === !0 ? 'left' : 'right']: `-${s.value}px`,
                width: `calc(100% + ${s.value}px)`,
              }
            : null
        );
      function h(a) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const y = {
            position: a.position.top,
            direction: a.direction,
            directionChanged: a.directionChanged,
            inflectionPoint: a.inflectionPoint.top,
            delta: a.delta.top,
          };
          (d.value = y), e.onScroll !== void 0 && t('scroll', y);
        }
      }
      function P(a) {
        const { height: y, width: E } = a;
        let q = !1;
        r.value !== y &&
          ((q = !0),
          (r.value = y),
          e.onScrollHeight !== void 0 && t('scrollHeight', y),
          k()),
          i.value !== E && ((q = !0), (i.value = E)),
          q === !0 && e.onResize !== void 0 && t('resize', a);
      }
      function B({ height: a }) {
        c.value !== a && ((c.value = a), k());
      }
      function k() {
        if (e.container === !0) {
          const a = r.value > c.value ? Z() : 0;
          s.value !== a && (s.value = a);
        }
      }
      let m = null;
      const v = {
        instances: {},
        view: p(() => e.view),
        isContainer: p(() => e.container),
        rootRef: l,
        height: r,
        containerHeight: c,
        scrollbarWidth: s,
        totalWidth: p(() => i.value + s.value),
        rows: p(() => {
          const a = e.view.toLowerCase().split(' ');
          return {
            top: a[0].split(''),
            middle: a[1].split(''),
            bottom: a[2].split(''),
          };
        }),
        header: G({ size: 0, offset: 0, space: !1 }),
        right: G({ size: 300, offset: 0, space: !1 }),
        footer: G({ size: 0, offset: 0, space: !1 }),
        left: G({ size: 300, offset: 0, space: !1 }),
        scroll: d,
        animate() {
          m !== null
            ? clearTimeout(m)
            : document.body.classList.add('q-body--layout-animate'),
            (m = setTimeout(() => {
              (m = null),
                document.body.classList.remove('q-body--layout-animate');
            }, 155));
        },
        update(a, y, E) {
          v[a][y] = E;
        },
      };
      if ((Ne(Ue, v), Z() > 0)) {
        let E = function () {
            (a = null), y.classList.remove('hide-scrollbar');
          },
          q = function () {
            if (a === null) {
              if (y.scrollHeight > n.screen.height) return;
              y.classList.add('hide-scrollbar');
            } else clearTimeout(a);
            a = setTimeout(E, 300);
          },
          _ = function (H) {
            a !== null && H === 'remove' && (clearTimeout(a), E()),
              window[`${H}EventListener`]('resize', q);
          },
          a = null;
        const y = document.body;
        T(() => (e.container !== !0 ? 'add' : 'remove'), _),
          e.container !== !0 && _('add'),
          je(() => {
            _('remove');
          });
      }
      return () => {
        const a = Ft(o.default, [
            x(Dn, { onScroll: h }),
            x(Qe, { onResize: P }),
          ]),
          y = x(
            'div',
            {
              class: f.value,
              style: g.value,
              ref: e.container === !0 ? void 0 : l,
              tabindex: -1,
            },
            a
          );
        return e.container === !0
          ? x('div', { class: 'q-layout-container overflow-hidden', ref: l }, [
              x(Qe, { onResize: B }),
              x('div', { class: 'absolute-full', style: w.value }, [
                x('div', { class: 'scroll', style: u.value }, [y]),
              ]),
            ])
          : y;
      };
    },
  });
const On = Et({
  __name: 'MainLayout',
  setup(e) {
    const { locale: o } = Ut({ useScope: 'global' }),
      t = Ke('eventBus'),
      n = S(!1),
      l = [
        { value: 'en-US', label: 'English' },
        { value: 'zh-CN', label: '\u7B80\u4F53\u4E2D\u6587' },
        { value: 'zh-TW', label: '\u7E41\u9AD4\u4E2D\u6587' },
      ];
    return (
      t == null ||
        t.on('set-background-cover', (r) => {
          n.value = r;
        }),
      (r, i) => {
        const d = Tt('router-view');
        return (
          ke(),
          Pt(
            Qn,
            { view: 'hhh lpR fFf' },
            {
              default: A(() => [
                _t(
                  'div',
                  {
                    class: zt([
                      'main-header-wrapper row justify-end items-center full-width q-py-sm q-px-md',
                      { 'main-header-wrapper-hover': n.value },
                    ]),
                  },
                  [
                    z(
                      Rn,
                      {
                        'auto-close': '',
                        class: 'rounded-borders q-py-sm',
                        color: 'primary',
                        'content-class': 'rounded-borders',
                        flat: '',
                        icon: 'translate',
                      },
                      {
                        default: A(() => [
                          z(
                            Xt,
                            { class: 'bg-secondary-container' },
                            {
                              default: A(() => [
                                (ke(),
                                Lt(
                                  $t,
                                  null,
                                  Ht(l, (c) =>
                                    Mt(
                                      z(
                                        Gt,
                                        {
                                          key: c.value,
                                          clickable: '',
                                          onClick: (s) => (o.value = c.value),
                                        },
                                        {
                                          default: A(() => [
                                            z(
                                              Te,
                                              { avatar: '' },
                                              {
                                                default: A(() => [
                                                  z(
                                                    Oe,
                                                    {
                                                      name:
                                                        c.value === Rt(o)
                                                          ? 'check'
                                                          : '',
                                                      color:
                                                        'on-secondary-container',
                                                    },
                                                    null,
                                                    8,
                                                    ['name']
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                            z(
                                              Te,
                                              {
                                                class:
                                                  'text-on-secondary-container',
                                              },
                                              {
                                                default: A(() => [
                                                  At(Wt(c.label), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ['onClick']
                                      ),
                                      [[Nt]]
                                    )
                                  ),
                                  64
                                )),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ],
                  2
                ),
                z(An, null, { default: A(() => [z(d)]), _: 1 }),
              ]),
              _: 1,
            }
          )
        );
      }
    );
  },
});
var Gn = kt(On, [['__scopeId', 'data-v-6048aae9']]);
export { Gn as default };
