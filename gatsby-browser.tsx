import { Global } from '@emotion/react'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '~utils/scss/style.scss'
import { globalStyles } from '~utils/styles'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <>
    <Global styles={globalStyles} />
    {element}
  </>
)
