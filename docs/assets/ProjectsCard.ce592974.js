import { h as R, i as z, j as Q, k as $, Q as I } from './QBtn.497a1d04.js';
import {
  h as a,
  k as v,
  c as h,
  g as N,
  d as S,
  r as q,
  Q as l,
  R as f,
  S as m,
  j as c,
  U as o,
  $ as d,
  V as b,
  aa as y,
  Z as B,
  Y as w,
  _ as P,
  F as T,
  W as L,
} from './index.7d66cf72.js';
import { a as k } from './axios.6b484fa5.js';
import { b as A, h as C } from './render.7c7394e0.js';
import { Q as g } from './QIcon.78c64fff.js';
import { u as D, a as H } from './use-dark.4a8fa5ae.js';
import { o as M, D as V } from './DetailPageWrapper.30e2b495.js';
import { u as j } from './vue-i18n.runtime.8bf5658f.js';
import './use-quasar.2b2a48f2.js';
const E = [
  a('g', [
    a('path', {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '5',
      'stroke-miterlimit': '10',
      d: 'M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z',
    }),
    a('clipPath', { id: 'uil-hourglass-clip1' }, [
      a('rect', { x: '15', y: '20', width: '70', height: '25' }, [
        a('animate', {
          attributeName: 'height',
          from: '25',
          to: '0',
          dur: '1s',
          repeatCount: 'indefinite',
          values: '25;0;0',
          keyTimes: '0;0.5;1',
        }),
        a('animate', {
          attributeName: 'y',
          from: '20',
          to: '45',
          dur: '1s',
          repeatCount: 'indefinite',
          values: '20;45;45',
          keyTimes: '0;0.5;1',
        }),
      ]),
    ]),
    a('clipPath', { id: 'uil-hourglass-clip2' }, [
      a('rect', { x: '15', y: '55', width: '70', height: '25' }, [
        a('animate', {
          attributeName: 'height',
          from: '0',
          to: '25',
          dur: '1s',
          repeatCount: 'indefinite',
          values: '0;25;25',
          keyTimes: '0;0.5;1',
        }),
        a('animate', {
          attributeName: 'y',
          from: '80',
          to: '55',
          dur: '1s',
          repeatCount: 'indefinite',
          values: '80;55;55',
          keyTimes: '0;0.5;1',
        }),
      ]),
    ]),
    a('path', {
      d: 'M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z',
      'clip-path': 'url(#uil-hourglass-clip1)',
      fill: 'currentColor',
    }),
    a('path', {
      d: 'M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z',
      'clip-path': 'url(#uil-hourglass-clip2)',
      fill: 'currentColor',
    }),
    a('animateTransform', {
      attributeName: 'transform',
      type: 'rotate',
      from: '0 50 50',
      to: '180 50 50',
      repeatCount: 'indefinite',
      dur: '1s',
      values: '0 50 50;0 50 50;180 50 50',
      keyTimes: '0;0.7;1',
    }),
  ]),
];
var U = v({
  name: 'QSpinnerHourglass',
  props: R,
  setup(e) {
    const { cSize: r, classes: s } = z(e);
    return () =>
      a(
        'svg',
        {
          class: s.value,
          width: r.value,
          height: r.value,
          viewBox: '0 0 100 100',
          preserveAspectRatio: 'xMidYMid',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        E
      );
  },
});
k.defaults.baseURL = 'https://api.github.com';
k.defaults.timeout = 30 * 1e3;
function F(
  e,
  r,
  s = {},
  t = {},
  n = { 'Content-Type': 'application/json;charset=UTF-8' }
) {
  const i = { url: e, method: r, headers: n, data: s, params: t };
  return new Promise((u, p) => {
    k(i)
      .then((_) => {
        _.status === 200 ? u(_.data) : p('Network Error');
      })
      .catch(() => {
        p('Network Error');
      });
  });
}
var G = {
  githubRepoList(e) {
    return F(`/users/${e}/repos`, 'GET');
  },
};
const O = ['top', 'middle', 'bottom'];
var x = v({
    name: 'QBadge',
    props: {
      color: String,
      textColor: String,
      floating: Boolean,
      transparent: Boolean,
      multiLine: Boolean,
      outline: Boolean,
      rounded: Boolean,
      label: [Number, String],
      align: { type: String, validator: (e) => O.includes(e) },
    },
    setup(e, { slots: r }) {
      const s = h(() =>
          e.align !== void 0 ? { verticalAlign: e.align } : null
        ),
        t = h(() => {
          const n = (e.outline === !0 && e.color) || e.textColor;
          return (
            `q-badge flex inline items-center no-wrap q-badge--${
              e.multiLine === !0 ? 'multi' : 'single'
            }-line` +
            (e.outline === !0
              ? ' q-badge--outline'
              : e.color !== void 0
              ? ` bg-${e.color}`
              : '') +
            (n !== void 0 ? ` text-${n}` : '') +
            (e.floating === !0 ? ' q-badge--floating' : '') +
            (e.rounded === !0 ? ' q-badge--rounded' : '') +
            (e.transparent === !0 ? ' q-badge--transparent' : '')
          );
        });
      return () =>
        a(
          'div',
          {
            class: t.value,
            style: s.value,
            role: 'status',
            'aria-label': e.label,
          },
          A(r.default, e.label !== void 0 ? [e.label] : [])
        );
    },
  }),
  W = v({
    name: 'QCardSection',
    props: { tag: { type: String, default: 'div' }, horizontal: Boolean },
    setup(e, { slots: r }) {
      const s = h(
        () =>
          `q-card__section q-card__section--${
            e.horizontal === !0 ? 'horiz row no-wrap' : 'vert'
          }`
      );
      return () => a(e.tag, { class: s.value }, C(r.default));
    },
  }),
  Y = v({
    name: 'QCardActions',
    props: { ...Q, vertical: Boolean },
    setup(e, { slots: r }) {
      const s = $(e),
        t = h(
          () =>
            `q-card__actions ${s.value} q-card__actions--${
              e.vertical === !0 ? 'vert column' : 'horiz row'
            }`
        );
      return () => a('div', { class: t.value }, C(r.default));
    },
  }),
  Z = v({
    name: 'QCard',
    props: {
      ...D,
      tag: { type: String, default: 'div' },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean,
    },
    setup(e, { slots: r }) {
      const {
          proxy: { $q: s },
        } = N(),
        t = H(e, s),
        n = h(
          () =>
            'q-card' +
            (t.value === !0 ? ' q-card--dark q-dark' : '') +
            (e.bordered === !0 ? ' q-card--bordered' : '') +
            (e.square === !0 ? ' q-card--square no-border-radius' : '') +
            (e.flat === !0 ? ' q-card--flat no-shadow' : '')
        );
      return () => a(e.tag, { class: n.value }, C(r.default));
    },
  });
const J = { class: 'text-h5 text-primary q-mr-xs' },
  K = { class: 'row justify-start items-center full-width' },
  X = { key: 0, class: 'row justify-center items-center q-mt-md q-mr-md' },
  ee = { class: 'row justify-center items-center q-mt-md q-mr-md' },
  te = { class: 'row justify-center items-center q-mt-md' },
  ae = {
    class: 'text-body1 q-my-md',
    style: { 'max-lines': '2 !important', 'text-overflow': 'ellipsis' },
  },
  re = { class: 'row justify-start items-center' },
  se = { class: 'q-ml-xs' },
  oe = S({
    __name: 'ProjectInfo',
    props: { githubRepoInfo: { type: Object, required: !0 } },
    setup(e) {
      const r = e,
        { t: s } = j(),
        t = q(r.githubRepoInfo);
      return (n, i) => (
        l(),
        f(
          Z,
          { class: 'repo-card-wrapper q-ma-sm rounded-borders column' },
          {
            default: m(() => [
              c(
                W,
                { class: 'non-selectable col-grow' },
                {
                  default: m(() => [
                    o('span', J, d(t.value.name), 1),
                    o('div', K, [
                      t.value.archived
                        ? (l(),
                          b('div', X, [
                            t.value.archived
                              ? (l(),
                                f(x, {
                                  key: 0,
                                  label: 'Archived',
                                  color: 'secondary',
                                  outline: '',
                                }))
                              : y('', !0),
                          ]))
                        : y('', !0),
                      o('div', ee, [
                        c(g, {
                          class: 'q-mr-xs',
                          name: 'star',
                          color: 'yellow-7',
                          size: '1rem',
                        }),
                        o('span', null, d(t.value.stargazers_count), 1),
                      ]),
                      o('div', te, [
                        c(g, {
                          class: 'q-mr-xs',
                          name: 'fork_right',
                          color: 'deep-orange-5',
                          size: '1rem',
                        }),
                        o('span', null, d(t.value.forks_count), 1),
                      ]),
                    ]),
                    o('p', ae, d(t.value.description), 1),
                    o('div', re, [
                      t.value.language
                        ? (l(),
                          f(
                            x,
                            { key: 0, color: 'primary', outline: '' },
                            {
                              default: m(() => [
                                c(g, { name: 'language', class: 'q-mr-xs' }),
                                B(' ' + d(t.value.language), 1),
                              ]),
                              _: 1,
                            }
                          ))
                        : y('', !0),
                      t.value.license
                        ? (l(),
                          f(
                            x,
                            {
                              key: 1,
                              class: 'q-ml-sm',
                              style: { 'text-transform': 'uppercase' },
                              color: 'primary',
                              outline: '',
                            },
                            {
                              default: m(() => [
                                c(g, {
                                  name: 'workspace_premium',
                                  class: 'q-mr-xs',
                                }),
                                B(' ' + d(t.value.license.key), 1),
                              ]),
                              _: 1,
                            }
                          ))
                        : y('', !0),
                    ]),
                  ]),
                  _: 1,
                }
              ),
              c(
                Y,
                { align: 'center' },
                {
                  default: m(() => [
                    c(
                      I,
                      {
                        class: 'rounded-borders full-width',
                        flat: '',
                        color: 'primary',
                        onClick: i[0] || (i[0] = (u) => w(M)(t.value.html_url)),
                        'no-caps': '',
                      },
                      {
                        default: m(() => [
                          c(g, { name: 'open_in_new' }),
                          o('span', se, d(w(s)('projectRepoOpenButton')), 1),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  });
var le = P(oe, [['__scopeId', 'data-v-93aa3a58']]);
const ne = {
    key: 0,
    class: 'column justify-center items-center full-width q-py-xl',
  },
  ie = { class: 'text-subtitle1 text-bold text-primary' },
  ue = { key: 1, class: 'row justify-center items-stretch full-width wrap' },
  ye = S({
    __name: 'ProjectsCard',
    setup(e) {
      const { t: r } = j(),
        s = q([]),
        t = q(!1);
      function n() {
        (t.value = !0),
          G.githubRepoList('dzxrly')
            .then((i) => {
              (s.value = i
                .filter(
                  (u) =>
                    !u.fork &&
                    u.name !== 'dzxrly' &&
                    u.name !== 'dzxrly.github.io'
                )
                .sort(
                  (u, p) =>
                    new Date(p.created_at).getTime() -
                    new Date(u.created_at).getTime()
                )),
                (t.value = !1);
            })
            .catch((i) => {
              console.error(i), (t.value = !1);
            });
      }
      return (
        n(),
        (i, u) => (
          l(),
          f(V, null, {
            default: m(() => [
              t.value
                ? (l(),
                  b('div', ne, [
                    c(U, { size: '5vw', color: 'primary' }),
                    o('span', ie, d(w(r)('projectRepoListLoading')), 1),
                  ]))
                : (l(),
                  b('div', ue, [
                    (l(!0),
                    b(
                      T,
                      null,
                      L(
                        s.value,
                        (p, _) => (
                          l(),
                          f(
                            le,
                            {
                              class:
                                'col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4',
                              key: _,
                              githubRepoInfo: p,
                            },
                            null,
                            8,
                            ['githubRepoInfo']
                          )
                        )
                      ),
                      128
                    )),
                  ])),
            ]),
            _: 1,
          })
        )
      );
    },
  });
export { ye as default };
