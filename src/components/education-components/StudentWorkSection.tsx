import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'

const cardsData = [
  {
    title: 'Rendszertervezés (BSc)',
    subTitleLinkText: 'Impulzus 41:2',
    subTitleLinkUrl: 'http://www.impulzus.com/content/archivum/41/2.pdf',
    page: 47,
    desc: `„Ezt a fajta rendszerben gondolkodást jól tükrözi az oktatás, miközben a tanultak kellően konkrétak, gyakorlatban is
    hasznosak. Sikerült megtalálnom a kutatómunka örömét is, ugyanis a csoportban különösen figyelnek a hallgatók önálló szakmai
    tevékenységére.”`
  },
  {
    title: 'Kritikus rendszerek (MSc)',
    subTitleLinkText: 'Impulzus 42:2',
    subTitleLinkUrl: 'http://www.impulzus.com/content/archivum/42/2.pdf',
    page: 51,
    desc: `„A BSc ágazat és az MSc szakirány messzemenően felülmúlta a korábbi elképzeléseimet és elvárásaimat. Nem gondoltam volna, hogy
    ennyi érdekes témával lehet itt foglalkozni.”`
  }
]

const StudentWorkSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div id="student-work" className="site-section">
      <Container>
        <h2 className="section-title-underline mb-5">
          <span>Önálló munka</span>
        </h2>
        <Row className="justify-content-center">
          <Col xs={12}>
            <p>
              Hallgatóink változatos témákon dolgozhatnak már a{' '}
              <a href="https://inf.mit.bme.hu/edu/individual/taskgroups" target="_blank" rel="noopener noreferrer">
                témalabortól
              </a>{' '}
              kezdődően: az ipari partnereink által inspirált gyakorlati fejlesztési feladatoktól kezdve az elméleti jellegű kutatási
              témákig széles spektrumon biztosítunk konzultációt. Célunk, hogy hallgatóink olyan témákat találjanak, amikben elmélyülnek és
              szakmailag fejlődnek.
            </p>
          </Col>
          <Col md={9}>
            <p>
              <img src="/images/students/thesis-topics.jpg" alt="Szakdolgozat és diplomaterv témák" className="img-fluid" />
            </p>
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
