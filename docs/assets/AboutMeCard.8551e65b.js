import { Q as C, o as _ } from './open-url.0f44ff3d.js';
import { R as x, Q as k } from './QBtn.3dd4b2fe.js';
import { u as j } from './use-quasar.7c54f452.js';
import { D as w } from './DetailPageWrapper.26b4a238.js';
import {
  d as q,
  r as n,
  i as B,
  c as P,
  Q as r,
  R as g,
  S as c,
  U as e,
  X as i,
  Y as F,
  Z as o,
  a0 as a,
  V as m,
  W as h,
  F as u,
} from './index.9c1a1e44.js';
import { u as I } from './vue-i18n.runtime.639bc85e.js';
import './QIcon.7f956443.js';
import './render.7c7394e0.js';
const D = [
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
  L = [
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
var p = { languageBadgeUrlList: D, personalWebSiteList: L };
const Q = ['src'],
  A = { class: 'text-body1 q-my-sm text-on-background' },
  U = { class: 'text-body1 q-my-sm text-on-background' },
  z = { class: 'text-body1 q-my-sm text-on-background' },
  E = { class: 'text-body1 q-my-sm text-on-background' },
  N = { class: 'text-body1 q-my-sm text-on-background' },
  R = { class: 'text-body1 q-my-sm text-on-background' },
  S = { class: 'text-body1 q-my-sm text-on-background' },
  W = ['src'],
  J = q({
    __name: 'AboutMeCard',
    setup($) {
      const b = j(),
        { t } = I(),
        f = n(p.languageBadgeUrlList),
        y = n(p.personalWebSiteList),
        v = n(B('isShiny') || !1),
        l = P(() => b.screen.lt.sm);
      return (G, d) => (
        r(),
        g(w, null, {
          default: c(() => [
            e(
              'div',
              {
                class: i([
                  l.value ? 'column' : 'row',
                  'justify-center items-center full-width',
                ]),
              },
              [
                e(
                  'div',
                  {
                    class: i([
                      l.value ? 'col justify-center' : 'col-4 justify-end',
                      'row items-center',
                    ]),
                  },
                  [
                    F(
                      (r(),
                      g(
                        C,
                        {
                          class: 'cursor-pointer',
                          rounded: '',
                          size: '15rem',
                          onClick:
                            d[0] ||
                            (d[0] = (s) =>
                              o(_)(
                                'https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)'
                              )),
                        },
                        {
                          default: c(() => [
                            e(
                              'img',
                              {
                                src: v.value ? '/avatar.png' : '/avatar_s.png',
                                alt: 'avatar',
                              },
                              null,
                              8,
                              Q
                            ),
                          ]),
                          _: 1,
                        }
                      )),
                      [[x]]
                    ),
                  ],
                  2
                ),
                e(
                  'div',
                  {
                    class: i([
                      l.value
                        ? 'col justify-center q-pt-xl'
                        : 'col-8 justify-start q-pl-xl',
                      'row items-center',
                    ]),
                  },
                  [
                    e(
                      'div',
                      {
                        class: i([
                          l.value ? 'items-center' : 'items-start',
                          'column justify-center full-width',
                        ]),
                      },
                      [
                        e('span', A, a(o(t)('homePersonalInfoChip1')), 1),
                        e('span', U, a(o(t)('homePersonalInfoChip2')), 1),
                        e('span', z, a(o(t)('homePersonalInfoChip3')), 1),
                        e('span', E, a(o(t)('homePersonalInfoChip4')), 1),
                        e('span', N, a(o(t)('homePersonalInfoChip5')), 1),
                        e('span', R, a(o(t)('homePersonalInfoChip6')), 1),
                        e('span', S, a(o(t)('homePersonalInfoChip7')), 1),
                        e(
                          'div',
                          {
                            class: i([
                              l.value ? 'justify-center' : 'justify-start',
                              'row items-center wrap q-mt-md',
                            ]),
                          },
                          [
                            (r(!0),
                            m(
                              u,
                              null,
                              h(
                                f.value,
                                (s) => (
                                  r(),
                                  m('div', { key: s, class: 'q-mr-sm' }, [
                                    e(
                                      'img',
                                      { src: s, alt: 'language badge' },
                                      null,
                                      8,
                                      W
                                    ),
                                  ])
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        e(
                          'div',
                          {
                            class: i([
                              l.value ? 'justify-center' : 'justify-start',
                              'row items-center wrap q-mt-md',
                            ]),
                          },
                          [
                            (r(!0),
                            m(
                              u,
                              null,
                              h(
                                y.value,
                                (s) => (
                                  r(),
                                  g(
                                    k,
                                    {
                                      key: s.name,
                                      href: s.url.includes('@')
                                        ? `mailto:${s.url}`
                                        : s.url,
                                      class: 'q-mr-sm q-mb-sm',
                                      color: 'primary',
                                      label: s.name,
                                      'no-caps': '',
                                      outline: '',
                                      size: 'md',
                                      target: '_blank',
                                      type: 'a',
                                    },
                                    null,
                                    8,
                                    ['href', 'label']
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
export { J as default };
