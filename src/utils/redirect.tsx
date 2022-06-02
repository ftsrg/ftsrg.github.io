import { graphql, navigate } from 'gatsby'
import React from 'react'
import useIsClient from '~hooks/useIsClient'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RedirectPage: React.FC = (context: any) => {
  const { isClient } = useIsClient()
  // eslint-disable-next-line react/destructuring-assignment
  const { from, to } = context.pageContext.redirect
  /* return (
    <>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
      </head>
      <Layout href={from} />
    </>
  ) */
  if (isClient) {
    navigate(to)
  }
  return <></> // <Layout href={from} />
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
