import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const StudentsSection: React.FC = () => {
  const { t } = useI18next()

  return (
    <div id="students" className="site-section">
      <Container>
        <Row className="mb-5">
          <Col lg={6} className="mb-lg-0 mb-4">
            <StaticImage
              src="../../../static/images/students.jpg"
              alt={t('about.students.title')}
              className="img-fluid"
              layout="fullWidth"
            />
          </Col>
          <Col lg={5} className="ml-auto align-self-center">
            <h2 className="section-title-underline mb-5">
              <span>{t('about.students.title')}</span>
            </h2>
            <p>{t('about.students.paragraph')}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StudentsSection
