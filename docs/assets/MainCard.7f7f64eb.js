import { Q as f } from './QAvatar.716719f8.js';
import {
  d as M,
  a7 as Y,
  a8 as Q,
  r,
  c as t,
  Q as a,
  V as u,
  U as l,
  R as S,
  S as k,
  a1 as I,
  a9 as w,
  $ as B,
  Y as z,
  j as y,
  aa as P,
  _ as R,
  i as O,
} from './index.7d66cf72.js';
import { u as D } from './use-quasar.2b2a48f2.js';
import { u as E } from './vue-i18n.runtime.8bf5658f.js';
import './QIcon.78c64fff.js';
import './render.7c7394e0.js';
const H = {
    class:
      'secondary-btn column justify-center items-center full-width full-height wrap',
  },
  U = ['src'],
  F = {
    key: 0,
    class:
      'secondary-btn-easter-egg column justify-center items-center full-width wrap',
  },
  G = ['src'],
  J = M({
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
    setup(s) {
      Y((n) => ({
        '555a9a6c': K.value,
        '16ac7d1c': q.value,
        '7e806b92': N.value,
        '8ff8774c': j.value,
        e1a5f8fe: T.value,
        '33f2f0d0': $.value,
      }));
      const { t: c } = E(),
        i = D(),
        e = s,
        m = Q(),
        o = r(Boolean(e.secondaryAvatar && e.secondaryAvatar !== '')),
        j = r(o.value ? 'translateY(-100%)' : 'translateY(0)'),
        T = r(o.value ? 0 : 1),
        $ = r(o.value ? 'translateY(-50%)' : 'translateY(0)'),
        d = t(() => {
          var v, g, b, h, x, C;
          const n =
            i.screen.width *
              ((v = e.responsiveProps) == null ? void 0 : v.coefficientA) +
            ((g = e.responsiveProps) == null ? void 0 : g.coefficientB);
          return n > ((b = e.responsiveProps) == null ? void 0 : b.valueMax)
            ? (h = e.responsiveProps) == null
              ? void 0
              : h.valueMax
            : n < ((x = e.responsiveProps) == null ? void 0 : x.valueMin)
            ? (C = e.responsiveProps) == null
              ? void 0
              : C.valueMin
            : n;
        }),
        K = t(() => `${d.value}rem`),
        N = t(() => `${d.value * 0.01}rem`),
        p = t(() => `${d.value * 0.6}rem`),
        q = t(() => e.backgroundColor),
        _ = t(() => e.textColor);
      function V() {
        m.push(e.routePath);
      }
      return (n, v) => (
        a(),
        u(
          'div',
          { class: 'custom-card-btn q-ma-md rounded-borders', onClick: V },
          [
            l('div', H, [
              e.iconName
                ? (a(),
                  S(
                    f,
                    {
                      key: 1,
                      class: I([
                        e.iconColorClass,
                        'custom-card-picture-in-btn',
                      ]),
                      icon: s.iconName,
                      size: p.value,
                      color: 'transparent',
                      rounded: '',
                    },
                    null,
                    8,
                    ['class', 'icon', 'size']
                  ))
                : (a(),
                  S(
                    f,
                    {
                      key: 0,
                      size: p.value,
                      class: 'custom-card-picture-in-btn',
                      rounded: '',
                    },
                    {
                      default: k(() => [
                        l(
                          'img',
                          { src: e.avatar, alt: 'card btn avatar' },
                          null,
                          8,
                          U
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['size']
                  )),
              l(
                'span',
                {
                  style: w({ color: _.value }),
                  class: 'text-subtitle1 text-bold ellipsis',
                },
                B(z(c)(e.titleKeyword)),
                5
              ),
            ]),
            o.value
              ? (a(),
                u('div', F, [
                  y(
                    f,
                    {
                      size: p.value,
                      class: 'custom-card-picture-in-btn',
                      rounded: '',
                    },
                    {
                      default: k(() => [
                        l(
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
                  s.secondaryTitleKeyword && s.secondaryTitleKeyword !== ''
                    ? (a(),
                      u(
                        'span',
                        {
                          key: 0,
                          style: w({ color: _.value }),
                          class: 'text-subtitle1 text-bold ellipsis',
                        },
                        B(z(c)(e.secondaryTitleKeyword)),
                        5
                      ))
                    : P('', !0),
                ]))
              : P('', !0),
          ]
        )
      );
    },
  });
var A = R(J, [['__scopeId', 'data-v-75b137d6']]);
const L = { class: 'main-card-wrapper' },
  re = M({
    __name: 'MainCard',
    setup(s) {
      const c = r(O('isShiny') || !1),
        i = r({
          coefficientA: 0.015,
          coefficientB: 0.021,
          valueMax: 12,
          valueMin: 5,
        }),
        e = t(() => (c.value ? '643s.gif' : '643.gif'));
      return (m, o) => (
        a(),
        u('div', L, [
          y(
            A,
            {
              'icon-name': 'folder',
              'route-path': '/projects',
              'responsive-props': i.value,
              'background-color': '#eef4f8',
              'text-color': '#081e27',
              'title-keyword': 'homeBtnMyProjects',
            },
            null,
            8,
            ['responsive-props']
          ),
          y(
            A,
            {
              'icon-name': 'person',
              'route-path': '/about',
              'responsive-props': i.value,
              'secondary-avatar': e.value,
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
export { re as default };
