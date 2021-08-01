import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import CountUp from 'react-countup'
import { FaChevronRight } from 'react-icons/fa'
import { EventsCarousel, ProjectsCarousel, PublicationsCarousel } from '../components/carousels'
import ToolsSection from '../components/research-components/ToolsSection'
import SEO from '../components/SEO'
import Layout from '../layout/Layout'
import ProjectProps from '../utils/props/project.props'
import PublicationProps from '../utils/props/publication.props'

interface ResearchPageProps extends PageProps {
  data: {
    projects: {
      nodes: Array<ProjectProps>
    }
    publications: {
      nodes: Array<PublicationProps>
    }
  }
}

const ResearchPage: React.FC<ResearchPageProps> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: `url('/images/bg_5.jpg')` }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h2 className="mb-0">Kutatás-fejlesztés</h2>
              <p>Út az alap és alkalmazott kutatáson át az innovációig</p>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-breadcrumbs border-bottom">
        <div className="container">
          <Link to="/">Kezdőlap</Link>
          <span className="mx-2">
            <FaChevronRight size="0.6rem" />
          </span>
          <span className="current">Kutatás-fejlesztés</span>
        </div>
      </div>

      <div id="projects" className="site-section ftco-counter">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-12">
              <h2 className="section-title-underline">
                <span>K+F+I projektjeink</span>
              </h2>
              <p>
                A kutatócsoport az elmúlt 25 évben több mint húsz nagy EU-s kutatási projektben (FP4-H2020) és 25-nél is több közvetlen
                ipari együttműködésben vett részt. Kutatás-fejlesztési projektjeinkben olyan új, innovatív szoftveralapú megoldásokat hozunk
                létre, amelyek jelentősen megkönnyítik a mérnökök munkáját.
              </p>
            </div>
          </div>

          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center">
                  <div className="text-center w-100 mb-4">
                    {/* EEMCN, FUTEG, HIDE, DECOS, RESIST, Sensoria, Deserec, Diana, Hidenets, SafeDMI, Amber, Genesys, Mogentes,
                      SecureChange, E-freight, R3-COP, CECRIS, Concerto, MONDO, R5-COP, ADVANCE, Arrowhead Tools, EMBrACE */}
                    <h1 className="text-primary">
                      <CountUp delay={0.5} end={23} className="fw-bolder" />
                    </h1>
                    <span>EU-s kutatási projekt</span>
                  </div>
                </div>

                <div className="col-md d-flex justify-content-center">
                  <div className="text-center w-100 mb-4">
                    <h1 className="text-primary">
                      <CountUp delay={0.5} end={25} className="fw-bold" />
                    </h1>
                    <span>Ipari együttműködés</span>
                  </div>
                </div>

                <div className="col-md d-flex justify-content-center">
                  <div className="text-center w-100 mb-4">
                    {/* Lendulet, VKE, ERC_HU, OTKA, TéT, DAAD... */}
                    <h1 className="text-primary">
                      <CountUp delay={0.5} end={20} className="fw-bold" />
                    </h1>
                    <span>Hazai és bilaterális projekt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProjectsCarousel nodes={data.projects.nodes} />
        </div>
      </div>

      <div id="publications" className="site-section">
        <div className="container">
          <div className="row mb-3 justify-content-center text-center">
            <div className="col-lg-12 mb-3">
              <h2 className="section-title-underline mb-3">
                <span>Publikációk</span>
              </h2>
              <p>
                Teljes publikációs lista&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://inf.mit.bme.hu/research/publications">
                  <span className="icon-school" />
                </a>{' '}
                | Adathalmazok&nbsp;
                <a href="https://zenodo.org/communities/ftsrg" target="_blank" rel="noopener noreferrer">
                  <span className="icon-database" />
                </a>
              </p>
              <p>
                Kutatócsoportunk rendszeresen publikál a szoftvertechnológia (TSE, IST, STTT), modellalapú fejlesztés (MODELS, SoSyM), a
                formális verifikáció (TACAS, JAR) és a szoftvertesztelés (ICST, STVR) vezető konferenciáin és folyóirataiban.
              </p>
            </div>
          </div>
          <PublicationsCarousel nodes={data.publications.nodes} />
        </div>
      </div>

      <ToolsSection />

      <div id="events" className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4">
              <h2 className="section-title-underline">
                <span>Események és díjak</span>
              </h2>
            </div>
          </div>
          <EventsCarousel />
        </div>
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
  }
`
