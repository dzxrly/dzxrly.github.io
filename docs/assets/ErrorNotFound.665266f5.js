import { Q as t } from './QBtn.3dd4b2fe.js';
import { _ as o, Q as s, V as r, U as e, j as c } from './index.9c1a1e44.js';
import './QIcon.7f956443.js';
import './render.7c7394e0.js';
const a = {},
  l = {
    class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center',
  },
  n = e('div', { style: { 'font-size': '30vh' } }, '404', -1),
  i = e(
    'div',
    { class: 'text-h2', style: { opacity: '0.4' } },
    'Oops. Nothing here...',
    -1
  );
function d(_, f) {
  return (
    s(),
    r('div', l, [
      e('div', null, [
        n,
        i,
        c(t, {
          class: 'q-mt-xl',
          color: 'white',
          label: 'Go Home',
          'no-caps': '',
          'text-color': 'blue',
          to: '/',
          unelevated: '',
        }),
      ]),
    ])
  );
}
var u = o(a, [['render', d]]);
export { u as default };
