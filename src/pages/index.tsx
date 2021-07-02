import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { About, Banner, Competences, Education, News, Partners, Projects } from '../components/indexpage-components'
import SEO from '../components/SEO'
import Layout from '../layout/Layout'
import ProjectProps from '../utils/props/project.props'

interface IndexPageProps extends PageProps {
  data: {
    projects: {
      nodes: {
        fields: {
          slug: string
        }
        html: string
        frontmatter: ProjectProps
      }[]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Banner />
      <Competences />
      <Education />
      <About />
      <div id="projects" className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4">
              <h2 className="section-title-underline">
                <span>Projektjeink</span>
              </h2>
            </div>
          </div>
          <ProjectsCarousel nodes={data.projects.nodes} />
        </div>
      </div>
      <Partners />
      <News />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQueries {
    projects: allMarkdownRemark(filter: { fields: { layout: { eq: "project" } } }) {
      nodes {
        fields {
          slug
        }
        html
        frontmatter {
          title
          subtitle
          url
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`
