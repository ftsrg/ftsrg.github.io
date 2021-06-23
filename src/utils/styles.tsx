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

import { css } from '@emotion/react'
import typefaceCrimsonText from '../fonts/CrimsonText-Regular.woff2'
import typefaceCrimsonTextSemiBold from '../fonts/CrimsonText-SemiBold.woff2'
import typefaceSourceSansProLight from '../fonts/SourceSansPro-Light.woff2'
import typefaceSourceSansPro from '../fonts/SourceSansPro-Regular.woff2'

const webfonts = css`
  @font-face {
    font-family: 'Crimson Text';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('CrimsonText Regular'), local('CrimsonText-Regular'), url(${typefaceCrimsonText}) format('woff2');
    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Crimson Text';
    font-style: normal;
    font-stretch: normal;
    font-weight: 600;
    font-display: fallback;
    src: local('CrimsonText SemiBold'), local('CrimsonText-SemiBold'), url(${typefaceCrimsonTextSemiBold}) format('woff2');
    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-stretch: normal;
    font-weight: 300;
    font-display: fallback;
    src: local('SourceSansPro Light'), local('SourceSansPro-Light'), url(${typefaceSourceSansProLight}) format('woff2');
    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('SourceSansPro Regular'), local('SourceSansPro-Regular'), url(${typefaceSourceSansPro}) format('woff2');
    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }
`

export { webfonts as globalStyles }
