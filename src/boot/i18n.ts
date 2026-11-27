import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';
import { defaultLocale, localeFromPath, locales } from 'src/site/navigation';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = (typeof messages)['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export default defineBoot(({ app, router, urlPath }) => {
  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages, false>({
    locale: localeFromPath(urlPath.split(/[?#]/, 1)[0] ?? '/'),
    legacy: false,
    globalInjection: true,
    fallbackLocale: defaultLocale,
    messages,
  });

  document.documentElement.lang = locales[i18n.global.locale.value].lang;
  router.afterEach((to, _from, failure) => {
    if (failure) return;
    const locale = localeFromPath(to.path);
    i18n.global.locale.value = locale;
    document.documentElement.lang = locales[locale].lang;
  });

  app.use(i18n);
});
