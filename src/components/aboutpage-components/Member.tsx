import { MemberProps } from '~utils/props'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaGithub, FaHome, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa'
import { AiCV, AiDblp, AiGoogleScholar, AiMtmt, AiOrcid } from '~components/Academicons'
import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { memberName } from '~utils/member-name'

const Member: React.FC<MemberProps> = ({
  avatar,
  firstName,
  lastName,
  namePrefix,
  nameSuffix,
  title,
  position,
  homePage,
  cvPage,
  mtmtPage,
  githubPage,
  orcidPage,
  dblpPage,
  scholarPage,
  twitterPage,
  linkedInPage
}) => {
  const { t } = useI18next()
  const avatarImage = avatar ? getImage(avatar) : null

  return (
    <div className="feature-1 border person text-center d-flex flex-column justify-content-between">
      {avatarImage && <GatsbyImage image={avatarImage} className="img-fluid" alt={firstName + lastName} />}
      {!avatarImage && (
        <div className="img-fluid">
          <FaUser />
        </div>
      )}
      <div className="feature-1-content">
        <h2>
          {memberName(t, { firstName, lastName, namePrefix, nameSuffix })}
          {title && `, ${title}`}
        </h2>
        <span className="position mb-3 d-block">{position && t(`about.members.position.${position}`)}</span>
      </div>
      <div className="mt-auto">
        <p>
          {homePage && (
            <a target="_blank" rel="noopener noreferrer" href={homePage}>
              <FaHome style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
          {cvPage && (
            <a target="_blank" rel="noopener noreferrer" href={cvPage}>
              <AiCV style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
          {mtmtPage && (
            <a target="_blank" rel="noopener noreferrer" href={mtmtPage}>
              <AiMtmt style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
          {dblpPage && (
            <a target="_blank" rel="noopener noreferrer" href={dblpPage}>
              <AiDblp style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
          {scholarPage && (
            <a target="_blank" rel="noopener noreferrer" href={scholarPage}>
              <AiGoogleScholar style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
          {orcidPage && (
            <a target="_blank" rel="noopener noreferrer" href={orcidPage}>
              <AiOrcid style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
          {githubPage && (
            <a target="_blank" rel="noopener noreferrer" href={githubPage}>
              <FaGithub style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
          {twitterPage && (
            <a target="_blank" rel="noopener noreferrer" href={twitterPage}>
              <FaTwitter style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
          {linkedInPage && (
            <a target="_blank" rel="noopener noreferrer" href={linkedInPage}>
              <FaLinkedin style={{ marginRight: '0.5rem' }} size="1.25rem" />
            </a>
          )}
        </p>
      </div>
    </div>
  )
}

export default Member
