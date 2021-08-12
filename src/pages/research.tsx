import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaDatabase } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import Breadcrumbs from '~components/Breadcrumbs'
import { EventsCarousel, ProjectsCarousel, PublicationsCarousel } from '~components/carousels'
import { ProjectCounters, Tools } from '~components/research-components'
import SEO from '~components/SEO'
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
  }
}

const ResearchPage: React.FC<ResearchPageProps> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <TopHero heroTitle="research.heroTitle" heroDesc="research.heroDesc" bgImageUrl="/images/bg_5.jpg" />
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
              <p>
                <span className="pr-1">{t('research.publications.fullPubList')}</span>
                <a target="_blank" rel="noopener noreferrer" href="https://inf.mit.bme.hu/research/publications">
                  <MdSchool />
                </a>{' '}
                <span className="px-2">|</span>
                <span className="pr-1">{t('research.publications.dataSets')}</span>
                <a href="https://zenodo.org/communities/ftsrg" target="_blank" rel="noopener noreferrer">
                  <FaDatabase />
                </a>
              </p>
              <p>{t('research.publications.description')}</p>
            </Col>
          </Row>
          <PublicationsCarousel nodes={data.publications.nodes} />
        </Container>
      </div>

      <Tools />

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
  query ResearchPageQueries {
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
  }
`
