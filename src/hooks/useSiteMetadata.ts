import { graphql, useStaticQuery } from 'gatsby'

interface SiteMetadata {
  baseUrl: string
  title: string
  titleTemplate: string
  description: string
  author: string
  image: string
  favicons: {
    favicon32: string
    favicon16: string
  }
  social: {
    twitterUsername: string
    facebookPage: string
  }
  robots: string
  keywords: string
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            baseUrl
            title
            titleTemplate
            description
            author
            image
            favicons {
              favicon32
              favicon16
            }
            social {
              twitterUsername
              facebookAppId
            }
            keywords
            robots
          }
        }
      }
    `
  )
  return site.siteMetadata
}
