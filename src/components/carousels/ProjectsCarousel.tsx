import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Slider from 'react-slick'
import ProjectProps from '~props/project.props'

export interface ProjectsCarouselProps {
  nodes: Array<ProjectProps>
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ nodes }) => (
  <Slider
    arrows={false}
    dots
    slidesToShow={2}
    slidesToScroll={1}
    className="py-3"
    responsive={[
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1
        }
      }
    ]}
    autoplay
    autoplaySpeed={4000}
  >
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
  </Slider>
)

export default ProjectsCarousel
