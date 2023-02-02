import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub, FaHome, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiCV, AiDblp, AiGoogleScholar, AiMtmt, AiOrcid } from '~components/Academicons'
import { MemberProps } from '~utils/props'

type Props = {
  nodes: Array<MemberProps>
}

const positionOrder = [
  'prof',
  'assocProfHabil',
  'assocProf',
  'honAssocProf',
  'assistProf',
  'masterLecturer',
  'resFellow',
  'assistResFellow',
  'phdStudent'
]

const MembersSection: React.FC<Props> = ({ nodes }) => {
  const { t } = useI18next()

  function memberName(props: MemberProps) {
    return t('about.members.name', { firstName: props.firstName, lastName: props.lastName })
  }

  function memberSort(member1: MemberProps, member2: MemberProps) {
    const pos1 = positionOrder.indexOf(member1.position || '')
    const pos2 = positionOrder.indexOf(member2.position || '')

    if (pos1 === pos2) {
      if (member1.order === member2.order) {
        return memberName(member1).localeCompare(memberName(member2))
      }
      return (member2.order || 0) - (member1.order || 0)
    }
    return pos1 - pos2
  }

  return (
    <div id="members" className="site-section">
      <Container>
        <div className="pb-5">
          <h2 className="section-title-underline pb-5 text-center">
            <span>{t('about.members.title')}</span>
          </h2>
        </div>
        <Row className="mt-5">
          {nodes.sort(memberSort).map((member) => {
            const avatar = member.avatar ? getImage(member.avatar) : null
            return (
              <Col lg={3} md={4} key={member.firstName + member.lastName} className="mb-5 mb-lg-5">
                <div className="feature-1 border person text-center d-flex flex-column justify-content-between">
                  {avatar && <GatsbyImage image={avatar} className="img-fluid" alt={member.firstName + member.lastName} />}
                  <div className="feature-1-content">
                    <h2>
                      {t('about.members.name', { firstName: member.firstName, lastName: member.lastName })}
                      {member.title && `, ${member.title}`}
                    </h2>
                    <span className="position mb-3 d-block">{member.position && t(`about.members.position.${member.position}`)}</span>
                  </div>
                  <div className="mt-auto">
                    <p>
                      {member.homePage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.homePage}>
                          <FaHome style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.cvPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.cvPage}>
                          <AiCV style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.mtmtPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.mtmtPage}>
                          <AiMtmt style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.dblpPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.dblpPage}>
                          <AiDblp style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.scholarPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.scholarPage}>
                          <AiGoogleScholar style={{ marginRight: '0.5rem' }} size="1.25rem" />
                        </a>
                      )}
                      {member.orcidPage && (
                        <a target="_blank" rel="noopener noreferrer" href={member.orcidPage}>
                          <AiOrcid style={{ marginRight: '0.5rem' }} size="1.25rem" />
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
