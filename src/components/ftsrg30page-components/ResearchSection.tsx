import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProjectsCarousel } from '~components/carousels'
import { ProjectProps } from '~utils/props'
import { ProjectCounters } from '~components/research-components'

type Props = {
  projects: Array<ProjectProps>
}

const ResearchSection: React.FC<Props> = ({ projects }) => {
  const { t } = useI18next()

  return (
    <div id="rdi" className="site-section">
      <Container>
        <Row className="mb-3">
          <Col lg={12}>
            <h2 className="section-title-underline">
              <span>{t('research.projects.title')}</span>
            </h2>
            <p>{t('research.projects.description')}</p>
          </Col>
        </Row>
        <ProjectCounters />
        <ProjectsCarousel nodes={projects} />
      </Container>
    </div>
  )
}

export default ResearchSection
