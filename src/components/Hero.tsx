import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React, { PropsWithChildren } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

type Props = {
  heroTitle?: string
  bgImage?: ImageDataLike
  isHeroTitleCentered?: boolean
  id?: string
}

const Hero: React.FC<PropsWithChildren<Props>> = ({ heroTitle, isHeroTitleCentered, bgImage, id, children }) => {
  const { t } = useI18next()

  const heroBackgroundImage = bgImage ? getImage(bgImage) : null

  return (
    <div id={id} className="section-bg">
      {heroBackgroundImage && <GatsbyImage image={heroBackgroundImage} alt={heroTitle || '...'} />}
      <div className="style-1 pb-5">
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
    </div>
  )
}

export default Hero
