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
    `gatsby-transformer-yaml`,
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
        name: `publication`,
        path: `${path.join(__dirname, '../src/content/publications')}`
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `member`,
        path: `${path.join(__dirname, '../src/content/members')}`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `subject`,
        path: `${path.join(__dirname, '../src/content/subjects')}`
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-tsconfig-paths`
  ]
}
