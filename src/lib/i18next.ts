import i18next from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import aboutEn from '../locales/en/about.translation.json'
import contactEn from '../locales/en/contact.translation.json'
import educationEn from '../locales/en/education.translation.json'
import indexEn from '../locales/en/home.translation.json'
import navEn from '../locales/en/nav.translation.json'
import researchEn from '../locales/en/research.translation.json'
import en from '../locales/en/translation.json'
import aboutHu from '../locales/hu/about.translation.json'
import contactHu from '../locales/hu/contact.translation.json'
import educationHu from '../locales/hu/education.translation.json'
import indexHu from '../locales/hu/home.translation.json'
import navHu from '../locales/hu/nav.translation.json'
import researchHu from '../locales/hu/research.translation.json'
import hu from '../locales/hu/translation.json'

const resources = {
  en: { translation: { ...en, ...navEn, ...educationEn, ...aboutEn, ...contactEn, ...indexEn, ...researchEn } },
  hu: { translation: { ...hu, ...navHu, ...educationHu, ...aboutHu, ...contactHu, ...indexHu, ...researchHu } }
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
