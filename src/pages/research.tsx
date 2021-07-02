import { graphql, PageProps } from 'gatsby'
import React from 'react'
import CountUp from 'react-countup'
import ProjectsCarousel from '../components/common-components/ProjectsCarousel'
import PublicationsCarousel from '../components/common-components/PublicationsCarousel'
import EventsSection from '../components/research-components/EventsSection'
import ToolsSection from '../components/research-components/ToolsSection'
import SEO from '../components/SEO'
import Layout from '../layout/Layout'
import ProjectProps from '../utils/props/project.props'
import PublicationProps from '../utils/props/publication.props'

interface ResearchPageProps extends PageProps {
  data: {
    projects: {
      nodes: {
        fields: {
          slug: string
        }
        html: string
        frontmatter: ProjectProps
      }[]
    }
    publications: {
      nodes: {
        fields: {
          slug: string
        }
        html: string
        frontmatter: PublicationProps
      }[]
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

      <div className="custom-breadcrumns border-bottom">
        <div className="container">
          <a href="index.html">Kezdőlap</a>
          <span className="mx-3 icon-keyboard_arrow_right" />
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

          <div className="row d-md-flex align-items-center justify-content-center" id="section-counter">
            <div className="col-lg-12">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor" />
                    </div>
                    <div className="text">
                      {/* EEMCN, FUTEG, HIDE, DECOS, RESIST, Sensoria, Deserec, Diana, Hidenets, SafeDMI, Amber, Genesys, Mogentes,
                      SecureChange, E-freight, R3-COP, CECRIS, Concerto, MONDO, R5-COP, ADVANCE, Arrowhead Tools, EMBrACE */}
                      <strong className="number">
                        <CountUp end={23} />
                      </strong>
                      <span>EU-s kutatási projekt</span>
                    </div>
                  </div>
                </div>

                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor" />
                    </div>
                    <div className="text">
                      <strong className="number">
                        <CountUp end={25} />
                      </strong>
                      <span>Ipari együttműködés</span>
                    </div>
                  </div>
                </div>

                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor" />
                    </div>
                    <div className="text">
                      {/* Lendulet, VKE, ERC_HU, OTKA, TéT, DAAD... */}
                      <strong className="number">
                        <CountUp end={20} />
                      </strong>
                      <span>Hazai és bilaterális projekt</span>
                    </div>
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

          <div className="row">
            <div className="col-12">
              <PublicationsCarousel nodes={data.publications.nodes} />
            </div>
          </div>
        </div>
      </div>

      <ToolsSection />
      <EventsSection />
    </Layout>
  )
}

export default ResearchPage

export const query = graphql`
  query ResearchPageQueries {
    projects: allMarkdownRemark(filter: { fields: { layout: { eq: "project" } } }) {
      nodes {
        fields {
          slug
        }
        html
        frontmatter {
          title
          subtitle
          url
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
    publications: allMarkdownRemark(filter: { fields: { layout: { eq: "publication" } } }) {
      nodes {
        fields {
          slug
        }
        html
        frontmatter {
          journalTitle
          year
          title
          url
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`
