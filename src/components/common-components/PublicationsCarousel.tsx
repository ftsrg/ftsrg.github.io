import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Slider from 'react-slick'
import PublicationProps from '../../utils/props/publication.props'

export interface PublicationsCarouselProps {
  nodes: Array<PublicationProps>
}

const PublicationsCarousel: React.FC<PublicationsCarouselProps> = ({ nodes }) => (
  <Slider
    infinite={false}
    slidesToShow={3}
    slidesToScroll={1}
    className="py-3"
    responsive={[
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1
        }
      }
    ]}
  >
    {nodes.map((publication) => {
      const featuredImage = getImage(publication.featuredImage)
      return (
        <div key={publication.fields.slug} className="p-2">
          <div className="education-1-item">
            <figure className="thumbnail">
              {featuredImage && <GatsbyImage image={featuredImage} alt={publication.frontmatter.title} className="img-fluid" />}
              <div className="category bg-secondary">
                <h3>
                  {publication.frontmatter.journalTitle} {publication.frontmatter.year}
                </h3>
              </div>
            </figure>
            <div className="education-1-content pb-4">
              <h2>{publication.frontmatter.title}</h2>
              {/* eslint-disable-next-line react/no-danger */}
              <div className="desc mb-4" dangerouslySetInnerHTML={{ __html: publication.html }} />
              <p>
                <a target="_blank" rel="noopener noreferrer" href={publication.frontmatter.url} className="btn btn-primary rounded-0 px-4">
                  Bővebben
                </a>
              </p>
            </div>
          </div>
        </div>
      )
    })}
  </Slider>
)

export default PublicationsCarousel
