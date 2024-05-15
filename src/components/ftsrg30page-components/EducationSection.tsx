import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Container } from 'react-bootstrap'
import EducationCounters from '~components/indexpage-components/EducationCounters'
import { SpecializationsCarousel } from '~components/carousels'
import { SpecializationProps } from '~utils/props'

type Props = {
  specializations: Array<SpecializationProps>
}

const EducationSection: React.FC<Props> = ({ specializations }) => {
  const { t } = useI18next()

  return (
    <div id="education" className="site-section">
      <Container>
        <div className="mb-5 text-center">
          <h2 className="section-title-underline">
            <span>{t('home.education.title')}</span>
          </h2>
        </div>
        <EducationCounters />

        <SpecializationsCarousel nodes={specializations} />
      </Container>
    </div>
  )
}

export default EducationSection
