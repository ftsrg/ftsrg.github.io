import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MemberProps } from '~utils/props'
import Member from '~components/aboutpage-components/Member'
import { memberSort } from '~utils/position-order'

type Props = {
  nodes: Array<MemberProps>
}

const HonoraryMembersSection: React.FC<Props> = ({ nodes }) => {
  const { t } = useI18next()

  return (
    <div id="honorary-members" className="site-section" style={{ paddingTop: 0 }}>
      <Container>
        <div className="pb-5">
          <h2 className="section-title-underline pb-5 text-center">
            <span>{t('about.honoraryMembers.title')}</span>
          </h2>
        </div>
        <Row className="mt-5">
          {nodes.sort(memberSort(t)).map((member) => {
            return (
              <Col lg={3} md={4} key={member.firstName + member.lastName} className="mb-5 mb-lg-5">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Member {...member} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default HonoraryMembersSection
