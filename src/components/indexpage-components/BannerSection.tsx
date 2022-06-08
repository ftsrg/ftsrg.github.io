import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const BannerSection: React.FC = () => {
  const { t } = useI18next()

  return (
    <div id="banner">
      <div className="overlay" />
      <video playsInline autoPlay muted loop preload="none" poster="/images/drone-banner-poster.jpg">
        <source src="/images/drone-banner.mp4" type="video/mp4" />
      </video>
      <div className="intro intro-section background-4">
        <Container>
          <Row className="align-items-center">
            <Col lg="12" className="mx-auto text-center">
              <StaticImage
                src="../../../static/images/ftsrg-large-white.png"
                placeholder="none"
                width={400}
                alt={t('commons.ftsrgFullName')}
                className="intro-img mx-auto"
              />
              <h1>{t('commons.ftsrgFullName')}</h1>
              <hr className="ml-5 mr-5" />
              <h2 className="font-italic">{t('commons.ftsrgQuote')}</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default BannerSection
