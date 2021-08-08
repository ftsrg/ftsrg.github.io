import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Breadcrumbs from '~components/Breadcrumbs'
import { SpecializationsCarousel, StudentAchievementsCarousel } from '~components/carousels'
import { StudentWork, Subjects, TalentCare } from '~components/education-components'
import PageHero from '~components/PageHero'
import SEO from '~components/SEO'
import Layout from '~layout/Layout'
import SubjectProps from '~props/subject.props'

interface EducationPageProps extends PageProps {
  data: {
    subjects: {
      nodes: Array<SubjectProps>
    }
  }
}

const EducationPage: React.FC<EducationPageProps> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <PageHero heroTitle="pages.education.heroTitle" heroDesc="pages.education.heroDesc" bgImageUrl="/images/bg_1.jpg" />
      <Breadcrumbs title="nav.education.title" />
      <div id="specializations" className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4">
              <h2 className="section-title-underline">
                <span>Specializációk</span>
              </h2>
            </div>
          </div>
          <SpecializationsCarousel />
        </div>
      </div>

      <Subjects nodes={data.subjects.nodes} />
      <StudentWork />
      <TalentCare />

      <div id="achievements" className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4">
              <h2 className="section-title-underline">
                <span>Hallgatóink eredményei</span>
              </h2>
            </div>
          </div>
          <StudentAchievementsCarousel />
        </div>
      </div>
    </Layout>
  )
}

export default EducationPage

export const query = graphql`
  query EducationPageQueries {
    subjects: allSubjectsYaml {
      nodes {
        title
        type
        heading
        description
        portalPage
        webPage
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
