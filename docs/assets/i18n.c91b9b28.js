import { b as r } from './index.59749b07.js';
import { c as F } from './vue-i18n.runtime.48e42421.js';
var t = {
    homeTitle: "Egg Targaryen's Dock",
    blogBtnTitle: 'Blog',
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
  i = {
    homeTitle: 'Egg Targaryen\u7684\u4E2A\u4EBA\u5C0F\u7AD9',
    blogBtnTitle: '\u535A\u5BA2',
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
  h = {
    homeTitle: 'Egg Targaryen\u7684\u500B\u4EBA\u5C0F\u7AD9',
    blogBtnTitle: '\u90E8\u843D\u683C',
    homeBtnMyProjects: '\u7A0B\u5F0F\u78BC\u5009\u5EAB',
    homeBtnPersonal: '\u95DC\u65BC\u6211',
    homePersonalInfoChip1:
      '\u{1F440} \u6DF1\u5EA6\u5B78\u7FD2\u8207\u96FB\u8166\u8996\u89BA',
    homePersonalInfoChip2:
      '\u{1F52D} \u5929\u6587\u5927\u6578\u64DA\u5206\u6790',
    homePersonalInfoChip3: '\u{1F4F1} Android\u539F\u751F\u958B\u767C',
    homePersonalInfoChip4: '\u{1F310} Web\u524D\u7AEF\u958B\u767C',
    homePersonalInfoChip5: '\u{1F6E0}\uFE0F \u904A\u6232Mod\u88FD\u4F5C',
    homePersonalInfoChip6: '\u{1F52B} FPS\u904A\u6232\u611B\u597D\u8005',
    homePersonalInfoChip7: '\u{1F5A5}\uFE0F ITX PC\u7D44\u88DD~',
    projectRepoListLoading: '\u8B80\u53D6\u5009\u5EAB\u5217\u8868...',
    projectRepoOpenButton: '\u5728GitHub\u4E0A\u67E5\u770B',
  },
  o = { 'en-US': t, 'zh-CN': i, 'zh-TW': h },
  p = r(({ app: e }) => {
    const u = navigator.language || 'en-US',
      n = o.hasOwnProperty(u) ? u : 'en-US';
    console.log(navigator.language);
    const a = F({ locale: n, legacy: !1, messages: o });
    e.use(a);
  });
export { p as default };
