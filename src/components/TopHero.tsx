import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

type Props = {
  heroTitle: string
  heroDesc: string
  bgImageUrl?: string
}

const TopHero: React.FC<Props> = ({ heroTitle, heroDesc, bgImageUrl }) => {
  const { t } = useI18next()

  return (
    <div className="site-section pagehero pb-5" style={{ backgroundImage: bgImageUrl ? `url('${bgImageUrl}')` : '' }}>
      <Container>
        <Row className="align-items-end">
          <Col lg={7}>
            <h2 className="mb-0">{t(heroTitle)}</h2>
            <p>{t(heroDesc)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default TopHero
