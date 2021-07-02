import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import ProjectProps from '../../utils/props/project.props'

export interface ProjectsCarouselProps {
  nodes: {
    fields: {
      slug: string
    }
    html: string
    frontmatter: ProjectProps
  }[]
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ nodes }) => (
  <div className="owl-slide owl-carousel">
    {nodes.map((project) => {
      const image = getImage(project.frontmatter.featuredImage)
      return (
        <div key={project.fields.slug} className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            {image && <GatsbyImage image={image} alt="..." className="img-fluid mr-3" />}
            <div>
              <h3>{project.frontmatter.title}</h3>
              <span>{project.frontmatter.subtitle}</span>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
            <p>
              <a target="_blank" rel="noopener noreferrer" href={project.frontmatter.url}>
                Bővebben
              </a>
            </p>
          </div>
        </div>
      )
    })}
  </div>
)

export default ProjectsCarousel
