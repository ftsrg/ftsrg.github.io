import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaLinkedin } from 'react-icons/fa'
import Hero from '~components/Hero'
import { MemberProps } from '~utils/props'

type Props = {
  nodes: Array<MemberProps>
}

const FormerMembersSection: React.FC<Props> = ({ nodes }) => {
  const { t } = useTranslation()

  return (
    <Hero id="formermembers" bgImageUrl="/images/panorama.jpg" heroTitle="about.formermembers.heroTitle">
      <div className="card-columns alumni-list">
        {nodes.map((formermember) => (
          <div key={formermember.firstName + formermember.lastName} className="alumni">
            {t('about.members.name', { firstName: formermember.firstName, lastName: formermember.lastName })}
            {formermember.title ? `, ${formermember.title}` : ''}
            {formermember.linkedInPage && (
              <a target="_blank" rel="noopener noreferrer" href={formermember.linkedInPage}>
                <FaLinkedin style={{ marginLeft: '0.25rem', marginBottom: '0.25rem' }} />
              </a>
            )}
          </div>
        ))}
      </div>
    </Hero>
  )
}

export default FormerMembersSection
