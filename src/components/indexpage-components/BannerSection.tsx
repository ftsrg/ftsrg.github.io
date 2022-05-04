import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const BannerSection: React.FC = () => {
  const { t } = useTranslation()

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
              <img src="/images/ftsrg-large-white.png" className="intro-img mx-auto" alt="..." />
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
