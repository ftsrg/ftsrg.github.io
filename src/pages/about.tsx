import { PageProps } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import Layout from '../layout/Layout'

const AboutPage: React.FC<PageProps> = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO />
      {/** TODO */}
    </Layout>
  )
}

export default AboutPage
