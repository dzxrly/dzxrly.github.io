import {
  k as Q,
  i as b,
  I as l,
  c as m,
  h as j,
  K as q,
  L as T,
  g as B,
  _ as F,
  d as L,
  r as y,
  J as M,
  w as S,
  o as H,
  O as K,
  Q as _,
  R as w,
  S as x,
  U as i,
  a1 as I,
  $ as R,
  j as $,
  E as z,
  a2 as A,
  a3 as O,
  a4 as D,
  a5 as E,
} from './index.7d66cf72.js';
import { h as N } from './render.7c7394e0.js';
import { u as V } from './use-quasar.2b2a48f2.js';
import { u as J } from './vue-i18n.runtime.8bf5658f.js';
var U = Q({
  name: 'QPage',
  props: { padding: Boolean, styleFn: Function },
  setup(n, { slots: h }) {
    const {
        proxy: { $q: c },
      } = B(),
      e = b(q, l);
    if (e === l)
      return console.error('QPage needs to be a deep child of QLayout'), l;
    if (b(T, l) === l)
      return console.error('QPage needs to be child of QPageContainer'), l;
    const u = m(() => {
        const a =
          (e.header.space === !0 ? e.header.size : 0) +
          (e.footer.space === !0 ? e.footer.size : 0);
        if (typeof n.styleFn == 'function') {
          const s =
            e.isContainer.value === !0
              ? e.containerHeight.value
              : c.screen.height;
          return n.styleFn(a, s);
        }
        return {
          minHeight:
            e.isContainer.value === !0
              ? e.containerHeight.value - a + 'px'
              : c.screen.height === 0
              ? a !== 0
                ? `calc(100vh - ${a}px)`
                : '100vh'
              : c.screen.height - a + 'px',
        };
      }),
      d = m(() => `q-page${n.padding === !0 ? ' q-layout-padding' : ''}`);
    return () => j('main', { class: d.value, style: u.value }, N(h.default));
  },
});
const W = (n) => (D('data-v-02b63a5b'), (n = n()), E(), n),
  G = W(() =>
    i(
      'div',
      {
        class:
          'home-card-modal-bar-wrapper row justify-center items-center full-width q-mb-md',
      },
      [i('div', { class: 'home-card-modal-bar' })],
      -1
    )
  ),
  X = { class: 'home-card-view col full-width row justify-center items-start' },
  Y = L({
    __name: 'IndexPage',
    setup(n) {
      const { t: h } = J(),
        c = V(),
        e = y(''),
        t = y(!1),
        u = y(k(0.05)),
        d = m(() => c.screen.lt.sm),
        a = m(() => h('homeTitle'));
      let s = null;
      const p = b('eventBus');
      M('isShiny', u);
      function k(o) {
        return Math.random() < o;
      }
      function f() {
        s && (clearInterval(s), (s = null));
      }
      function C() {
        e.value = '';
        let o = 0;
        s = setInterval(() => {
          o < a.value.length ? ((e.value += a.value.charAt(o)), o++) : f();
        }, 150);
      }
      return (
        S(
          () => a.value,
          () => {
            f(), C();
          }
        ),
        S(
          () => t.value,
          () => {
            p == null || p.emit('set-background-cover', t.value);
          }
        ),
        H(() => {
          f(), C(), console.log('Shiny:', u.value);
        }),
        (o, r) => {
          const P = K('router-view');
          return (
            _(),
            w(
              U,
              {
                class: 'home-page-wrapper column justify-center items-center',
                style: { 'min-height': '0' },
              },
              {
                default: x(() => [
                  i(
                    'div',
                    {
                      class: I([
                        { 'home-title-hover': t.value },
                        'home-title full-width row justify-center items-center q-py-xl',
                      ]),
                      onClick: r[0] || (r[0] = (v) => (t.value = !1)),
                    },
                    [
                      i(
                        'span',
                        {
                          class: I([
                            { 'text-body1': d.value, 'text-h5': !d.value },
                            'home-title-span text-on-background text-bold non-selectable',
                          ]),
                        },
                        R(e.value),
                        3
                      ),
                    ],
                    2
                  ),
                  i(
                    'div',
                    {
                      class: I([
                        {
                          'home-card-hover shadow-8': t.value,
                          'shadow-4': !t.value,
                        },
                        'home-card full-width bg-card-background text-on-surface q-pa-md column justify-start items-center',
                      ]),
                      onMouseenter: r[1] || (r[1] = (v) => (t.value = !0)),
                      onMouseleave: r[2] || (r[2] = (v) => (t.value = !1)),
                    },
                    [
                      G,
                      i('div', X, [
                        $(P, null, {
                          default: x(({ Component: v, route: g }) => [
                            $(
                              z,
                              {
                                duration: { enter: 300, leave: 300 },
                                'enter-active-class':
                                  g.path === '/'
                                    ? 'animated fadeInLeft'
                                    : 'animated fadeInRight',
                                'leave-active-class':
                                  g.path === '/'
                                    ? 'animated fadeOutRight'
                                    : 'animated fadeOutLeft',
                                mode: 'out-in',
                              },
                              {
                                default: x(() => [
                                  (_(),
                                  w(
                                    A,
                                    null,
                                    [(_(), w(O(v), { key: g.path }))],
                                    1024
                                  )),
                                ]),
                                _: 2,
                              },
                              1032,
                              ['enter-active-class', 'leave-active-class']
                            ),
                          ]),
                          _: 1,
                        }),
                      ]),
                    ],
                    34
                  ),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
var ne = F(Y, [['__scopeId', 'data-v-02b63a5b']]);
export { ne as default };
