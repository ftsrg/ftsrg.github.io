import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'
import FormerMembersSection from '../components/aboutpage-components/FormerMembersSection'
import IntroSection from '../components/aboutpage-components/IntroSection'
import MembersSection from '../components/aboutpage-components/MembersSection'
import StudentsSection from '../components/aboutpage-components/StudentsSection'
import SEO from '../components/SEO'
import Layout from '../layout/Layout'
import MemberProps from '../utils/props/member.props'

interface AboutPageProps extends PageProps {
  data: {
    members: {
      nodes: Array<MemberProps>
    }
    formermembers: {
      nodes: Array<MemberProps>
    }
  }
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO />
      <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: "url('/images/bg_6.jpg')" }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h2 className="mb-0">A kutatócsoport</h2>
              <p>Munkatársaink és hallgatóink bemutatása</p>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-breadcrumns border-bottom">
        <div className="container">
          <a href="/">Kezdőlap</a>
          <span className="mx-3 icon-keyboard_arrow_right" />
          <span className="current">Rólunk</span>
        </div>
      </div>

      <IntroSection />
      <MembersSection nodes={data.members.nodes} />
      <FormerMembersSection nodes={data.formermembers.nodes} />
      <StudentsSection />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQueries {
    members: allActiveYaml {
      nodes {
        name
        title
        position
        linkedInPage
        homePage
        scholarPage
        githubPage
        avatar {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    formermembers: allInactiveYaml {
      nodes {
        name
        title
        linkedInPage
      }
    }
  }
`
