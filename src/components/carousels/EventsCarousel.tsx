import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import Slider from 'react-slick'
import { EventProps } from '~utils/props'

type Props = {
  nodes: Array<EventProps>
}

const EventsCarousel: React.FC<Props> = ({ nodes }) => {
  const { t } = useI18next()

  return (
    <Slider
      arrows
      dots
      infinite
      slidesToShow={2}
      slidesToScroll={1}
      className="py-3"
      responsive={[
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
      {nodes.map((event) => {
        const image = getImage(event.featuredImage)
        return (
          <div key={event.translationPrefix} className="px-3 h-100">
            <div className="ftco-testimonial-1 d-flex flex-column justify-content-between align-items-stretch h-100">
              <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                {image && <GatsbyImage image={image} alt="..." className="img-fluid me-3 align-self-start mt-0 flex-shrink-0" />}
                <div>
                  <h3>{t(`${event.translationPrefix}.title`)}</h3>
                  <span>{t(`${event.translationPrefix}.subtitle`)}</span>
                </div>
              </div>
              <div>
                <p>{t(`${event.translationPrefix}.desc`)}</p>
              </div>
              <div>
                <p>
                  <a target="_blank" rel="noopener noreferrer" href={event.url}>
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

export default EventsCarousel
