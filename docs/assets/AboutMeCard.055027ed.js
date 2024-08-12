import { Q as K, o as O } from './open-url.3fcfd6c0.js';
import { Q as V } from './QIcon.f229e576.js';
import {
  c as h,
  k as X,
  r as i,
  G as Y,
  o as Z,
  h as c,
  E as J,
  w as ee,
  g as te,
  d as oe,
  i as ae,
  Q as g,
  R as b,
  S as B,
  U as o,
  X as v,
  Y as se,
  Z as m,
  a0 as d,
  V as I,
  W as z,
  F,
} from './index.59749b07.js';
import { l as ie, b as L, R as le, Q as re } from './QBtn.0729658b.js';
import { h as ne } from './render.7c7394e0.js';
import { u as T } from './use-timeout.c09d9e7a.js';
import { u as ue } from './use-quasar.36961f8a.js';
import { D as ce } from './DetailPageWrapper.67405a45.js';
import { u as ge } from './vue-i18n.runtime.48e42421.js';
const me = { ratio: [String, Number] };
function de(e, l) {
  return h(() => {
    const s = Number(e.ratio || (l !== void 0 ? l.value : void 0));
    return isNaN(s) !== !0 && s > 0 ? { paddingBottom: `${100 / s}%` } : null;
  });
}
const he = 1.7778;
var fe = X({
  name: 'QImg',
  props: {
    ...me,
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
  setup(e, { slots: l, emit: s }) {
    const p = i(e.initialRatio),
      _ = de(e, p),
      y = te(),
      { registerTimeout: r, removeTimeout: S } = T(),
      { registerTimeout: C, removeTimeout: a } = T(),
      x = h(() =>
        e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null
      ),
      Q = h(() =>
        e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: !0 } : null
      ),
      n = [i(null), i(x.value)],
      u = i(0),
      w = i(!1),
      k = i(!1),
      R = h(() => `q-img q-img--${e.noNativeMenu === !0 ? 'no-' : ''}menu`),
      E = h(() => ({ width: e.width, height: e.height })),
      A = h(
        () =>
          `q-img__image ${
            e.imgClass !== void 0 ? e.imgClass + ' ' : ''
          }q-img__image--with${
            e.noTransition === !0 ? 'out' : ''
          }-transition q-img__image--`
      ),
      $ = h(() => ({
        ...e.imgStyle,
        objectFit: e.fit,
        objectPosition: e.position,
      }));
    function U() {
      if ((a(), e.loadingShowDelay === 0)) {
        w.value = !0;
        return;
      }
      C(() => {
        w.value = !0;
      }, e.loadingShowDelay);
    }
    function j() {
      a(), (w.value = !1);
    }
    function W({ target: t }) {
      L(y) === !1 &&
        (S(),
        (p.value =
          t.naturalHeight === 0 ? 0.5 : t.naturalWidth / t.naturalHeight),
        P(t, 1));
    }
    function P(t, f) {
      f === 1e3 ||
        L(y) === !0 ||
        (t.complete === !0
          ? H(t)
          : r(() => {
              P(t, f + 1);
            }, 50));
    }
    function H(t) {
      L(y) !== !0 &&
        ((u.value = u.value ^ 1),
        (n[u.value].value = null),
        j(),
        t.getAttribute('__qerror') !== 'true' && (k.value = !1),
        s('load', t.currentSrc || t.src));
    }
    function M(t) {
      S(),
        j(),
        (k.value = !0),
        (n[u.value].value = Q.value),
        (n[u.value ^ 1].value = x.value),
        s('error', t);
    }
    function N(t) {
      const f = n[t].value,
        q = {
          key: 'img_' + t,
          class: A.value,
          style: $.value,
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
        u.value === t
          ? Object.assign(q, {
              class: q.class + 'current',
              onLoad: W,
              onError: M,
            })
          : (q.class += 'loaded'),
        c(
          'div',
          { class: 'q-img__container absolute-full', key: 'img' + t },
          c('img', q)
        )
      );
    }
    function G() {
      return w.value === !1
        ? c(
            'div',
            {
              key: 'content',
              class: 'q-img__content absolute-full q-anchor--skip',
            },
            ne(l[k.value === !0 ? 'error' : 'default'])
          )
        : c(
            'div',
            {
              key: 'loading',
              class: 'q-img__loading absolute-full flex flex-center',
            },
            l.loading !== void 0
              ? l.loading()
              : e.noSpinner === !0
              ? void 0
              : [c(ie, { color: e.spinnerColor, size: e.spinnerSize })]
          );
    }
    {
      let t = function () {
        ee(
          () =>
            e.src || e.srcset || e.sizes
              ? { src: e.src, srcset: e.srcset, sizes: e.sizes }
              : null,
          (f) => {
            S(),
              (k.value = !1),
              f === null ? (j(), (n[u.value ^ 1].value = x.value)) : U(),
              (n[u.value].value = f);
          },
          { immediate: !0 }
        );
      };
      Y.value === !0 ? Z(t) : t();
    }
    return () => {
      const t = [];
      return (
        _.value !== null && t.push(c('div', { key: 'filler', style: _.value })),
        n[0].value !== null && t.push(N(0)),
        n[1].value !== null && t.push(N(1)),
        t.push(c(J, { name: 'q-transition--fade' }, G)),
        c(
          'div',
          {
            key: 'main',
            class: R.value,
            style: E.value,
            role: 'img',
            'aria-label': e.alt,
          },
          t
        )
      );
    };
  },
});
const ve = [
    'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white',
    'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white',
    'https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white',
    'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',
    'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
    'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    'https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D',
    'https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black',
    'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white',
    'https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white',
    'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
    'https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white',
  ],
  ye = [
    {
      name: 'GitHub',
      url: 'https://github.com/dzxrly',
      iconName: 'fa-brands fa-github',
    },
    {
      name: 'Gmail',
      url: 'aegonhe993@gmail.com',
      iconName: 'fa-regular fa-paper-plane',
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/id/eggtargaryen/',
      iconName: 'fa-brands fa-steam',
    },
    {
      name: 'Nexusmods',
      url: 'https://next.nexusmods.com/profile/dzxrly/about-me',
      iconPath: 'publicAssets/nexusmods.svg',
    },
  ];
var D = { languageBadgeUrlList: ve, personalWebSiteList: ye };
const be = ['src'],
  pe = { class: 'text-body1 q-my-sm text-on-background' },
  _e = { class: 'text-body1 q-my-sm text-on-background' },
  Se = { class: 'text-body1 q-my-sm text-on-background' },
  Ce = { class: 'text-body1 q-my-sm text-on-background' },
  we = { class: 'text-body1 q-my-sm text-on-background' },
  ke = { class: 'text-body1 q-my-sm text-on-background' },
  qe = { class: 'text-body1 q-my-sm text-on-background' },
  xe = ['src'],
  je = { class: 'row justify-center items-center' },
  Be = { class: 'q-ml-sm' },
  Re = oe({
    __name: 'AboutMeCard',
    setup(e) {
      const l = ue(),
        { t: s } = ge(),
        p = i(D.languageBadgeUrlList),
        _ = i(D.personalWebSiteList),
        y = i(ae('isShiny') || !1),
        r = h(() => l.screen.lt.sm);
      return (S, C) => (
        g(),
        b(ce, null, {
          default: B(() => [
            o(
              'div',
              {
                class: v([
                  r.value ? 'column' : 'row',
                  'justify-center items-center full-width',
                ]),
              },
              [
                o(
                  'div',
                  {
                    class: v([
                      r.value ? 'col justify-center' : 'col-4 justify-end',
                      'row items-center',
                    ]),
                  },
                  [
                    se(
                      (g(),
                      b(
                        K,
                        {
                          class: 'cursor-pointer',
                          rounded: '',
                          size: '15rem',
                          onClick:
                            C[0] ||
                            (C[0] = (a) =>
                              m(O)(
                                'https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)'
                              )),
                        },
                        {
                          default: B(() => [
                            o(
                              'img',
                              {
                                src: y.value ? '/avatar.png' : '/avatar_s.png',
                                alt: 'avatar',
                              },
                              null,
                              8,
                              be
                            ),
                          ]),
                          _: 1,
                        }
                      )),
                      [[le]]
                    ),
                  ],
                  2
                ),
                o(
                  'div',
                  {
                    class: v([
                      r.value
                        ? 'col justify-center q-pt-xl'
                        : 'col-8 justify-start q-pl-xl',
                      'row items-center',
                    ]),
                  },
                  [
                    o(
                      'div',
                      {
                        class: v([
                          r.value ? 'items-center' : 'items-start',
                          'column justify-center full-width',
                        ]),
                      },
                      [
                        o('span', pe, d(m(s)('homePersonalInfoChip1')), 1),
                        o('span', _e, d(m(s)('homePersonalInfoChip2')), 1),
                        o('span', Se, d(m(s)('homePersonalInfoChip3')), 1),
                        o('span', Ce, d(m(s)('homePersonalInfoChip4')), 1),
                        o('span', we, d(m(s)('homePersonalInfoChip5')), 1),
                        o('span', ke, d(m(s)('homePersonalInfoChip6')), 1),
                        o('span', qe, d(m(s)('homePersonalInfoChip7')), 1),
                        o(
                          'div',
                          {
                            class: v([
                              r.value ? 'justify-center' : 'justify-start',
                              'row items-center wrap q-mt-md',
                            ]),
                          },
                          [
                            (g(!0),
                            I(
                              F,
                              null,
                              z(
                                p.value,
                                (a) => (
                                  g(),
                                  I('div', { key: a, class: 'q-mr-sm' }, [
                                    o(
                                      'img',
                                      { src: a, alt: 'language badge' },
                                      null,
                                      8,
                                      xe
                                    ),
                                  ])
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        o(
                          'div',
                          {
                            class: v([
                              r.value ? 'justify-center' : 'justify-start',
                              'row items-center wrap q-mt-md',
                            ]),
                          },
                          [
                            (g(!0),
                            I(
                              F,
                              null,
                              z(
                                _.value,
                                (a) => (
                                  g(),
                                  b(
                                    re,
                                    {
                                      key: a.name,
                                      href: a.url.includes('@')
                                        ? `mailto:${a.url}`
                                        : a.url,
                                      class: 'q-mr-sm q-mb-sm',
                                      color: 'primary',
                                      'no-caps': '',
                                      outline: '',
                                      size: 'md',
                                      target: '_blank',
                                      type: 'a',
                                    },
                                    {
                                      default: B(() => [
                                        o('div', je, [
                                          a.iconName
                                            ? (g(),
                                              b(
                                                V,
                                                {
                                                  key: 0,
                                                  name: a.iconName,
                                                  size: '1rem',
                                                },
                                                null,
                                                8,
                                                ['name']
                                              ))
                                            : (g(),
                                              b(
                                                fe,
                                                {
                                                  key: 1,
                                                  src: a.iconPath,
                                                  alt: 'web site icon',
                                                  'img-class':
                                                    'text-primary bg-transparent',
                                                  width: '1rem',
                                                },
                                                null,
                                                8,
                                                ['src']
                                              )),
                                          o('span', Be, d(a.name), 1),
                                        ]),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ['href']
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                      ],
                      2
                    ),
                  ],
                  2
                ),
              ],
              2
            ),
          ]),
          _: 1,
        })
      );
    },
  });
export { Re as default };
