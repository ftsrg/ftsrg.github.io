import { graphql, PageProps } from 'gatsby'
import { ImageDataLike, StaticImage } from 'gatsby-plugin-image'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '~components/Breadcrumbs'
import TopHero from '~components/TopHero'
import Layout from '~layout/Layout'

const ContactPage: React.FC<PageProps> = () => {
  const tr = useI18next() // somehow destructuring didn't work

  return (
    <Layout href="/contact">
      <TopHero heroTitle="contact.heroTitle" heroDesc="contact.heroDesc" bgImageUrl="/images/bg_3.jpg" />
      <Breadcrumbs title="nav.contact.title" />

      <div className="site-section">
        <Container>
          <Row className="mb-6">
            <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
              <StaticImage src="../../static/images/bme-i-building.jpg" alt="..." className="img-fluid" layout="fullWidth" />
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
              <StaticImage src="../../static/images/ftsrg-rooms.jpg" alt="..." className="img-fluid" layout="fullWidth" />
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
              <StaticImage src="../../static/images/ftsrg-4th-floor.jpg" alt="..." className="img-fluid" layout="fullWidth" />
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

export const query = graphql`
  query ContactPageQueries($language: String!) {
    locales: allLocale(filter: { ns: { in: ["contact.translation", "nav.translation", "translation"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
