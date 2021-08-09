import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const StudentsSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div id="students" className="site-section">
      <Container>
        <Row className="mb-5">
          <Col lg={6} className="mb-lg-0 mb-4">
            <img src="/images/students.jpg" alt="..." className="img-fluid" />
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
