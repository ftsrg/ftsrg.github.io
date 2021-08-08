import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import { ProjectProps } from '~utils/props'

export interface ProjectsCarouselProps {
  nodes: Array<ProjectProps>
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ nodes }) => {
  const { t } = useTranslation()

  return (
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
          <div key={project.title} className="px-3">
            <div className="ftco-testimonial-1">
              <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                {image && <GatsbyImage image={image} alt="..." className="img-fluid mr-3" />}
                <div>
                  <h3>{t(project.title)}</h3>
                  <span>{t(project.subtitle)}</span>
                </div>
              </div>
              <div>
                <p>{t(project.description)}</p>
                <p>
                  <a target="_blank" rel="noopener noreferrer" href={project.url}>
                    {t('commons.readMore')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

export default ProjectsCarousel
