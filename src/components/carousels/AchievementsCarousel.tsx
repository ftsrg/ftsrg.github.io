import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import { AchievementProps } from '~utils/props'

type Props = {
  nodes: Array<AchievementProps>
}

const AchievementsCarousel: React.FC<Props> = ({ nodes }) => {
  const { t } = useTranslation()

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
          <div key={achievement.category} className="px-3 py-3">
            <div className="education-1-item">
              <figure className="thumbnail">
                {image && <GatsbyImage image={image} alt={achievement.category} className="img-fluid" />}
                <div className="category bg-secondary">
                  <h3>{t(achievement.category)}</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                {/* eslint-disable-next-line react/no-danger */}
                <p className="desc mb-4" dangerouslySetInnerHTML={{ __html: achievement.descHtmlRaw }} />
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

export default AchievementsCarousel
