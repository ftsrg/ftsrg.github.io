import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Achievements, Specializations, StudentWork, Subjects, TalentCare } from '../components/education-components'
import SEO from '../components/SEO'
import Layout from '../layout/Layout'
import SubjectProps from '../utils/props/subject.props'

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
      <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: `url('/images/bg_1.jpg')` }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h2 className="mb-0">Oktatás és tehetséggondozás</h2>
              <p>
                A csoport a mérnökinformatikus BSc, MSc és PhD képzésben is jelen van, választható tárgyaink pedig izgalmas és naprakész
                tudást adnak hallgatóinknak.
              </p>
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
          <span className="current">Oktatás</span>
        </div>
      </div>

      <Specializations />
      <Subjects nodes={data.subjects.nodes} />
      <StudentWork />
      <TalentCare />
      <Achievements />
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
