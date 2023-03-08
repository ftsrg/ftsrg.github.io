import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SubjectProps } from '~utils/props'
import { subjectSort } from '~utils/subject-order'

type Props = {
  nodes: Array<SubjectProps & { parent: { name: string } }>
  subjectPages: Array<{ language: string; subjectShortName: string }>
}

const SubjectsSection: React.FC<Props> = ({ nodes, subjectPages }) => {
  const { t, language } = useI18next()

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
        <Row className="align-items-stretch">
          {nodes.sort(subjectSort(t)).map((subject) => {
            const thumbnailImage = subject.thumbnailImage ? getImage(subject.thumbnailImage) : null
            const subjectPage =
              subjectPages.find((page) => page.subjectShortName === subject.parent.name && page.language === language) ||
              subjectPages.find((page) => page.subjectShortName === subject.parent.name)

            return (
              <Col lg={4} md={6} key={subject.subjectName} className="mb-4 course-1-container">
                <div className="course-1-item h-100 d-flex flex-column">
                  <div>
                    <figure className="thumbnail">
                      {thumbnailImage && <GatsbyImage image={thumbnailImage} className="img-fluid" alt={subject.subjectName} />}
                      <div className="category">
                        <h3>{t(subject.subjectName)}</h3>
                        <div className="price">{t(subject.type)}</div>
                      </div>
                    </figure>
                    <div className="course-1-content">
                      <p className="desc mb-4">{t(subject.subjectDescription)}</p>
                    </div>
                  </div>
                  <div className="course-1-footer px-5">
                    {subject.subjectCode && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://portal.vik.bme.hu/kepzes/targyak/${subject.subjectCode}/${language}`}
                        className="btn btn-secondary rounded-0 w-50"
                      >
                        {t('education.subjects.portalPage')}
                      </a>
                    )}
                    {subjectPage && (
                      <Link
                        to={`/education/${subjectPage.subjectShortName}`}
                        language={subjectPage.language}
                        className="btn btn-primary rounded-0 w-50"
                      >
                        {t('education.subjects.webPage')}
                        {subjectPage.language !== language && ` (${subjectPage.language.toUpperCase()})`}
                      </Link>
                    )}
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
