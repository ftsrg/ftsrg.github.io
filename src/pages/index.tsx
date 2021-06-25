import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { About, Banner, Competences, Education, News, Partners, Projects } from '../components/indexpage-components'
import SEO from '../components/SEO'
import Layout from '../layout/Layout'

const IndexPage: FC<PageProps> = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO />
      <Banner />
      <Competences />
      <Education />
      <About />
      <Projects />
      <Partners />
      <News />
    </Layout>
  )
}

export default IndexPage
