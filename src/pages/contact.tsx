import { PageProps } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import Breadcrumbs from '~components/Breadcrumbs'
import SEO from '~components/SEO'
import TopHero from '~components/TopHero'
import Layout from '~layout/Layout'

const ContactPage: React.FC<PageProps> = () => {
  const tr = useTranslation() // somehow destructuring didn't work

  return (
    <Layout>
      <SEO />
      <TopHero heroTitle="pages.contact.heroTitle" heroDesc="pages.contact.heroDesc" bgImageUrl="/images/bg_3.jpg" />
      <Breadcrumbs title="nav.contact.title" />

      <div className="site-section">
        <Container>
          <Row className="mb-6">
            <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
              <img src="/images/bme-i-building.jpg" alt="..." className="img-fluid" />
            </Col>
            <Col lg={5} className="mr-auto align-self-center order-2 order-lg-1">
              <h2 className="section-title-underline mb-5">
                <span>{tr.t('contact.address.title')}</span>
              </h2>
              <p>
                {tr.t('contact.address.line1')}
                <br />
                {tr.t('contact.address.line2')}
                <br />
                {tr.t('contact.address.line3')}
              </p>
              <p>
                {tr.t('contact.address.gpsCoord')}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/BME+Building+I/@47.4724731,19.0594159,18z/data=!4m5!3m4!1s0x4741ddabb29bd997:0x4b453205e2d0f96b!8m2!3d47.4726765!4d19.060026"
                >
                  N47.4724731, E19.0594159
                </a>
              </p>
            </Col>
          </Row>
          <Row className="mb-6">
            <Col lg={6} className="mb-lg-0 mb-4">
              <img src="/images/ftsrg-rooms.jpg" alt="..." className="img-fluid" />
            </Col>
            <Col lg={5} className="ml-auto align-self-center">
              <h2 className="section-title-underline mb-5">
                <span>{tr.t('contact.inBuilding.title')}</span>
              </h2>
              <p>{tr.t('contact.inBuilding.p1')}</p>
              <p>{tr.t('contact.inBuilding.p2')}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className="order-1 order-lg-2 mb-4 mb-lg-0">
              <img src="/images/ftsrg-4th-floor.jpg" alt="Hallgatói folyosó" className="img-fluid" />
            </Col>
            <Col lg={5} className="mr-auto align-self-center order-2 order-lg-1">
              <h2 className="section-title-underline mb-5">
                <span>{tr.t('contact.studentFloor.title')}</span>
              </h2>
              <p>{tr.t('contact.studentFloor.p1')}</p>
              <p>{tr.t('contact.studentFloor.p2')}</p>
              <p>
                <Trans
                  i18nKey="contact.studentFloor.p3"
                  components={[
                    <a href="https://www.mit.bme.hu/general/alapitvany" target="_blank" rel="noopener noreferrer">
                      Schnell Alapítványnak
                    </a>
                  ]}
                />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default ContactPage
