import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SubjectProps } from '~utils/props'

type Props = {
  nodes: Array<SubjectProps>
}

const SubjectsSection: React.FC<Props> = ({ nodes }) => {
  const { t } = useI18next()

  return (
    <div id="courses" className="section-bg style-1">
      <Container>
        <Row className="text-center mb-5">
          <Col xs={12}>
            <h2 className="section-title-underline style-2">
              <span>{t('education.subjects.title')}</span>
            </h2>
          </Col>
        </Row>
        <Row>
          {nodes.map((subject) => {
            const featuredImage = subject.featuredImage ? getImage(subject.featuredImage) : null
            return (
              <Col lg={4} md={6} key={subject.translationPrefix} className="mb-4 course-1-container">
                <div className="course-1-item">
                  <div>
                    <figure className="thumbnail">
                      {featuredImage && <GatsbyImage image={featuredImage} className="img-fluid" alt={subject.translationPrefix} />}
                      <div className="price">{t(subject.type)}</div>
                      <div className="category">
                        <h3>{t(`${subject.translationPrefix}.title`)}</h3>
                      </div>
                    </figure>
                    <div className="course-1-content">
                      <h2>{t(`${subject.translationPrefix}.heading`)}</h2>
                      <p className="desc mb-4">{t(`${subject.translationPrefix}.desc`)}</p>
                    </div>
                  </div>
                  <div className="course-1-footer px-5">
                    <a target="_blank" rel="noopener noreferrer" href={subject.portalPage} className="btn btn-secondary rounded-0 w-50">
                      {t('education.subjects.portalPage')}
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={subject.webPage} className="btn btn-primary rounded-0 w-50">
                      {t('education.subjects.webPage')}
                    </a>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default SubjectsSection
