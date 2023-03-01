import { StaticImage } from 'gatsby-plugin-image'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'

const cardsData = [
  {
    title: 'education.studentwork.card1.title',
    subTitleLinkText: 'Impulzus 41:2',
    subTitleLinkUrl: 'http://www.impulzus.com/content/archivum/41/2.pdf',
    page: 47,
    desc: 'education.studentwork.card1.desc'
  },
  {
    title: 'education.studentwork.card2.title',
    subTitleLinkText: 'Impulzus 42:2',
    subTitleLinkUrl: 'http://www.impulzus.com/content/archivum/42/2.pdf',
    page: 51,
    desc: 'education.studentwork.card2.desc'
  }
]

const StudentWorkSection: React.FC = () => {
  const { t } = useI18next()

  return (
    <div id="student-work" className="site-section">
      <Container>
        <h2 className="section-title-underline mb-5">
          <span>{t('education.studentwork.title')}</span>
        </h2>
        <Row className="justify-content-center">
          <Col xs={12}>
            <p>
              <Trans
                i18nKey="education.studentwork.description"
                components={[
                  <a href="http://inf.mit.bme.hu/edu/individual/taskgroups" target="_blank" rel="noopener noreferrer">
                    témalabortól
                  </a>
                ]}
              />
            </p>
          </Col>
          <Col md={9}>
            <StaticImage
              src="../../../static/images/students/thesis-topics.jpg"
              alt={t('education.studentwork.title')}
              className="img-fluid"
              layout="fullWidth"
            />
          </Col>
        </Row>
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
          {cardsData.map((data) => (
            <div key={data.title} className="px-3">
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <div>
                    <h3>{t(data.title)}</h3>
                    <span>
                      <a href={data.subTitleLinkUrl} target="_blank" rel="noopener noreferrer">
                        {data.subTitleLinkText}
                      </a>
                      , {t('education.studentwork.pageNumber', { pageNumber: data.page })}
                    </span>
                  </div>
                </div>
                <div>
                  <p>{t(data.desc)}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default StudentWorkSection
