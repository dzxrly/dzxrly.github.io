import { Q as r } from './QBtn.3dd4b2fe.js';
import { u as o } from './use-quasar.7c54f452.js';
import {
  d as c,
  c as l,
  Q as _,
  V as d,
  U as e,
  j as i,
  ad as n,
  _ as p,
} from './index.9c1a1e44.js';
const m = { class: 'detail-page-wrapper full-width full-height q-px-md' },
  u = {
    class: 'back-btn-row row justify-start items-center full-width q-mb-md',
  },
  f = { class: 'content' },
  v = c({
    __name: 'DetailPageWrapper',
    setup(h) {
      const t = o(),
        a = l(() => t.screen.lt.sm);
      return (s, g) => (
        _(),
        d('div', m, [
          e('div', u, [
            i(
              r,
              {
                size: a.value ? 'md' : 'lg',
                color: 'primary',
                flat: '',
                icon: 'arrow_back',
                round: '',
                to: '/',
              },
              null,
              8,
              ['size']
            ),
          ]),
          e('div', f, [n(s.$slots, 'default', {}, void 0, !0)]),
        ])
      );
    },
  });
var x = p(v, [['__scopeId', 'data-v-e2162cd6']]);
export { x as D };
