import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import { EventProps } from '~utils/props'

type Props = {
  nodes: Array<EventProps>
}

const EventsCarousel: React.FC<Props> = ({ nodes }) => {
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
    >
      {nodes.map((event) => {
        const image = getImage(event.featuredImage)
        return (
          <div key={event.translationPrefix} className="px-3">
            <div className="ftco-testimonial-1">
              <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                {image && <GatsbyImage image={image} alt="..." className="img-fluid mr-3" />}
                <div>
                  <h3>{t(`${event.translationPrefix}.title`)}</h3>
                  <span>{t(`${event.translationPrefix}.subtitle`)}</span>
                </div>
              </div>
              <div>
                <p>{t(`${event.translationPrefix}.desc`)}</p>
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
