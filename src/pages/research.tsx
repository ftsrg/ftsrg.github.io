import { graphql, PageProps } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaDatabase, FaTv } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import Breadcrumbs from '~components/Breadcrumbs'
import { EventsCarousel, ProjectsCarousel, PublicationsCarousel } from '~components/carousels'
import { ProjectCounters, Tools } from '~components/research-components'
import TopHero from '~components/TopHero'
import Layout from '~layout/Layout'
import { EventProps, ProjectProps, PublicationProps } from '~utils/props'

interface ResearchPageProps extends PageProps {
  data: {
    projects: {
      nodes: Array<ProjectProps>
    }
    publications: {
      nodes: Array<PublicationProps>
    }
    events: {
      nodes: Array<EventProps>
    }
    researchHero: ImageDataLike
    toolsHero: ImageDataLike
  }
}

const ResearchPage: React.FC<ResearchPageProps> = ({ data }) => {
  const { t } = useI18next()

  return (
    <Layout href="/research">
      <TopHero heroTitle="research.heroTitle" heroDesc="research.heroDesc" bgImage={data.researchHero} />
      <Breadcrumbs title="nav.research.title" />

      <div id="projects" className="site-section">
        <Container>
          <Row className="mb-3">
            <Col lg={12}>
              <h2 className="section-title-underline">
                <span>{t('research.projects.title')}</span>
              </h2>
              <p>{t('research.projects.description')}</p>
            </Col>
          </Row>
          <ProjectCounters />
          <ProjectsCarousel nodes={data.projects.nodes} />
        </Container>
      </div>

      <div id="publications" className="site-section">
        <Container>
          <Row className="mb-3 justify-content-center text-center">
            <Col lg={12} className="mb-3">
              <h2 className="section-title-underline mb-3">
                <span>{t('research.publications.title')}</span>
              </h2>
              <p className="publication-links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://m2.mtmt.hu/gui2/?type=institutes&mode=browse&sel=institutes22230"
                >
                  <span className="pe-1">{t('research.publications.fullPubList')}</span>
                  <MdSchool />
                </a>{' '}
                <span className="px-2">|</span>
                <a href="https://zenodo.org/communities/ftsrg" target="_blank" rel="noopener noreferrer">
                  <span className="pe-1">{t('research.publications.dataSets')}</span>
                  <FaDatabase />
                </a>{' '}
                <span className="px-2">|</span>
                <a href="https://speakerdeck.com/ftsrg/" target="_blank" rel="noopener noreferrer">
                  <span className="pe-1">{t('research.publications.slides')}</span>
                  <FaTv />
                </a>
              </p>
              <p>{t('research.publications.description')}</p>
            </Col>
          </Row>
          <PublicationsCarousel nodes={data.publications.nodes} />
        </Container>
      </div>

      <Tools heroBackgroundImage={data.toolsHero} />

      <div id="events" className="site-section">
        <Container>
          <h2 className="section-title-underline mb-5">
            <span>{t('research.events.title')}</span>
          </h2>
          <EventsCarousel nodes={data.events.nodes} />
        </Container>
      </div>
    </Layout>
  )
}

export default ResearchPage

export const query = graphql`
  query ResearchPageQueries($language: String!) {
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
    publications: allPublicationsYaml {
      nodes {
        journalTitle
        year
        title
        url
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    events: allEventsYaml {
      nodes {
        translationPrefix
        url
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    locales: allLocale(filter: { ns: { in: ["research", "commons"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    researchHero: file(relativePath: { eq: "bg_5.jpg" }, sourceInstanceName: { eq: "staticImages" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    toolsHero: file(relativePath: { eq: "bg_4.jpg" }, sourceInstanceName: { eq: "staticImages" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
