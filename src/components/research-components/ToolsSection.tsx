import { ImageDataLike, StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React, { PropsWithChildren } from 'react'
import { Col, Row } from 'react-bootstrap'
import Hero from '~components/Hero'

type Props = {
  heroBackgroundImage: ImageDataLike
}

/*
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
*/

type ToolProps = {
  title: string
  desc: string
  url: string
}

const Tool: React.FC<PropsWithChildren<ToolProps>> = ({ title, desc, url, children }) => {
  const { t } = useI18next()
  return (
    <div className="feature-1 border h-100 d-flex flex-column align-items-center flex-grow-1">
      <div className="icon-wrapper bg-primary text-white d-flex align-items-center justify-content-center">{children}</div>
      <div className="feature-1-content">
        <h2>{t(title)}</h2>
        <p>{t(desc)}</p>
      </div>
      <p className="mt-auto">
        <a target="_blank" rel="noopener noreferrer" href={url} className="btn btn-primary rounded-0 px-4">
          {t('commons.readMore')}
        </a>
      </p>
    </div>
  )
}

const ToolsSection: React.FC<Props> = ({ heroBackgroundImage }) => {
  const { t } = useI18next()

  return (
    <Hero id="tools" bgImage={heroBackgroundImage} heroTitle="research.tools.title" isHeroTitleCentered>
      <Row className="justify-content-center align-items-stretch" style={{ marginTop: '6rem' }}>
        <Col lg={4} md={6} className="mb-5 mb-lg-0">
          <Tool title="research.tools.tool1.title" desc="research.tools.tool1.desc" url="https://github.com/ftsrg/gamma">
            <StaticImage
              src="../../../static/images/logos/gamma.png"
              alt={t('research.tools.tool1.title')}
              width={58}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Tool>
        </Col>
        <Col lg={4} md={6} className="mb-5 mb-lg-0">
          <Tool title="research.tools.tool2.title" desc="research.tools.tool2.desc" url="https://github.com/ftsrg/theta">
            <StaticImage
              src="../../../static/images/logos/theta.png"
              alt={t('research.tools.tool2.title')}
              width={58}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Tool>
        </Col>
        <Col lg={4} md={6} className="mb-5 mb-lg-0">
          <Tool title="research.tools.tool3.title" desc="research.tools.tool3.desc" url="https://refinery.tools/">
            <StaticImage
              src="../../../static/images/logos/refinery-logo.svg"
              alt={t('research.tools.tool2.title')}
              width={58}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Tool>
        </Col>
      </Row>
    </Hero>
  )
}

export default ToolsSection
