import i18next from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import eduEn from '../locales/en/education.translation.json'
import navEn from '../locales/en/nav.translation.json'
import en from '../locales/en/translation.json'
import eduHu from '../locales/hu/education.translation.json'
import navHu from '../locales/hu/nav.translation.json'
import hu from '../locales/hu/translation.json'

const resources = {
  en: { translation: { ...en, ...navEn, ...eduEn } },
  hu: { translation: { ...hu, ...navHu, ...eduHu } }
}

i18next
  /**
   * Load translation from /public/locales using HTTP back-end.
   * @see Docs {@link https://www.i18next.com/overview/plugins-and-utils#backends}
   * @see Example {@link https://github.com/i18next/react-i18next/tree/master/example/react/public/locales}
   * @see Source {@link https://github.com/i18next/i18next-http-backend}
   */
  .use(backend)
  /**
   * Detect user language.
   * @see Source {@link https://github.com/i18next/i18next-browser-languageDetector}
   */
  .use(detector)
  /**
   * Pass i18n instance to react-i18next.
   */
  .use(initReactI18next)
  /**
   * Initialize i18next configuration.
   * @see Docs {@link https://react.i18next.com/latest/i18next-instance}
   * @see Options {@link https://www.i18next.com/overview/configuration-options}
   */
  .init({
    detection: {
      lookupQuerystring: 'locale'
    },
    fallbackLng: 'en',
    debug: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    resources
  })

export default i18next
