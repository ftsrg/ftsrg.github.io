import { graphql, navigate } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import useIsClient from '~hooks/useIsClient'
import { useSiteMetadata } from '~hooks/useSiteMetadata'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RedirectPage: React.FC = (context: any) => {
  const { isClient } = useIsClient()
  const { baseUrl } = useSiteMetadata()
  // eslint-disable-next-line react/destructuring-assignment
  const { to } = context.pageContext.redirect

  if (isClient) {
    navigate(to)
  }
  return (
    <Helmet
      link={[
        {
          rel: 'canonical',
          href: `${baseUrl}${to.slice(1)}`
        }
      ]}
    />
  )
}

export default RedirectPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
