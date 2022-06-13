import { graphql, PageProps } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '~components/Breadcrumbs'
import { AchievementsCarousel, SpecializationsCarousel } from '~components/carousels'
import { StudentWork, Subjects } from '~components/education-components'
import Hero from '~components/Hero'
import TopHero from '~components/TopHero'
import Layout from '~layout/Layout'
import { AchievementProps, SpecializationProps, SubjectProps } from '~utils/props'

interface EducationPageProps extends PageProps {
  data: {
    subjects: {
      nodes: Array<SubjectProps>
    }
    specializations: {
      nodes: Array<SpecializationProps>
    }
    achievements: {
      nodes: Array<AchievementProps>
    }
    educationHero: ImageDataLike
  }
}

const EducationPage: React.FC<EducationPageProps> = ({ data }) => {
  const { t } = useI18next()

  return (
    <Layout href="/education">
      <TopHero heroTitle="education.heroTitle" heroDesc="education.heroDesc" bgImage={data.educationHero} />
      <Breadcrumbs title="nav.education.title" />

      <div id="specializations" className="site-section">
        <Container>
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="section-title-underline">
                <span>{t('education.specializations.title')}</span>
              </h2>
            </Col>
          </Row>
          <SpecializationsCarousel nodes={data.specializations.nodes} />
        </Container>
      </div>

      <Subjects nodes={data.subjects.nodes} />
      <StudentWork />

      <Hero id="talentcare" heroTitle="education.talentcare.title">
        <p>{t('education.talentcare.p1')}</p>
        <p>
          <Trans
            i18nKey="education.talentcare.p2"
            components={[
              // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content
              <a
                href="http://www.impulzus.com/blog/2021/11/16/tudomanyos-diakkori-konferencia/"
                target="_blank"
                rel="noopener noreferrer"
              />
            ]}
          />
        </p>
      </Hero>

      <div id="achievements" className="site-section">
        <Container>
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="section-title-underline">
                <span>{t('education.achievements.title')}</span>
              </h2>
            </Col>
          </Row>
          <AchievementsCarousel nodes={data.achievements.nodes} />
        </Container>
      </div>
    </Layout>
  )
}

export default EducationPage

export const query = graphql`
  query EducationPageQueries($language: String!) {
    subjects: allSubjectsYaml {
      nodes {
        translationPrefix
        type
        portalPage
        webPage
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
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
    achievements: allAchievementsYaml {
      nodes {
        translationPrefix
        links
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    locales: allLocale(filter: { ns: { in: ["education", "commons"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    educationHero: file(relativePath: { eq: "bg_1.jpg" }, sourceInstanceName: { eq: "staticImages" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
