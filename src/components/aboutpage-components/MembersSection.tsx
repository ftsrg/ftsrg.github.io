import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaGithub, FaGraduationCap, FaHome, FaLinkedin } from 'react-icons/fa'
import MemberProps from '../../utils/props/member.props'

interface MembersSectionProps {
  nodes: Array<MemberProps>
}

const MembersSection: React.FC<MembersSectionProps> = ({ nodes }) => (
  <div id="members" className="site-section">
    <div className="container">
      <div className="row mb-5 justify-content-center text-center">
        <div className="col-lg-4 mb-5">
          <h2 className="section-title-underline mb-5">
            <span>A kutatócsoport tagjai</span>
          </h2>
        </div>
      </div>

      <div className="row">
        {nodes.map((member) => {
          const avatar = member.avatar ? getImage(member.avatar) : null
          return (
            <div key={member.name} className="col-lg-3 col-md-4 mb-5 mb-lg-5">
              <div className="feature-1 border person text-center">
                {avatar && <GatsbyImage image={avatar} className="img-fluid" alt={member.name} />}
                <div className="feature-1-content">
                  <h2>
                    {member.name}
                    {member.title && `, ${member.title}`}
                  </h2>
                  <span className="position mb-3 d-block">{member.position}</span>
                  <p>
                    {member.homePage && (
                      <a target="_blank" rel="noopener noreferrer" href={member.homePage}>
                        <FaHome style={{ marginRight: '0.25rem' }} size="1.25rem" />
                      </a>
                    )}
                    {member.githubPage && (
                      <a target="_blank" rel="noopener noreferrer" href={member.githubPage}>
                        <FaGithub style={{ marginRight: '0.25rem' }} size="1.25rem" />
                      </a>
                    )}
                    {member.linkedInPage && (
                      <a target="_blank" rel="noopener noreferrer" href={member.linkedInPage}>
                        <FaLinkedin style={{ marginRight: '0.25rem' }} size="1.25rem" />
                      </a>
                    )}
                    {member.scholarPage && (
                      <a target="_blank" rel="noopener noreferrer" href={member.scholarPage}>
                        <FaGraduationCap style={{ marginRight: '0.25rem' }} size="1.25rem" />
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default MembersSection
