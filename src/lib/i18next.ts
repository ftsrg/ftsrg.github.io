/*!
 * Copyright (C) 2020  Josh Habdas <jhabdas@protonmail.com>
 *
 * This file is part of gatsby-starter-i18n-react-i18next.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import i18next from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/translation.json'
import hu from '../locales/hu/translation.json'

const resources = {
  en: { translation: { ...en } },
  hu: { translation: { ...hu } }
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
