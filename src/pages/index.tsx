import { graphql, PageProps } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProjectsCarousel } from '~components/carousels'
import { About, Banner, Competences, Education, News, Partners } from '~components/indexpage-components'
import Layout from '~layout/Layout'
import { ProjectProps } from '~utils/props'

interface IndexPageProps extends PageProps {
  data: {
    projects: {
      nodes: Array<ProjectProps>
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { t } = useI18next()

  return (
    <Layout href="/">
      <Banner />
      <Competences />
      <Education />
      <About />
      <div id="projects" className="site-section">
        <Container>
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="section-title-underline">
                <span>{t('home.projects.title')}</span>
              </h2>
            </Col>
          </Row>
          <ProjectsCarousel nodes={data.projects.nodes} />
        </Container>
      </div>
      <Partners />
      <News />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQueries($language: String!) {
    projects: allProjectsYaml {
      nodes {
        title
        subtitle
        url
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    locales: allLocale(filter: { ns: { in: ["home.translation", "nav.translation", "translation"] }, language: { eq: $language } }) {
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
