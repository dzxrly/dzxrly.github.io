import {
  I as d,
  a6 as v,
  r as n,
  b as o,
  L as f,
  M as g,
  N as _,
  O as M,
  P as i,
  W as m,
  _ as x,
} from './index-B4Fegd2x.js';
import { u as B } from './use-quasar-B9Viz2rg.js';
import { C as l } from './CardButton-BuScXcyh.js';
import { D as C } from './DetailPageWrapper-DJqYuun-.js';
import { g as b, G as c } from './game-mod-list-Dp-QRfa3.js';
import './Ripple-DkNmnZOt.js';
import './render-C8JR9mId.js';
import './QSpinnerHourglass-CChfehD2.js';
import './use-timeout-o9Uba7nv.js';
import './open-url-DoUsCjqU.js';
import './QBtn-D6zP4VzL.js';
const h = { class: 'game-mod-nav-list full-width q-py-md' },
  N = d({
    __name: 'GameModCard',
    setup(S) {
      v((e) => ({ e21d0e56: u.value, '65fb3b9e': p.value }));
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
        u = o(() => `${s.value}rem`),
        p = o(() => {
          const e = Math.floor(r.screen.width / 16 / s.value);
          return e > t.value ? t.value : e;
        });
      return (e, w) => (
        g(),
        f(C, null, {
          default: _(() => [
            M('div', h, [
              i(
                l,
                {
                  avatar: 'publicAssets/gameLogos/logo_mhs.png',
                  route: { name: 'modInfo', params: { gameName: m(c).MHS } },
                  'responsive-props': a.value,
                  'background-color': 'var(--primary-container-color)',
                  'text-color': 'var(--on-primary-container-color)',
                  'title-keyword': 'gameModBtnGameNameMHSeries',
                },
                null,
                8,
                ['route', 'responsive-props'],
              ),
              i(
                l,
                {
                  avatar: 'publicAssets/gameLogos/logo_pragmata.png',
                  route: { name: 'modInfo', params: { gameName: m(c).PRAGMATA } },
                  'responsive-props': a.value,
                  'background-color': 'var(--primary-container-color)',
                  'text-color': 'var(--on-primary-container-color)',
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
  H = x(N, [['__scopeId', 'data-v-05553ff6']]);
export { H as default };
