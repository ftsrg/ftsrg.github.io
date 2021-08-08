import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

type Props = {
  heroTitle?: string
  bgImageUrl?: string
  isHeroTitleCentered?: boolean
  id?: string
}

const Hero: React.FC<Props> = ({ heroTitle, isHeroTitleCentered, bgImageUrl, id, children }) => {
  const { t } = useTranslation()

  return (
    <div id={id} className="section-bg style-1 pb-5" style={{ backgroundImage: bgImageUrl ? `url('${bgImageUrl}')` : '' }}>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12">
            {heroTitle && (
              <h2 className={`mb-5 section-title-underline style-2 ${isHeroTitleCentered && 'text-center'}`}>
                <span>{t(heroTitle)}</span>
              </h2>
            )}
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
