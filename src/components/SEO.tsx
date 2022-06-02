import { useLocation } from '@reach/router'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '~hooks/useSiteMetadata'
import { SEOProps } from '~utils/props'

const SEO: FC<SEOProps> = ({ title, description, image, author, lang, robots, meta = [], links = [] }) => {
  const { pathname } = useLocation()
  const { t, i18n } = useI18next()

  const {
    baseUrl,
    title: defaultTitle,
    titleTemplate,
    author: defaultAuthor,
    description: defaultDescription,
    image: defaultImage,
    favicons,
    social: { twitterUsername },
    robots: defaultRobots,
    keywords: defaultKeywords
  } = useSiteMetadata()

  const imageUrl = (() => {
    let url = image || defaultImage
    url = url.replace(/^\/+/, '')
    return url.includes('://') ? url : `${baseUrl}${url}`
  })()

  const seo = {
    lang: lang || i18n.language,
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
    image: imageUrl,
    url: pathname === '/' ? `${baseUrl}` : `${baseUrl}${pathname.slice(1)}`,
    keywords: defaultKeywords,
    robots: robots || defaultRobots
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: seo.lang
      }}
      title={t(seo.title)}
      titleTemplate={seo.title === defaultTitle ? t(seo.title) : t(titleTemplate)}
      link={(
        [
          {
            rel: 'canonical',
            href: seo.url
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: favicons?.favicon32
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: favicons?.favicon16
          }
        ] as Array<JSX.IntrinsicElements['link']>
      )
        .concat(
          i18n.languages.map((l) => ({
            rel: 'alternate',
            href: `${seo.url}?locale=${l}`,
            hrefLang: l
          }))
        )
        .concat([
          {
            rel: 'alternate',
            href: `${seo.url}?locale=${(i18n.options.fallbackLng as string[])[0]}`,
            hrefLang: 'x-default'
          }
        ])
        .concat(links)}
      meta={[
        {
          name: 'description',
          content: t(seo.description)
        },
        {
          name: 'author',
          content: seo.author
        },
        {
          property: 'og:title',
          content: t(seo.title)
        },
        {
          property: 'og:description',
          content: t(seo.description)
        },
        {
          property: 'og:image',
          content: seo.image
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator',
          content: twitterUsername
        },
        {
          name: 'twitter:title',
          content: t(seo.title)
        },
        {
          name: 'twitter:description',
          content: t(seo.description)
        },
        {
          name: 'twitter:image',
          content: seo.image
        },
        {
          name: 'robots',
          content: seo.robots
        }
      ]
        .concat({
          name: 'keywords',
          content: t(seo.keywords)
        })
        .concat(meta)}
    />
  )
}

export default SEO
