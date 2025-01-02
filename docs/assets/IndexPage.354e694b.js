import {
  k as P,
  i as C,
  I as l,
  c as m,
  h as Q,
  K as j,
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
  X as I,
  a0 as R,
  j as $,
  E as z,
  a2 as A,
  a3 as O,
  a4 as D,
  a5 as E,
} from './index.9c1a1e44.js';
import { h as N } from './render.7c7394e0.js';
import { u as V } from './use-quasar.7c54f452.js';
import { u as J } from './vue-i18n.runtime.639bc85e.js';
var U = P({
  name: 'QPage',
  props: { padding: Boolean, styleFn: Function },
  setup(n, { slots: p }) {
    const {
        proxy: { $q: c },
      } = B(),
      e = C(j, l);
    if (e === l)
      return console.error('QPage needs to be a deep child of QLayout'), l;
    if (C(T, l) === l)
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
    return () => Q('main', { class: d.value, style: u.value }, N(p.default));
  },
});
const W = (n) => (D('data-v-2e88669d'), (n = n()), E(), n),
  X = W(() =>
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
  G = { class: 'home-card-view col full-width row justify-center items-start' },
  Y = L({
    __name: 'IndexPage',
    setup(n) {
      const { t: p } = J(),
        c = V(),
        e = y(''),
        t = y(!1),
        u = y(k(0.05)),
        d = m(() => c.screen.lt.sm),
        a = m(() => p('homeTitle'));
      let s = null;
      const h = C('eventBus');
      M('isShiny', u);
      function k(o) {
        return Math.random() < o;
      }
      function f() {
        s && (clearInterval(s), (s = null));
      }
      function b() {
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
            f(), b();
          }
        ),
        S(
          () => t.value,
          () => {
            h == null || h.emit('set-background-cover', t.value);
          }
        ),
        H(() => {
          f(), b(), console.log('Shiny:', u.value);
        }),
        (o, r) => {
          const q = K('router-view');
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
                        'home-card full-width bg-card-background text-on-surface q-pt-md q-pb-md column justify-start items-center',
                      ]),
                      onMouseenter: r[1] || (r[1] = (v) => (t.value = !0)),
                      onMouseleave: r[2] || (r[2] = (v) => (t.value = !1)),
                    },
                    [
                      X,
                      i('div', G, [
                        $(q, null, {
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
var ne = F(Y, [['__scopeId', 'data-v-2e88669d']]);
export { ne as default };
