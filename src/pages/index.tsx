import { graphql, PageProps } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProjectsCarousel } from '~components/carousels'
import { About, Banner, Competences, Education, News, Partners } from '~components/indexpage-components'
import Layout from '~layout/Layout'
import { ProjectProps } from '~utils/props'
import PartnerProps from '~utils/props/partner.props'

interface IndexPageProps extends PageProps {
  data: {
    projects: {
      nodes: Array<ProjectProps>
    }
    partners: {
      nodes: Array<PartnerProps>
    }
    aboutHero: ImageDataLike
    partnerHero: ImageDataLike
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { t } = useI18next()

  return (
    <Layout href="/">
      <Banner />
      <Competences />
      <Education />
      <About heroBackgroundImage={data.aboutHero} />
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
      <Partners nodes={data.partners.nodes} heroBackgroundImage={data.partnerHero} />
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
    partners: allPartnersYaml {
      nodes {
        name
        logo {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    locales: allLocale(filter: { ns: { in: ["home", "research", "commons"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    aboutHero: file(relativePath: { eq: "hero_3.jpg" }, sourceInstanceName: { eq: "staticImages" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    partnerHero: file(relativePath: { eq: "hero_1.jpg" }, sourceInstanceName: { eq: "staticImages" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
