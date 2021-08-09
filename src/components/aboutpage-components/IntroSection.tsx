import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const IntroSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div id="about" className="site-section">
      <Container>
        <Row>
          <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
            <img src="/images/members.jpg" alt="..." className="img-fluid" />
          </Col>
          <Col lg={5} className="mr-auto align-self-center order-2 order-lg-1">
            <h2 className="section-title-underline mb-5">
              <span>{t('about.intro.title')}</span>
            </h2>
            <p>{t('about.intro.description')}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default IntroSection
