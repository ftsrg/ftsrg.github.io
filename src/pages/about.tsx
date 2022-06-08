import { graphql, PageProps } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
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
    aboutHero: ImageDataLike
    formerMembersHero: ImageDataLike
  }
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  return (
    <Layout href="/about">
      <TopHero heroTitle="about.heroTitle" heroDesc="about.heroDesc" bgImage={data.aboutHero} />
      <Breadcrumbs title="nav.about.title" />
      <Intro />
      <Members nodes={data.members.nodes} />
      <FormerMembers nodes={data.formermembers.nodes} heroBackgroundImage={data.formerMembersHero} />
      <Students />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQueries($language: String!) {
    members: allActiveYaml {
      nodes {
        firstName
        lastName
        title
        position
        linkedInPage
        homePage
        mtmtPage
        githubPage
        twitterPage
        cvPage
        dblpPage
        orcidPage
        scholarPage
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
    locales: allLocale(filter: { ns: { in: ["about", "commons"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    aboutHero: file(relativePath: { eq: "bg_6.jpg" }, sourceInstanceName: { eq: "staticImages" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    formerMembersHero: file(relativePath: { eq: "panorama.jpg" }, sourceInstanceName: { eq: "staticImages" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
