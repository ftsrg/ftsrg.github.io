import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import Slider from 'react-slick'
import { AchievementProps } from '~utils/props'

type Props = {
  nodes: Array<AchievementProps>
}

const AchievementsCarousel: React.FC<Props> = ({ nodes }) => {
  const { t } = useI18next()

  return (
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
      {nodes.map((achievement) => {
        const image = getImage(achievement.featuredImage)
        return (
          <div key={achievement.translationPrefix} className="px-3 py-3">
            <div className="education-1-item">
              <figure className="thumbnail">
                {image && <GatsbyImage image={image} alt={achievement.translationPrefix} className="img-fluid" />}
                <div className="category bg-secondary">
                  <h3>{t(`${achievement.translationPrefix}.title`)}</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                <p className="desc mb-4">
                  <Trans
                    i18nKey={`${achievement.translationPrefix}.desc`}
                    components={achievement.links?.map((link) => (
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        link
                      </a>
                    ))}
                  />
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

export default AchievementsCarousel
