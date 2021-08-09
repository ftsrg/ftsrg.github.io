import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Breadcrumbs from '~components/Breadcrumbs'
import { SpecializationsCarousel, StudentAchievementsCarousel } from '~components/carousels'
import { StudentWork, Subjects } from '~components/education-components'
import Hero from '~components/Hero'
import SEO from '~components/SEO'
import TopHero from '~components/TopHero'
import Layout from '~layout/Layout'
import { SpecializationProps, StudentAchievementProps, SubjectProps } from '~utils/props'

interface EducationPageProps extends PageProps {
  data: {
    subjects: {
      nodes: Array<SubjectProps>
    }
    specializations: {
      nodes: Array<SpecializationProps>
    }
    studentAchievements: {
      nodes: Array<StudentAchievementProps>
    }
  }
}

const EducationPage: React.FC<EducationPageProps> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO />
      <TopHero heroTitle="pages.education.heroTitle" heroDesc="pages.education.heroDesc" bgImageUrl="/images/bg_1.jpg" />
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
        <p>{t('education.talentcare.p2')}</p>
      </Hero>

      <div id="achievements" className="site-section">
        <Container>
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="section-title-underline">
                <span>{t('education.studentAchievements.title')}</span>
              </h2>
            </Col>
          </Row>
          <StudentAchievementsCarousel nodes={data.studentAchievements.nodes} />
        </Container>
      </div>
    </Layout>
  )
}

export default EducationPage

export const query = graphql`
  query EducationPageQueries {
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
        title
        subtitle
        paragraphs
        url
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    studentAchievements: allStudentAchievementsYaml {
      nodes {
        category
        descHtmlRaw
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
