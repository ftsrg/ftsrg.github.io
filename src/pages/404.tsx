import { graphql, PageProps } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '~layout/Layout'

const NotFoundPage: React.FC<PageProps> = () => {
  const { t } = useI18next()
  return (
    <Layout href="/404" seo={{ robots: 'noindex, nofollow' }}>
      <Container className="text-center font-weight-bold my-5">
        <h1>{t('commons.404.title')}</h1>
        <h2>{t('commons.404.notFoundText')}</h2>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQueries($language: String!) {
    locales: allLocale(filter: { ns: { in: ["commons"] }, language: { eq: $language } }) {
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
