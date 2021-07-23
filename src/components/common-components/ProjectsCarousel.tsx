import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import ProjectProps from '../../utils/props/project.props'

export interface ProjectsCarouselProps {
  nodes: Array<ProjectProps>
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ nodes }) => (
  <div className="owl-slide owl-carousel">
    {nodes.map((project) => {
      const image = getImage(project.featuredImage)
      return (
        <div key={project.title} className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            {image && <GatsbyImage image={image} alt="..." className="img-fluid mr-3" />}
            <div>
              <h3>{project.title}</h3>
              <span>{project.subtitle}</span>
            </div>
          </div>
          <div>
            <p>{project.description}</p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href={project.url}>
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
