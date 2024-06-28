import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

type Props = {
  numOfMembers: number
  numOfPhD: number
}

const IntroSection: React.FC<Props> = ({ numOfMembers, numOfPhD }) => {
  const { t } = useI18next()

  return (
    <div id="about" className="site-section">
      <Container>
        <Row>
          <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
            <StaticImage
              src="../../../static/images/members2024.jpg"
              alt={t('about.members.title')}
              className="img-fluid"
              layout="fullWidth"
            />
          </Col>
          <Col lg={5} className="me-auto align-self-center order-2 order-lg-1">
            <h2 className="section-title-underline mb-5">
              <span>{t('about.intro.title')}</span>
            </h2>
            <p>{t('about.intro.description', { numOfMembers, numOfPhD })}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default IntroSection
