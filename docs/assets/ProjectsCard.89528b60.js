import { h as z, i as Q, j as R, k as I, Q as $ } from './QBtn.3dd4b2fe.js';
import {
  h as a,
  k as _,
  c as g,
  g as N,
  d as B,
  r as q,
  Q as l,
  R as p,
  S as m,
  j as i,
  U as o,
  a0 as c,
  V as b,
  aa as y,
  $ as C,
  Z as S,
  _ as P,
  F as T,
  W as L,
} from './index.9c1a1e44.js';
import { a as w } from './axios.6b484fa5.js';
import { b as A, h as k } from './render.7c7394e0.js';
import { Q as h } from './QIcon.7f956443.js';
import { u as D, a as H } from './use-dark.803c086b.js';
import { u as j } from './vue-i18n.runtime.639bc85e.js';
import { D as V } from './DetailPageWrapper.26b4a238.js';
import './use-quasar.7c54f452.js';
const M = [
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
var E = _({
  name: 'QSpinnerHourglass',
  props: z,
  setup(e) {
    const { cSize: r, classes: s } = Q(e);
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
        M
      );
  },
});
w.defaults.baseURL = 'https://api.github.com';
w.defaults.timeout = 30 * 1e3;
function F(
  e,
  r,
  s = {},
  t = {},
  n = {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-GitHub-Api-Version': '2022-11-28',
  }
) {
  const d = { url: e, method: r, headers: n, data: s, params: t };
  return new Promise((u, f) => {
    w(d)
      .then((v) => {
        v.status === 200 ? u(v.data) : f('Network Error');
      })
      .catch(() => {
        f('Network Error');
      });
  });
}
var G = {
  githubRepoList(e) {
    return F(`/users/${e}/repos`, 'GET');
  },
};
const U = ['top', 'middle', 'bottom'];
var x = _({
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
      align: { type: String, validator: (e) => U.includes(e) },
    },
    setup(e, { slots: r }) {
      const s = g(() =>
          e.align !== void 0 ? { verticalAlign: e.align } : null
        ),
        t = g(() => {
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
  O = _({
    name: 'QCardSection',
    props: { tag: { type: String, default: 'div' }, horizontal: Boolean },
    setup(e, { slots: r }) {
      const s = g(
        () =>
          `q-card__section q-card__section--${
            e.horizontal === !0 ? 'horiz row no-wrap' : 'vert'
          }`
      );
      return () => a(e.tag, { class: s.value }, k(r.default));
    },
  }),
  W = _({
    name: 'QCardActions',
    props: { ...R, vertical: Boolean },
    setup(e, { slots: r }) {
      const s = I(e),
        t = g(
          () =>
            `q-card__actions ${s.value} q-card__actions--${
              e.vertical === !0 ? 'vert column' : 'horiz row'
            }`
        );
      return () => a('div', { class: t.value }, k(r.default));
    },
  }),
  X = _({
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
        n = g(
          () =>
            'q-card' +
            (t.value === !0 ? ' q-card--dark q-dark' : '') +
            (e.bordered === !0 ? ' q-card--bordered' : '') +
            (e.square === !0 ? ' q-card--square no-border-radius' : '') +
            (e.flat === !0 ? ' q-card--flat no-shadow' : '')
        );
      return () => a(e.tag, { class: n.value }, k(r.default));
    },
  });
const Y = { class: 'text-h5 text-primary q-mr-xs' },
  Z = { class: 'row justify-start items-center full-width' },
  J = { key: 0, class: 'row justify-center items-center q-mt-md q-mr-md' },
  K = { class: 'row justify-center items-center q-mt-md q-mr-md' },
  ee = { class: 'row justify-center items-center q-mt-md' },
  te = {
    class: 'text-body1 q-my-md',
    style: { 'max-lines': '2 !important', 'text-overflow': 'ellipsis' },
  },
  ae = { class: 'row justify-start items-center' },
  re = { class: 'q-ml-xs' },
  se = B({
    __name: 'ProjectInfo',
    props: { githubRepoInfo: { type: Object, required: !0 } },
    setup(e) {
      const r = e,
        { t: s } = j(),
        t = q(r.githubRepoInfo);
      return (n, d) => (
        l(),
        p(
          X,
          { class: 'repo-card-wrapper q-ma-sm rounded-borders column' },
          {
            default: m(() => [
              i(
                O,
                { class: 'non-selectable col-grow' },
                {
                  default: m(() => [
                    o('span', Y, c(t.value.name), 1),
                    o('div', Z, [
                      t.value.archived
                        ? (l(),
                          b('div', J, [
                            t.value.archived
                              ? (l(),
                                p(x, {
                                  key: 0,
                                  label: 'Archived',
                                  color: 'secondary',
                                  outline: '',
                                }))
                              : y('', !0),
                          ]))
                        : y('', !0),
                      o('div', K, [
                        i(h, {
                          class: 'q-mr-xs',
                          name: 'star',
                          color: 'yellow-7',
                          size: '1rem',
                        }),
                        o('span', null, c(t.value.stargazers_count), 1),
                      ]),
                      o('div', ee, [
                        i(h, {
                          class: 'q-mr-xs',
                          name: 'fork_right',
                          color: 'deep-orange-5',
                          size: '1rem',
                        }),
                        o('span', null, c(t.value.forks_count), 1),
                      ]),
                    ]),
                    o('p', te, c(t.value.description), 1),
                    o('div', ae, [
                      t.value.language
                        ? (l(),
                          p(
                            x,
                            { key: 0, color: 'primary', outline: '' },
                            {
                              default: m(() => [
                                i(h, { name: 'language', class: 'q-mr-xs' }),
                                C(' ' + c(t.value.language), 1),
                              ]),
                              _: 1,
                            }
                          ))
                        : y('', !0),
                      t.value.license
                        ? (l(),
                          p(
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
                                i(h, {
                                  name: 'workspace_premium',
                                  class: 'q-mr-xs',
                                }),
                                C(' ' + c(t.value.license.key), 1),
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
              i(
                W,
                { align: 'center' },
                {
                  default: m(() => [
                    i(
                      $,
                      {
                        class: 'rounded-borders full-width',
                        flat: '',
                        color: 'primary',
                        href: t.value.html_url,
                        target: '_blank',
                        'no-caps': '',
                      },
                      {
                        default: m(() => [
                          i(h, { name: 'open_in_new' }),
                          o('span', re, c(S(s)('projectRepoOpenButton')), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      ['href']
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
var oe = P(se, [['__scopeId', 'data-v-741737e0']]);
const le = {
    key: 0,
    class: 'column justify-center items-center full-width q-py-xl',
  },
  ne = { class: 'text-subtitle1 text-bold text-primary' },
  ie = { key: 1, class: 'row justify-center items-stretch full-width wrap' },
  ve = B({
    __name: 'ProjectsCard',
    setup(e) {
      const { t: r } = j(),
        s = q([]),
        t = q(!1);
      function n() {
        (t.value = !0),
          G.githubRepoList('dzxrly')
            .then((d) => {
              (s.value = d
                .filter(
                  (u) =>
                    !u.fork &&
                    u.name !== 'dzxrly' &&
                    u.name !== 'dzxrly.github.io'
                )
                .sort(
                  (u, f) =>
                    new Date(f.created_at).getTime() -
                    new Date(u.created_at).getTime()
                )),
                (t.value = !1);
            })
            .catch((d) => {
              console.error(d), (t.value = !1);
            });
      }
      return (
        n(),
        (d, u) => (
          l(),
          p(V, null, {
            default: m(() => [
              t.value
                ? (l(),
                  b('div', le, [
                    i(E, { size: '5vw', color: 'primary' }),
                    o('span', ne, c(S(r)('projectRepoListLoading')), 1),
                  ]))
                : (l(),
                  b('div', ie, [
                    (l(!0),
                    b(
                      T,
                      null,
                      L(
                        s.value,
                        (f, v) => (
                          l(),
                          p(
                            oe,
                            {
                              class:
                                'col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4',
                              key: v,
                              githubRepoInfo: f,
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
export { ve as default };
