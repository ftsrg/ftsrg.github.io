import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SubjectProps } from '~utils/props'

interface SubjectsSectionProps {
  nodes: Array<SubjectProps>
}

const SubjectsSection: React.FC<SubjectsSectionProps> = ({ nodes }) => (
  <div id="courses" className="section-bg style-1">
    <Container>
      <h2 className="section-title-underline style-2 mb-5">
        <span>Tantárgyaink</span>
      </h2>
      <Row>
        {nodes.map((subject) => {
          const featuredImage = subject.featuredImage ? getImage(subject.featuredImage) : null
          return (
            <Col lg={4} md={6} key={subject.title} className="mb-4 course-1-container">
              <div className="course-1-item">
                <div>
                  <figure className="thumbnail">
                    {featuredImage && <GatsbyImage image={featuredImage} className="img-fluid" alt={subject.title} />}
                    <div className="price">{subject.type}</div>
                    <div className="category">
                      <h3>{subject.title}</h3>
                    </div>
                  </figure>
                  <div className="course-1-content">
                    <h2>{subject.heading}</h2>
                    <p className="desc mb-4">{subject.description}</p>
                  </div>
                </div>
                <div className="course-1-footer px-5">
                  <a target="_blank" rel="noopener noreferrer" href={subject.portalPage} className="btn btn-secondary rounded-0 w-50">
                    Adatlap
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={subject.webPage} className="btn btn-primary rounded-0 w-50">
                    Web
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

export default SubjectsSection
