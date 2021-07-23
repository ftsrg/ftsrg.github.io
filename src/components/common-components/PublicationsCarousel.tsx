import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import PublicationProps from '../../utils/props/publication.props'

export interface PublicationsCarouselProps {
  nodes: Array<PublicationProps>
}

const PublicationsCarousel: React.FC<PublicationsCarouselProps> = ({ nodes }) => (
  <div className="owl-slide-3 owl-carousel">
    {nodes.map((publication) => {
      const featuredImage = getImage(publication.featuredImage)
      return (
        <div key={publication.title} className="education-1-item">
          <figure className="thumbnail">
            {featuredImage && <GatsbyImage image={featuredImage} alt={publication.title} className="img-fluid" />}
            <div className="category bg-secondary">
              <h3>
                {publication.journalTitle} {publication.year}
              </h3>
            </div>
          </figure>
          <div className="education-1-content pb-4">
            <h2>{publication.title}</h2>
            <p>{publication.description}</p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href={publication.url} className="btn btn-primary rounded-0 px-4">
                Bővebben
              </a>
            </p>
          </div>
        </div>
      )
    })}
  </div>
)

export default PublicationsCarousel
