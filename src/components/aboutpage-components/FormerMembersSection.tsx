import { ImageDataLike } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { FaCross, FaLinkedin } from 'react-icons/fa'
import Hero from '~components/Hero'
import { MemberProps } from '~utils/props'
import { memberSort } from '~utils/position-order'

type Props = {
  nodes: Array<MemberProps>
  heroBackgroundImage: ImageDataLike
}

const FormerMembersSection: React.FC<Props> = ({ nodes, heroBackgroundImage }) => {
  const { t } = useI18next()

  function memberCoreName(props: MemberProps) {
    return t('about.members.name', {
      firstName: props.firstName,
      lastName: props.lastName
    })
  }

  function memberName(props: MemberProps) {
    return `${props.namePrefix ? `${props.namePrefix} ` : ''}${memberCoreName(props)}${props.nameSuffix ? ` ${props.nameSuffix}` : ''}`
  }

  return (
    <Hero id="formermembers" bgImage={heroBackgroundImage} heroTitle="about.formermembers.heroTitle">
      <div className="card-columns alumni-list">
        {nodes.sort(memberSort(t)).map((formermember) => (
          <div key={formermember.firstName + formermember.lastName} className="alumni">
            {memberName(formermember)}
            {formermember.title ? `, ${formermember.title}` : ''}
            {formermember.inMemoriam && <FaCross title="In memoriam" style={{ marginLeft: '0.25rem' }} />}
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
