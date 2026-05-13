import { Q as C, o as _ } from './open-url-DoUsCjqU.js';
import { Q as x } from './QBtn-D6zP4VzL.js';
import { R as k } from './Ripple-DkNmnZOt.js';
import { u as j } from './use-quasar-B9Viz2rg.js';
import { D as q } from './DetailPageWrapper-DJqYuun-.js';
import {
  I as w,
  J as B,
  r as n,
  B as P,
  b as F,
  L as g,
  M as r,
  N as c,
  O as e,
  Q as i,
  V as I,
  W as o,
  Y as a,
  R as m,
  S as h,
  U as u,
} from './index-B4Fegd2x.js';
import './render-C8JR9mId.js';
const L = [
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
  D = [
    { name: 'GitHub', url: 'https://github.com/dzxrly', iconName: 'fa-brands fa-github' },
    { name: 'Gmail', url: 'aegonhe993@gmail.com', iconName: 'fa-regular fa-paper-plane' },
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
  ],
  p = { languageBadgeUrlList: L, personalWebSiteList: D },
  Q = ['src'],
  z = { class: 'text-body1 q-my-sm text-on-background' },
  A = { class: 'text-body1 q-my-sm text-on-background' },
  N = { class: 'text-body1 q-my-sm text-on-background' },
  U = { class: 'text-body1 q-my-sm text-on-background' },
  E = { class: 'text-body1 q-my-sm text-on-background' },
  R = { class: 'text-body1 q-my-sm text-on-background' },
  S = { class: 'text-body1 q-my-sm text-on-background' },
  W = ['src'],
  Y = w({
    __name: 'AboutMeCard',
    setup($) {
      const b = j(),
        { t } = B(),
        f = n(p.languageBadgeUrlList),
        y = n(p.personalWebSiteList),
        v = n(P('isShiny') || !1),
        l = F(() => b.screen.lt.sm);
      return (G, d) => (
        r(),
        g(q, null, {
          default: c(() => [
            e(
              'div',
              { class: i([l.value ? 'column' : 'row', 'justify-center items-center full-width']) },
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
                    I(
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
                                'https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)',
                              )),
                        },
                        {
                          default: c(() => [
                            e(
                              'img',
                              { src: v.value ? '/avatar.png' : '/avatar_s.png', alt: 'avatar' },
                              null,
                              8,
                              Q,
                            ),
                          ]),
                          _: 1,
                        },
                      )),
                      [[k]],
                    ),
                  ],
                  2,
                ),
                e(
                  'div',
                  {
                    class: i([
                      l.value ? 'col justify-center q-pt-xl' : 'col-8 justify-start q-pl-xl',
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
                        e('span', z, a(o(t)('homePersonalInfoChip1')), 1),
                        e('span', A, a(o(t)('homePersonalInfoChip2')), 1),
                        e('span', N, a(o(t)('homePersonalInfoChip3')), 1),
                        e('span', U, a(o(t)('homePersonalInfoChip4')), 1),
                        e('span', E, a(o(t)('homePersonalInfoChip5')), 1),
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
                              h,
                              null,
                              u(
                                f.value,
                                (s) => (
                                  r(),
                                  m('div', { key: s, class: 'q-mr-sm q-mb-sm' }, [
                                    e(
                                      'img',
                                      { src: s, alt: 'language badge', loading: 'lazy' },
                                      null,
                                      8,
                                      W,
                                    ),
                                  ])
                                ),
                              ),
                              128,
                            )),
                          ],
                          2,
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
                              h,
                              null,
                              u(
                                y.value,
                                (s) => (
                                  r(),
                                  g(
                                    x,
                                    {
                                      key: s.name,
                                      href: s.url.includes('@') ? `mailto:${s.url}` : s.url,
                                      class: 'q-mr-sm q-mb-sm',
                                      referrerpolicy: 'no-referrer',
                                      color: 'primary',
                                      label: s.name,
                                      'no-caps': '',
                                      unelevated: '',
                                      rounded: '',
                                      size: 'md',
                                      target: '_blank',
                                      type: 'a',
                                    },
                                    null,
                                    8,
                                    ['href', 'label'],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ],
                          2,
                        ),
                      ],
                      2,
                    ),
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          _: 1,
        })
      );
    },
  });
export { Y as default };
