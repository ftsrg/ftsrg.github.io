import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PublicationProps } from '~utils/props'
import { MdSchool } from 'react-icons/md'
import { FaDatabase, FaTv } from 'react-icons/fa'
import Slider from 'react-slick'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Hero from '~components/Hero'

type Props = {
  publications: Array<PublicationProps>
}

const PublicationSection: React.FC<Props> = ({ publications }) => {
  const { t } = useI18next()

  return (
    <Hero id="publications">
      <Container>
        <Row className="mb-3 justify-content-center text-center">
          <Col lg={12} className="mb-3">
            <h2 className="section-title-underline style-2 mb-3">
              <span>{t('research.publications.title')}</span>
            </h2>
            <p className="publication-links">
              <a target="_blank" rel="noopener noreferrer" href="https://m2.mtmt.hu/gui2/?type=institutes&mode=browse&sel=institutes22230">
                <span className="pe-1" style={{ color: 'white' }}>
                  {t('research.publications.fullPubList')}
                </span>
                <MdSchool />
              </a>{' '}
              <span className="px-2">|</span>
              <a href="https://zenodo.org/communities/ftsrg" target="_blank" rel="noopener noreferrer">
                <span className="pe-1" style={{ color: 'white' }}>
                  {t('research.publications.dataSets')}
                </span>
                <FaDatabase />
              </a>{' '}
              <span className="px-2">|</span>
              <a href="https://speakerdeck.com/ftsrg/" target="_blank" rel="noopener noreferrer">
                <span className="pe-1" style={{ color: 'white' }}>
                  {t('research.publications.slides')}
                </span>
                <FaTv />
              </a>
            </p>
            <p>{t('research.publications.description')}</p>
          </Col>
        </Row>
        <Slider
          arrows
          dots
          infinite
          slidesToShow={3}
          slidesToScroll={1}
          className="py-3 dark-slick"
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
          {publications.map((publication) => {
            const featuredImage = getImage(publication.featuredImage)
            return (
              <div key={publication.title} className="px-2 py-2 h-100">
                <div className="education-1-item h-100 d-flex flex-column justify-content-between align-items-stretch">
                  <figure className="thumbnail">
                    {featuredImage && <GatsbyImage image={featuredImage} alt={publication.title} className="img-fluid" />}
                    <div className="category bg-primary" style={{ border: 'none' }}>
                      <h3>
                        {publication.journalTitle} {publication.year}
                      </h3>
                    </div>
                  </figure>
                  <div className="education-1-content pb-4 d-flex flex-column align-items-center flex-grow-1">
                    <h2>{publication.title}</h2>
                    <p style={{ color: 'gray' }}>{t(publication.description)}</p>
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
      </Container>
    </Hero>
  )
}

export default PublicationSection
