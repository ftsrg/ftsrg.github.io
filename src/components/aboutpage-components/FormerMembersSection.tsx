import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import Hero from '~components/Hero'
import { MemberProps } from '~utils/props'

type Props = {
  nodes: Array<MemberProps>
}

const FormerMembersSection: React.FC<Props> = ({ nodes }) => {
  const { t } = useI18next()

  function memberName(props: MemberProps) {
    return t('about.members.name', { firstName: props.firstName, lastName: props.lastName })
  }

  return (
    <Hero id="formermembers" bgImageUrl="/images/panorama.jpg" heroTitle="about.formermembers.heroTitle">
      <div className="card-columns alumni-list">
        {nodes
          .sort((member1, member2) => memberName(member1).localeCompare(memberName(member2)))
          .map((formermember) => (
            <div key={formermember.firstName + formermember.lastName} className="alumni">
              {memberName(formermember)}
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
