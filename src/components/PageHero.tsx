import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

type Props = {
  heroTitle: string
  heroDesc: string
  bgImageUrl: string
}

const PageHero: React.FC<Props> = ({ heroTitle, heroDesc, bgImageUrl }) => {
  const { t } = useTranslation()

  return (
    <div className="site-section pagehero pb-5" style={{ backgroundImage: `url('${bgImageUrl}')` }}>
      <Container>
        <div className="row align-items-end">
          <div className="col-lg-7">
            <h2 className="mb-0">{t(heroTitle)}</h2>
            <p>{t(heroDesc)}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default PageHero
