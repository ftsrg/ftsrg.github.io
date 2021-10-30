import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaFileAlt, FaGithub, FaGraduationCap, FaHome, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MemberProps } from '~utils/props'

type Props = {
  nodes: Array<MemberProps>
}

const MembersSection: React.FC<Props> = ({ nodes }) => {
  const { t } = useTranslation()

  return (
    <div id="members" className="site-section">
      <Container>
        <div className="pb-5">
          <h2 className="section-title-underline pb-5 text-center">
            <span>{t('about.members.title')}</span>
          </h2>
        </div>
        <Row className="mt-5">
          {nodes.map((member) => {
            const avatar = member.avatar ? getImage(member.avatar) : null
            return (
              <Col lg={3} md={4} key={member.firstName + member.lastName} className="mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  {avatar && <GatsbyImage image={avatar} className="img-fluid" alt={member.firstName + member.lastName} />}
                  <div className="feature-1-content">
                    <h2>
                      {t('about.members.name', { firstName: member.firstName, lastName: member.lastName })}
                      {member.title && `, ${member.title}`}
                    </h2>
                    <span className="position mb-3 d-block">{member.position && t(member.position)}</span>
                    <p>
                      {member.homePage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.homePage}>
                          <FaHome style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.githubPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.githubPage}>
                          <FaGithub style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.twitterPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.twitterPage}>
                          <FaTwitter style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.linkedInPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.linkedInPage}>
                          <FaLinkedin style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.scholarPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.scholarPage}>
                          <FaGraduationCap style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.cvPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.cvPage}>
                          <FaFileAlt style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                    </p>
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

export default MembersSection
