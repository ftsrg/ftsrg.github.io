import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Hero from '~components/Hero'

const toolsData = [
  {
    title: 'research.tools.tool1.title',
    desc: 'research.tools.tool1.desc',
    url: 'https://github.com/ftsrg/gamma'
  },
  {
    title: 'research.tools.tool2.title',
    desc: 'research.tools.tool2.desc',
    url: 'https://github.com/ftsrg/theta'
  },
  {
    title: 'research.tools.tool3.title',
    desc: 'research.tools.tool3.desc',
    url: 'https://github.com/viatra/VIATRA-Generator'
  }
]

const ToolsSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Hero id="tools" bgImageUrl="/images/bg_4.jpg" heroTitle="research.tools.title" isHeroTitleCentered>
      <Row>
        {toolsData.map((data) => (
          <Col key={data.title} lg={4} md={6} className="mb-5 mb-lg-0">
            <h3>{t(data.title)}</h3>
            <p>{t(data.desc)}</p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href={data.url}>
                {t('commons.readMore')}
              </a>
            </p>
          </Col>
        ))}
      </Row>
    </Hero>
  )
}

export default ToolsSection
