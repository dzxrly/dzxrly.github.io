import {
  d as N,
  a7 as K,
  a8 as R,
  r as o,
  c as r,
  Q as n,
  V as p,
  U as d,
  R as z,
  S as P,
  X as Y,
  a9 as A,
  a0 as T,
  Z as $,
  j as v,
  aa as j,
  ab as U,
  _ as q,
  i as D,
} from './index.59749b07.js';
import { Q as h, o as E } from './open-url.3fcfd6c0.js';
import { u as V } from './use-quasar.36961f8a.js';
import { u as H } from './vue-i18n.runtime.48e42421.js';
import './QIcon.f229e576.js';
import './render.7c7394e0.js';
const L = ['href'],
  X = {
    class:
      'secondary-btn column justify-center items-center full-width full-height wrap',
  },
  Z = ['src'],
  F = {
    key: 0,
    class:
      'secondary-btn-easter-egg column justify-center items-center full-width wrap',
  },
  G = ['src'],
  J = N({
    __name: 'CardButton',
    props: {
      routePath: { type: String, required: !0 },
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
    setup(l) {
      K((a) => ({
        '5379db0b': C.value,
        '3dd4b9bb': O.value,
        '51bde638': I.value,
        '41a7fe0e': y.value,
        '52938e82': m.value,
        '3bff0dd9': _.value,
      }));
      const { t: c } = H(),
        f = V(),
        e = l,
        u = R(),
        s = o(Boolean(e.secondaryAvatar && e.secondaryAvatar !== '')),
        y = o(s.value ? 'translateY(-100%)' : 'translateY(0)'),
        m = o(s.value ? 0 : 1),
        _ = o(s.value ? 'translateY(-50%)' : 'translateY(0)'),
        t = r(() => {
          var i, g, S, k, B, M;
          const a =
            f.screen.width *
              ((i = e.responsiveProps) == null ? void 0 : i.coefficientA) +
            ((g = e.responsiveProps) == null ? void 0 : g.coefficientB);
          return a > ((S = e.responsiveProps) == null ? void 0 : S.valueMax)
            ? (k = e.responsiveProps) == null
              ? void 0
              : k.valueMax
            : a < ((B = e.responsiveProps) == null ? void 0 : B.valueMin)
            ? (M = e.responsiveProps) == null
              ? void 0
              : M.valueMin
            : a;
        }),
        C = r(() => `${t.value}rem`),
        I = r(() => `${t.value * 0.01}rem`),
        b = r(() => `${t.value * 0.6}rem`),
        O = r(() => e.backgroundColor),
        w = r(() => e.textColor);
      function Q(a) {
        a.indexOf('https://') !== -1 || a.indexOf('http://') !== -1
          ? E(a)
          : u.push(a);
      }
      return (a, i) => (
        n(),
        p(
          'a',
          {
            class: 'custom-card-btn-wrapper rounded-borders',
            style: { display: 'block' },
            href: e.routePath,
            onClick: i[0] || (i[0] = U((g) => Q(e.routePath), ['prevent'])),
          },
          [
            d('div', X, [
              e.iconName
                ? (n(),
                  z(
                    h,
                    {
                      key: 1,
                      class: Y([
                        e.iconColorClass,
                        'custom-card-picture-in-btn',
                      ]),
                      icon: l.iconName,
                      size: b.value,
                      color: 'transparent',
                      rounded: '',
                    },
                    null,
                    8,
                    ['class', 'icon', 'size']
                  ))
                : (n(),
                  z(
                    h,
                    {
                      key: 0,
                      size: b.value,
                      class: 'custom-card-picture-in-btn',
                      rounded: '',
                    },
                    {
                      default: P(() => [
                        d(
                          'img',
                          { src: e.avatar, alt: 'card btn avatar' },
                          null,
                          8,
                          Z
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['size']
                  )),
              d(
                'span',
                {
                  style: A({ color: w.value }),
                  class: 'text-subtitle1 text-bold ellipsis',
                },
                T($(c)(e.titleKeyword)),
                5
              ),
            ]),
            s.value
              ? (n(),
                p('div', F, [
                  v(
                    h,
                    {
                      size: b.value,
                      class: 'custom-card-picture-in-btn',
                      rounded: '',
                    },
                    {
                      default: P(() => [
                        d(
                          'img',
                          { src: e.secondaryAvatar, alt: 'card btn avatar' },
                          null,
                          8,
                          G
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['size']
                  ),
                  l.secondaryTitleKeyword && l.secondaryTitleKeyword !== ''
                    ? (n(),
                      p(
                        'span',
                        {
                          key: 0,
                          style: A({ color: w.value }),
                          class: 'text-subtitle1 text-bold ellipsis',
                        },
                        T($(c)(e.secondaryTitleKeyword)),
                        5
                      ))
                    : j('', !0),
                ]))
              : j('', !0),
          ],
          8,
          L
        )
      );
    },
  });
var x = q(J, [['__scopeId', 'data-v-1b00134e']]);
const W = { class: 'main-card-wrapper full-width' },
  ee = N({
    __name: 'MainCard',
    setup(l) {
      K((t) => ({ '43002f2c': m.value, '58dfd5f0': _.value }));
      const c = V(),
        f = o(D('isShiny') || !1),
        e = o({
          coefficientA: 0.015,
          coefficientB: 0.021,
          valueMax: 12,
          valueMin: 9,
        }),
        u = o(3),
        s = r(() => {
          const t =
            c.screen.width * e.value.coefficientA + e.value.coefficientB;
          return t > e.value.valueMax
            ? e.value.valueMax
            : t < e.value.valueMin
            ? e.value.valueMin
            : t;
        }),
        y = r(() => (f.value ? '643s.gif' : '643.gif')),
        m = r(() => `${s.value}rem`),
        _ = r(() => {
          const t = Math.floor(c.screen.width / 16 / s.value);
          return t > u.value ? u.value : t;
        });
      return (t, C) => (
        n(),
        p('div', W, [
          v(
            x,
            {
              'icon-name': 'ads_click',
              'route-path': 'https://blog.eggtargaryen.com',
              'responsive-props': e.value,
              'background-color': '#eef4f8',
              'text-color': '#081e27',
              'title-keyword': 'blogBtnTitle',
            },
            null,
            8,
            ['responsive-props']
          ),
          v(
            x,
            {
              'icon-name': 'folder',
              'route-path': '/projects',
              'responsive-props': e.value,
              'background-color': '#eef4f8',
              'text-color': '#081e27',
              'title-keyword': 'homeBtnMyProjects',
            },
            null,
            8,
            ['responsive-props']
          ),
          v(
            x,
            {
              'icon-name': 'person',
              'route-path': '/about',
              'responsive-props': e.value,
              'secondary-avatar': y.value,
              'background-color': '#eef4f8',
              'text-color': '#081e27',
              'title-keyword': 'homeBtnPersonal',
            },
            null,
            8,
            ['responsive-props', 'secondary-avatar']
          ),
        ])
      );
    },
  });
var le = q(ee, [['__scopeId', 'data-v-12ba4168']]);
export { le as default };
