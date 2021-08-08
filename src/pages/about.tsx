import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { FormerMembers, Intro, Members, Students } from '~components/aboutpage-components'
import Breadcrumbs from '~components/Breadcrumbs'
import SEO from '~components/SEO'
import TopHero from '~components/TopHero'
import Layout from '~layout/Layout'
import MemberProps from '~props/member.props'

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
  return (
    <Layout>
      <SEO />
      <TopHero heroTitle="pages.about.heroTitle" heroDesc="pages.about.heroDesc" bgImageUrl="/images/bg_6.jpg" />
      <Breadcrumbs title="nav.about.title" />
      <Intro />
      <Members nodes={data.members.nodes} />
      <FormerMembers nodes={data.formermembers.nodes} />
      <Students />
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
