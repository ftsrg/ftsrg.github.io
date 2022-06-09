import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import Slider from 'react-slick'
import { PublicationProps } from '~utils/props'

type Props = {
  nodes: Array<PublicationProps>
}

const PublicationsCarousel: React.FC<Props> = ({ nodes }) => {
  const { t } = useI18next()

  return (
    <Slider
      arrows
      dots
      infinite
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
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]}
      autoplay
      autoplaySpeed={4000}
    >
      {nodes.map((publication) => {
        const featuredImage = getImage(publication.featuredImage)
        return (
          <div key={publication.title} className="px-2 py-2 h-100">
            <div className="education-1-item h-100 d-flex flex-column justify-content-between align-items-stretch">
              <figure className="thumbnail">
                {featuredImage && <GatsbyImage image={featuredImage} alt={publication.title} className="img-fluid" />}
                <div className="category bg-secondary">
                  <h3>
                    {publication.journalTitle} {publication.year}
                  </h3>
                </div>
              </figure>
              <div className="education-1-content pb-4 d-flex flex-column align-items-center flex-grow-1">
                <h2>{publication.title}</h2>
                <p>{t(publication.description)}</p>
                <p className="mt-auto">
                  <a target="_blank" rel="noopener noreferrer" href={publication.url} className="btn btn-primary rounded-0 px-4">
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

export default PublicationsCarousel
