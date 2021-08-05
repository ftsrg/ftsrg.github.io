import { Global } from '@emotion/react'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import i18next from '~lib/i18next'
import '~utils/scss/style.scss'
import { globalStyles } from '~utils/styles'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <>
    <Global styles={globalStyles} />
    <I18nextProvider i18n={i18next}>{element}</I18nextProvider>
  </>
)
