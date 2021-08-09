import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
  return (
    <Layout>
      <SEO />
      <TopHero heroTitle="pages.research.heroTitle" heroDesc="pages.research.heroDesc" bgImageUrl="/images/bg_5.jpg" />
      <Breadcrumbs title="nav.research.title" />

      <div id="projects" className="site-section">
        <Container>
          <Row className="mb-3">
            <Col lg={12}>
              <h2 className="section-title-underline">
                <span>K+F+I projektjeink</span>
              </h2>
              <p>
                A kutatócsoport az elmúlt 25 évben több mint húsz nagy EU-s kutatási projektben (FP4-H2020) és 25-nél is több közvetlen
                ipari együttműködésben vett részt. Kutatás-fejlesztési projektjeinkben olyan új, innovatív szoftveralapú megoldásokat hozunk
                létre, amelyek jelentősen megkönnyítik a mérnökök munkáját.
              </p>
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
                <span>Publikációk</span>
              </h2>
              <p>
                <span className="pr-1">Teljes publikációs lista</span>
                <a target="_blank" rel="noopener noreferrer" href="https://inf.mit.bme.hu/research/publications">
                  <MdSchool />
                </a>{' '}
                <span className="px-2">|</span>
                <span className="pr-1">Adathalmazok</span>
                <a href="https://zenodo.org/communities/ftsrg" target="_blank" rel="noopener noreferrer">
                  <FaDatabase />
                </a>
              </p>
              <p>
                Kutatócsoportunk rendszeresen publikál a szoftvertechnológia (TSE, IST, STTT), modellalapú fejlesztés (MODELS, SoSyM), a
                formális verifikáció (TACAS, JAR) és a szoftvertesztelés (ICST, STVR) vezető konferenciáin és folyóirataiban.
              </p>
            </Col>
          </Row>
          <PublicationsCarousel nodes={data.publications.nodes} />
        </Container>
      </div>

      <Tools />

      <div id="events" className="site-section">
        <Container>
          <Row className="mb-5">
            <Col lg={4}>
              <h2 className="section-title-underline">
                <span>Események és díjak</span>
              </h2>
            </Col>
          </Row>
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
        title
        subtitle
        url
        desc
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
