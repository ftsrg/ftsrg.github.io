import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { FormerMembers, Intro, Members, Students } from '~components/aboutpage-components'
import Breadcrumbs from '~components/Breadcrumbs'
import TopHero from '~components/TopHero'
import Layout from '~layout/Layout'
import { MemberProps } from '~utils/props'

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
    <Layout href="/about">
      <TopHero heroTitle="about.heroTitle" heroDesc="about.heroDesc" bgImageUrl="/images/bg_6.jpg" />
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
        firstName
        lastName
        title
        position
        linkedInPage
        homePage
        scholarPage
        githubPage
        twitterPage
        avatar {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    formermembers: allInactiveYaml {
      nodes {
        firstName
        lastName
        title
        linkedInPage
      }
    }
  }
`
