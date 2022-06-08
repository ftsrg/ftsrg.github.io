import { ImageDataLike } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Hero from '~components/Hero'

type Props = {
  heroBackgroundImage: ImageDataLike
}

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

const ToolsSection: React.FC<Props> = ({ heroBackgroundImage }) => {
  const { t } = useI18next()

  return (
    <Hero id="tools" bgImage={heroBackgroundImage} heroTitle="research.tools.title" isHeroTitleCentered>
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
