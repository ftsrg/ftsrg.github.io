import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgPerformance } from 'react-icons/cg'
import { FaBug } from 'react-icons/fa'
import { VscRocket } from 'react-icons/vsc'
import Hero from '~components/Hero'

const compentencesData = [
  {
    icon: <VscRocket size="3.75rem" />,
    title: 'home.competences.c1.title',
    desc: 'home.competences.c1.desc'
  },
  {
    icon: <FaBug size="3.65rem" />,
    title: 'home.competences.c2.title',
    desc: 'home.competences.c2.desc'
  },
  {
    icon: <CgPerformance size="4rem" />,
    title: 'home.competences.c3.title',
    desc: 'home.competences.c3.desc'
  }
]

const CompetencesSection: React.FC = () => {
  const { t } = useI18next()

  return (
    <Hero id="competences" heroTitle="home.competences.title" isHeroTitleCentered>
      <Row className="justify-content-center mb-5">
        <Col lg={7}>
          <p className="text-center mb-5">{t('home.competences.description')}</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-stretch">
        {compentencesData.map((data) => (
          <Col key={data.title} lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="feature-1 border h-100">
              <div className="icon-wrapper bg-primary text-white d-flex align-items-center justify-content-center">{data.icon}</div>
              <div className="feature-1-content">
                <h2>{t(data.title)}</h2>
                <p>{t(data.desc)}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Hero>
  )
}

export default CompetencesSection
