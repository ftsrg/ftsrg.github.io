import { css } from '@emotion/react'
import typefaceMuliBold from '../fonts/Muli-Bold.woff2'
import typefaceMuli from '../fonts/Muli-Regular.woff2'

const webfonts = css`
  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Muli Regular'), local('Muli-Regular'), url(${typefaceMuli}) format('woff2');
    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-stretch: normal;
    font-weight: 600;
    font-display: fallback;
    src: local('Muli Bold'), local('Muli-Bold'), url(${typefaceMuliBold}) format('woff2');
    unicode-range: U+?????;
  }
`

export { webfonts as globalStyles }
