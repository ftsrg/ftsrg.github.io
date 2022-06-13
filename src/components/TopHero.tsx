import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

type Props = {
  heroTitle: string
  heroDesc: string
  bgImage?: ImageDataLike
}

const TopHero: React.FC<Props> = ({ heroTitle, heroDesc, bgImage }) => {
  const { t } = useI18next()

  const heroBackgroundImage = bgImage ? getImage(bgImage) : null

  return (
    <div className="pagehero">
      {heroBackgroundImage && <GatsbyImage image={heroBackgroundImage} alt={heroTitle} />}
      <div className="site-section pb-5">
        <Container>
          <Row className="align-items-end">
            <Col lg={7}>
              <h2 className="mb-0">{t(heroTitle)}</h2>
              <p>{t(heroDesc)}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default TopHero
