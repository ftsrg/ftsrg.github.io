import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const StudentsSection: React.FC = () => (
  <div id="students" className="site-section">
    <Container>
      <Row className="mb-5">
        <Col lg={6} className="mb-lg-0 mb-4">
          <img src="/images/students.jpg" alt="..." className="img-fluid" />
        </Col>
        <Col lg={5} className="ml-auto align-self-center">
          <h2 className="section-title-underline mb-5">
            <span>Hallgatóink</span>
          </h2>
          <p>
            Rengeteg tehetséges hallgatóval dolgozunk együtt. Ők demonstrátorként bekapcsolódnak az általunk oktatott tárgyainkba, a
            kutatási projektjeinkben pedig saját módszerek és eszközök fejlesztésében vesznek részt.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default StudentsSection
