import langList from './index'

function getLocalLangCode(): string {
  const browserLanguage = navigator.language || 'en-US'
  return Object.prototype.hasOwnProperty.call(langList, browserLanguage) ? browserLanguage : 'en-US'
}

export {
  getLocalLangCode
}
