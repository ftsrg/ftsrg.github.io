import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import EducationCounters from './EducationCounters'

const cardsData = [
  {
    category: 'home.education.card1.category',
    title: 'home.education.card1.title',
    desc: 'home.education.card1.desc',
    path: '/education',
    thumbnail: '/images/education.png'
  },
  {
    category: 'home.education.card2.category',
    title: 'home.education.card2.title',
    desc: 'home.education.card2.desc',
    path: '/education#talentcare',
    thumbnail: '/images/student-project.jpg'
  },
  {
    category: 'home.education.card3.category',
    title: 'home.education.card3.title',
    desc: 'home.education.card3.desc',
    path: '/education#achievements',
    thumbnail: '/images/awards.jpg'
  }
]

const EducationSection: React.FC = () => {
  const { t } = useI18next()

  return (
    <div id="education" className="site-section">
      <Container>
        <div className="mb-5 text-center">
          <h2 className="section-title-underline">
            <span>{t('home.education.title')}</span>
          </h2>
        </div>
        <EducationCounters />
        <Slider
          arrows={false}
          dots
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
          {cardsData.map((data) => (
            <div key={data.category} className="p-2">
              <div className="education-1-item">
                <figure className="thumbnail">
                  <img src={data.thumbnail} alt="..." className="img-fluid" />
                  <div className="category bg-secondary">
                    <h3>{t(data.category)}</h3>
                  </div>
                </figure>
                <div className="education-1-content pb-4">
                  <h2>{t(data.title)}</h2>
                  <p className="desc mb-4">{t(data.desc)}</p>
                  <Link to={data.path} className="btn btn-primary rounded-0 px-4">
                    {t('commons.readMore')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default EducationSection
