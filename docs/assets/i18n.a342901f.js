import { b as r } from './index.7d66cf72.js';
import { c as i } from './vue-i18n.runtime.8bf5658f.js';
var t = {
    homeTitle: "Egg Targaryen's Dock",
    homeBtnMyProjects: 'Code Repos',
    homeBtnPersonal: 'About Me',
    homePersonalInfoChip1: '\u{1F440} Deep Learning & Computer Vision',
    homePersonalInfoChip2: '\u{1F52D} Astronomy Big Data & Data Mining',
    homePersonalInfoChip3: '\u{1F4F1} Android Native Development',
    homePersonalInfoChip4: '\u{1F310} Web Front-end Development',
    homePersonalInfoChip5: '\u{1F6E0}\uFE0F Game Modding Maker',
    homePersonalInfoChip6: '\u{1F52B} FPS Game Enthusiast',
    homePersonalInfoChip7: '\u{1F4BB} ITX PC Building',
    projectRepoListLoading: 'Loading Repos...',
    projectRepoOpenButton: 'View on GitHub',
  },
  s = {
    homeTitle: 'Egg Targaryen\u7684\u4E2A\u4EBA\u5C0F\u7AD9',
    homeBtnMyProjects: '\u4EE3\u7801\u4ED3\u5E93',
    homeBtnPersonal: '\u5173\u4E8E\u6211',
    homePersonalInfoChip1:
      '\u{1F440} \u6DF1\u5EA6\u5B66\u4E60\u4E0E\u8BA1\u7B97\u673A\u89C6\u89C9',
    homePersonalInfoChip2:
      '\u{1F52D} \u5929\u6587\u5927\u6570\u636E\u5206\u6790',
    homePersonalInfoChip3: '\u{1F4F1} Android\u539F\u751F\u5F00\u53D1',
    homePersonalInfoChip4: '\u{1F310} Web\u524D\u7AEF\u5F00\u53D1',
    homePersonalInfoChip5: '\u{1F6E0}\uFE0F \u6E38\u620FMod\u5236\u4F5C',
    homePersonalInfoChip6: '\u{1F52B} FPS\u6E38\u620F\u7231\u597D\u8005',
    homePersonalInfoChip7: '\u{1F5A5}\uFE0F ITX PC\u88C5\u673A~',
    projectRepoListLoading: '\u8BFB\u53D6\u4ED3\u5E93\u5217\u8868...',
    projectRepoOpenButton: '\u5728GitHub\u4E0A\u67E5\u770B',
  },
  e = { 'en-US': t, 'zh-CN': s },
  p = r(({ app: u }) => {
    const o = navigator.language || 'en-US',
      n = e.hasOwnProperty(o) ? o : 'en-US',
      a = i({ locale: n, legacy: !1, messages: e });
    u.use(a);
  });
export { p as default };
