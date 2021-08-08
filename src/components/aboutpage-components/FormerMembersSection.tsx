import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import MemberProps from '~props/member.props'

interface FormerMembersSectionProps {
  nodes: Array<MemberProps>
}

const FormerMembersSection: React.FC<FormerMembersSectionProps> = ({ nodes }) => (
  <div id="formermembers" className="section-bg style-1" style={{ backgroundImage: "url('/images/panorama.jpg')" }}>
    <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-7">
          <h2 className="section-title-underline style-2 mb-5">Korábbi munkatársaink</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
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
        </div>
      </div>
    </div>
  </div>
)

export default FormerMembersSection
