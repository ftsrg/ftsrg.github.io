import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import Slider from 'react-slick'
import { SpecializationProps } from '~utils/props'

type Props = {
  nodes: Array<SpecializationProps>
}

const SpecializationsCarousel: React.FC<Props> = ({ nodes }) => {
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
      {nodes.map((spec) => {
        const image = getImage(spec.featuredImage)
        return (
          <div key={spec.translationPrefix} className="px-3 h-100">
            <div className="ftco-testimonial-1 d-flex flex-column justify-content-between align-items-stretch h-100">
              <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                {image && (
                  <GatsbyImage
                    image={image}
                    alt={spec.translationPrefix}
                    className="img-fluid img-rounded mr-3 flex-shrink-0 align-self-start mt-0"
                  />
                )}
                <div>
                  <h3>{t(`${spec.translationPrefix}.title`)}</h3>
                  <span>{t(`${spec.translationPrefix}.subtitle`)}</span>
                </div>
              </div>
              <div>
                <p>{t(`${spec.translationPrefix}.p1`)}</p>
                <p>{t(`${spec.translationPrefix}.p2`)}</p>
              </div>
              <div>
                <p>
                  <a target="_blank" rel="noopener noreferrer" href={spec.url}>
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

export default SpecializationsCarousel
