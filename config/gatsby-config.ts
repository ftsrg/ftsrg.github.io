import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

const baseUrl = 'https://ftsrg.mit.bme.hu/'

export default {
  siteMetadata: {
    baseUrl,
    title: 'meta.title',
    titleTemplate: 'meta.titleTemplate',
    description: 'meta.description',
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
    keywords: 'meta.keywords',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `event`,
        path: `${path.join(__dirname, '../src/content/events')}`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `specialization`,
        path: `${path.join(__dirname, '../src/content/specializations')}`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `achievement`,
        path: `${path.join(__dirname, '../src/content/achievements')}`
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${path.join(__dirname, '../src/locales')}`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `hu`],
        defaultLanguage: `en`,
        generateDefaultLanguagePage: true,
        redirect: true,
        siteUrl: baseUrl,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/',
            languages: ['en', 'hu']
          },
          {
            matchPath: '/404',
            languages: ['en', 'hu']
          },
          {
            matchPath: '/about',
            languages: ['en', 'hu']
          },
          {
            matchPath: '/contact',
            languages: ['en', 'hu']
          },
          {
            matchPath: '/education',
            languages: ['en', 'hu']
          },
          {
            matchPath: '/research',
            languages: ['en', 'hu']
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        environments: ['production', 'development']
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        query: `
          {
            site {
              siteMetadata {
                baseUrl
              }
            }
            allSitePage {
              nodes {
                pageContext
                path
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }: { site: { siteMetadata: { baseUrl: string } } }) => site.siteMetadata.baseUrl,
        resolvePages: ({
          allSitePage
        }: {
          allSitePage: {
            nodes: {
              pageContext: { i18n: { defaultLanguage: string; languages: string[]; originalPath: string; routed: boolean } }
              path: string
            }[]
          }
        }) => allSitePage.nodes,
        excludes: ['/**/404', '/**/404.html'],
        filterPages: (node: {
          pageContext: { i18n: { defaultLanguage: string; languages: string[]; originalPath: string; routed: boolean } }
          path: string
        }) => {
          return node.pageContext.i18n.routed === false
        },
        serialize: (node: {
          pageContext: { i18n: { language: string; defaultLanguage: string; languages: string[]; originalPath: string; routed: boolean } }
          path: string
        }) => {
          const { language, languages, originalPath, defaultLanguage } = node.pageContext.i18n

          const links = [{ lang: 'x-default', url: `${baseUrl}${defaultLanguage}${originalPath}` }]
          languages.forEach((lang) => {
            if (lang === language) return
            links.push({ lang, url: `${baseUrl}${lang}${originalPath}` })
          })

          return { url: `${baseUrl}${node.path.slice(1)}`, links }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: baseUrl,
        sitemap: `${baseUrl}sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}
