import { graphql, PageProps } from 'gatsby'
import React from 'react'
import CountUp from 'react-countup'
import { FaDatabase } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import VisibilitySensor from 'react-visibility-sensor'
import Breadcrumbs from '~components/Breadcrumbs'
import { EventsCarousel, ProjectsCarousel, PublicationsCarousel } from '~components/carousels'
import ToolsSection from '~components/research-components/ToolsSection'
import SEO from '~components/SEO'
import TopHero from '~components/TopHero'
import Layout from '~layout/Layout'
import ProjectProps from '~props/project.props'
import PublicationProps from '~props/publication.props'

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
  const [showCounter, setShowCounter] = React.useState(false)
  const reactToScroll = (isVisible: boolean) => {
    if (!showCounter && isVisible) setShowCounter(true)
  }

  return (
    <Layout>
      <SEO />
      <TopHero heroTitle="pages.research.heroTitle" heroDesc="pages.research.heroDesc" bgImageUrl="/images/bg_5.jpg" />
      <Breadcrumbs title="nav.research.title" />
      <div id="projects" className="site-section">
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
          <VisibilitySensor partialVisibility onChange={reactToScroll}>
            <div className="counter my-4 mb-5">
              <div className="row">
                <div className="col-12 col-md-4 text-center mb-4">
                  {/* EEMCN, FUTEG, HIDE, DECOS, RESIST, Sensoria, Deserec, Diana, Hidenets, SafeDMI, Amber, Genesys, Mogentes,
                      SecureChange, E-freight, R3-COP, CECRIS, Concerto, MONDO, R5-COP, ADVANCE, Arrowhead Tools, EMBrACE */}
                  <div className={`${showCounter ? 'counter-animated' : 'counter-unanimated'}`}>
                    <div>
                      <CountUp end={23} duration={3} className="text-primary h1 font-weight-bold" />
                    </div>
                    <div>EU-s kutatási projekt</div>
                  </div>
                </div>

                <div className="col-12 col-md-4 text-center mb-4">
                  <div className={`${showCounter ? 'counter-animated' : 'counter-unanimated'}`}>
                    <div>
                      <CountUp end={25} duration={3} className="text-primary h1 font-weight-bold" />
                    </div>
                    <div>Ipari együttműködés</div>
                  </div>
                </div>

                <div className="col-12 col-md-4 text-center mb-4">
                  <div className={`${showCounter ? 'counter-animated' : 'counter-unanimated'}`}>
                    {/* Lendulet, VKE, ERC_HU, OTKA, TéT, DAAD... */}
                    <div>
                      <CountUp end={20} duration={3} className="text-primary h1 font-weight-bold" />
                    </div>
                    <div>Hazai és bilaterális projekt</div>
                  </div>
                </div>
              </div>
            </div>
          </VisibilitySensor>
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
