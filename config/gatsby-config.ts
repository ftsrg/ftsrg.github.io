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

import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

export default {
  siteMetadata: {
    baseUrl: 'https://ftsrg.mit.bme.hu/',
    translations: ['en'],
    lang: 'hu',
    title: 'ftsrg — Kritikus Rendszerek Kutatócsoport',
    titleTemplate: '%s | ftsrg — Kritikus Rendszerek Kutatócsoport',
    description:
      'A Kritikus Rendszerek Kutatócsoport célja olyan új módszerek és szoftverek kidolgozása, amiknek a segítségével a' +
      'mérnökök jobb rendszereket készíthetnek.',
    author: 'ftsrg',
    image: '/images/ftsrg-large.png',
    favicons: {
      favicon32: '/images/favicons/favicon-32x32.png',
      favicon16: '/images/favicons/favicon-16x16.png'
    },
    social: {
      twitterUsername: '@ftsrg_bme',
      facebookAppId: 'FB_APP_ID'
    },
    keywords: ['research', 'system', 'verification', 'analysis', 'model-based'],
    robots: 'index, follow'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${path.join(__dirname, '../src/content/projects')}`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${path.join(__dirname, '../src/content/images')}`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `md-headinglink`,
              isIconAfterHeader: true,
              elements: [`h1`, `h2`, `h3`, `h4`]
            }
          },
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
