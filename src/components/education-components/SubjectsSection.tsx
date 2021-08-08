import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import SubjectProps from '~props/subject.props'

interface SubjectsSectionProps {
  nodes: Array<SubjectProps>
}

const SubjectsSection: React.FC<SubjectsSectionProps> = ({ nodes }) => (
  <div id="courses" className="section-bg style-1">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-7 text-center mb-4">
          <h2 className="section-title-underline style-2">
            <span>Tantárgyaink</span>
          </h2>
        </div>
      </div>
      <div className="row">
        {nodes.map((subject) => {
          const featuredImage = subject.featuredImage ? getImage(subject.featuredImage) : null
          return (
            <div key={subject.title} className="col-lg-4 col-md-6 mb-4 course-1-container">
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
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default SubjectsSection
