import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import { SpecializationProps } from '~utils/props'

type Props = {
  nodes: Array<SpecializationProps>
}

const SpecializationsCarousel: React.FC<Props> = ({ nodes }) => {
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
      {nodes.map((spec) => {
        const image = getImage(spec.featuredImage)
        return (
          <div key={spec.translationPrefix} className="px-3">
            <div className="ftco-testimonial-1">
              <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                {image && <GatsbyImage image={image} alt={spec.translationPrefix} className="img-fluid img-rounded mr-3" />}
                <div>
                  <h3>{t(`${spec.translationPrefix}.title`)}</h3>
                  <span>{t(`${spec.translationPrefix}.subtitle`)}</span>
                </div>
              </div>
              <div>
                <p>{t(`${spec.translationPrefix}.p1`)}</p>
                <p>{t(`${spec.translationPrefix}.p2`)}</p>
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
