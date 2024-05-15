import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike, StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { EventsCarousel, ProjectsCarousel, PublicationsCarousel, SpecializationsCarousel } from '~components/carousels'
import { About, Competences, Partners } from '~components/indexpage-components'
import {
  Banner,
  Invitation,
  Education,
  Research,
  Publications,
  Program,
  Social
} from '~components/ftsrg30page-components'
import Layout from '~layout/Layout'
import { EventProps, ProjectProps, PublicationProps, SpecializationProps } from '~utils/props'
import PartnerProps from '~utils/props/partner.props'
import { ProjectCounters, Tools } from '~components/research-components'
import { MdSchool } from 'react-icons/md'
import { FaDatabase, FaTv } from 'react-icons/fa'
import EducationCounters from '~components/indexpage-components/EducationCounters'
import Hero from '~components/Hero'
import Slider from 'react-slick'
import EventsSection from '~components/ftsrg30page-components/EventsSection'

interface IndexPageProps extends PageProps {
  data: {
    specializations: {
      nodes: Array<SpecializationProps>
    }
    projects: {
      nodes: Array<ProjectProps>
    }
    partners: {
      nodes: Array<PartnerProps>
    }
    publications: {
      nodes: Array<PublicationProps>
    }
    events: {
      nodes: Array<EventProps>
    }
    aboutHero: ImageDataLike
    partnerHero: ImageDataLike
    toolsHero: ImageDataLike
  }
}

const Ftsrg30Page: React.FC<IndexPageProps> = ({ data }) => {
  const { t } = useI18next()

  return (
    <Layout href="/ftsrg30">
      <Banner />
      <Invitation />
      <Program />
      <Competences />
      <Education specializations={data.specializations.nodes} />
      <Partners nodes={data.partners.nodes} heroBackgroundImage={data.partnerHero} />
      <Research projects={data.projects.nodes} />
      <Publications publications={data.publications.nodes} />
      <EventsSection events={data.events.nodes} />
      <Tools heroBackgroundImage={data.toolsHero} />
      <Social />
    </Layout>
  )
}

export default Ftsrg30Page

export const query = graphql`
  query IndexPageQueries($language: String!) {
    specializations: allSpecializationsYaml {
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
    locales: allLocale(filter: { ns: { in: ["home", "research", "education", "commons"] }, language: { eq: $language } }) {
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
    toolsHero: file(relativePath: { eq: "bg_4.jpg" }, sourceInstanceName: { eq: "staticImages" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
