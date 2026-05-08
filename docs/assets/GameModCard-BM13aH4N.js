import {
  H as d,
  $ as f,
  r as n,
  a as o,
  J as v,
  K as g,
  L as _,
  M,
  N as m,
  V as i,
  _ as x,
} from './index-DWv1t-r6.js';
import { u as B } from './use-quasar-CoNAkHaw.js';
import { C as l } from './CardButton-FKL5xI0_.js';
import { D as C } from './DetailPageWrapper-BukT8e79.js';
import { g as b, G as u } from './game-mod-list-Dp-QRfa3.js';
import './QSpinner-BS31LsP8.js';
import './render-C8JR9mId.js';
import './QSpinnerHourglass-BsdWJROw.js';
import './use-timeout-CQ0L5pPW.js';
import './open-url-BiiWAAt1.js';
import './vue-i18n.runtime-cGvmvPYv.js';
import './QBtn-B2AxGdAM.js';
const h = { class: 'game-mod-nav-list full-width q-py-md' },
  N = d({
    __name: 'GameModCard',
    setup(S) {
      f((e) => ({ '5b24f34e': p.value, '0591f82a': c.value }));
      const r = B(),
        a = n({ coefficientA: 0.015, coefficientB: 0.021, valueMax: 12, valueMin: 9 }),
        t = n(new Set(b.gameModList.map((e) => e.gameSeries)).size),
        s = o(() => {
          const e = r.screen.width * a.value.coefficientA + a.value.coefficientB;
          return e > a.value.valueMax
            ? a.value.valueMax
            : e < a.value.valueMin
              ? a.value.valueMin
              : e;
        }),
        p = o(() => `${s.value}rem`),
        c = o(() => {
          const e = Math.floor(r.screen.width / 16 / s.value);
          return e > t.value ? t.value : e;
        });
      return (e, w) => (
        g(),
        v(C, null, {
          default: _(() => [
            M('div', h, [
              m(
                l,
                {
                  avatar: 'publicAssets/gameLogos/logo_mhs.png',
                  route: { name: 'modInfo', params: { gameName: i(u).MHS } },
                  'responsive-props': a.value,
                  'background-color': '#eef4f8',
                  'text-color': '#081e27',
                  'title-keyword': 'gameModBtnGameNameMHSeries',
                },
                null,
                8,
                ['route', 'responsive-props'],
              ),
              m(
                l,
                {
                  avatar: 'publicAssets/gameLogos/logo_pragmata.png',
                  route: { name: 'modInfo', params: { gameName: i(u).PRAGMATA } },
                  'responsive-props': a.value,
                  'background-color': '#eef4f8',
                  'text-color': '#081e27',
                  'title-keyword': 'gameModBtnGameNamePragmata',
                },
                null,
                8,
                ['route', 'responsive-props'],
              ),
            ]),
          ]),
          _: 1,
        })
      );
    },
  }),
  D = x(N, [['__scopeId', 'data-v-abb810e0']]);
export { D as default };
