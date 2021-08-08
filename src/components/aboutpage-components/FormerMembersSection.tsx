import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import Hero from '~components/Hero'
import { MemberProps } from '~utils/props'

interface FormerMembersSectionProps {
  nodes: Array<MemberProps>
}

const FormerMembersSection: React.FC<FormerMembersSectionProps> = ({ nodes }) => (
  <Hero id="formermembers" bgImageUrl="/images/panorama.jpg" heroTitle="Korábbi munkatársaink">
    <div className="card-columns alumni-list">
      {nodes.map((formermember) => (
        <div key={formermember.name} className="alumni">
          {formermember.name}
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

export default FormerMembersSection
