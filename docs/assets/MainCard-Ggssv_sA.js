import {
  I as m,
  a6 as d,
  r as t,
  B as f,
  b as n,
  R as y,
  M as _,
  P as r,
  _ as h,
} from './index-B4Fegd2x.js';
import { C as a } from './CardButton-BuScXcyh.js';
import { u as b } from './use-quasar-B9Viz2rg.js';
import './Ripple-DkNmnZOt.js';
import './render-C8JR9mId.js';
import './QSpinnerHourglass-CChfehD2.js';
import './use-timeout-o9Uba7nv.js';
import './open-url-DoUsCjqU.js';
const g = { class: 'main-card-wrapper full-width' },
  B = m({
    __name: 'MainCard',
    setup(k) {
      d((e) => ({ '4b10b22c': u.value, ecb1cff0: v.value }));
      const s = b(),
        l = t(f('isShiny') || !1),
        o = t({ coefficientA: 0.015, coefficientB: 0.021, valueMax: 12, valueMin: 9 }),
        c = t(5),
        i = n(() => {
          const e = s.screen.width * o.value.coefficientA + o.value.coefficientB;
          return e > o.value.valueMax
            ? o.value.valueMax
            : e < o.value.valueMin
              ? o.value.valueMin
              : e;
        }),
        p = n(() => (l.value ? '643s.gif' : '643.gif')),
        u = n(() => `${i.value}rem`),
        v = n(() => {
          const e = Math.floor(s.screen.width / 16 / i.value);
          return e > c.value ? c.value : e;
        });
      return (e, x) => (
        _(),
        y('div', g, [
          r(
            a,
            {
              'icon-name': 'ads_click',
              route: { path: 'https://blog.eggtargaryen.com' },
              'responsive-props': o.value,
              'background-color': 'var(--primary-container-color)',
              'text-color': 'var(--on-primary-container-color)',
              'title-keyword': 'blogBtnTitle',
            },
            null,
            8,
            ['responsive-props'],
          ),
          r(
            a,
            {
              'icon-name': 'home_repair_service',
              route: { path: '/tools' },
              'responsive-props': o.value,
              'background-color': 'var(--primary-container-color)',
              'text-color': 'var(--on-primary-container-color)',
              'title-keyword': 'toolsBtnTitle',
            },
            null,
            8,
            ['responsive-props'],
          ),
          r(
            a,
            {
              'icon-name': 'folder',
              route: { path: '/projects' },
              'responsive-props': o.value,
              'background-color': 'var(--primary-container-color)',
              'text-color': 'var(--on-primary-container-color)',
              'title-keyword': 'homeBtnMyProjects',
            },
            null,
            8,
            ['responsive-props'],
          ),
          r(
            a,
            {
              'icon-name': 'build',
              route: { name: 'modsList' },
              'responsive-props': o.value,
              'background-color': 'var(--primary-container-color)',
              'text-color': 'var(--on-primary-container-color)',
              'title-keyword': 'homeBtnGameMods',
            },
            null,
            8,
            ['responsive-props'],
          ),
          r(
            a,
            {
              'icon-name': 'person',
              route: { path: '/about' },
              'responsive-props': o.value,
              'secondary-avatar': p.value,
              'background-color': 'var(--primary-container-color)',
              'text-color': 'var(--on-primary-container-color)',
              'title-keyword': 'homeBtnPersonal',
            },
            null,
            8,
            ['responsive-props', 'secondary-avatar'],
          ),
        ])
      );
    },
  }),
  T = h(B, [['__scopeId', 'data-v-bf4c7e97']]);
export { T as default };
