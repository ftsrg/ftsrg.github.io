import { PageProps } from 'gatsby'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Layout from '~layout/Layout'

const NotFoundPage: React.FC<PageProps> = () => {
  const { t } = useTranslation()
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
