import { b as i } from './index.7d66cf72.js';
import { a } from './axios.6b484fa5.js';
const e = a.create({ baseURL: 'https://api.example.com' });
var t = i(({ app: o }) => {
  (o.config.globalProperties.$axios = a), (o.config.globalProperties.$api = e);
});
export { e as api, t as default };
