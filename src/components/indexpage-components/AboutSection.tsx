import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import Hero from '~components/Hero'

const AboutSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Hero id="about" bgImageUrl="/images/hero_3.png">
      <Row>
        <Col lg={4}>
          <h2 className="section-title-underline style-2">
            <span>{t('home.about.title')}</span>
          </h2>
        </Col>
        <Col lg={8}>
          <p className="lead">{t('home.about.p1')}</p>
          <p>{t('home.about.p2')}</p>
          <p>
            <Trans
              i18nKey="home.about.p3"
              components={[
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.bme.hu/hirek/20191219/Megszallottan_torodunk_a_tehetseges_hallgatokkal"
                >
                  BME
                </a>,
                <a target="_blank" rel="noopener noreferrer" href="http://www.impulzus.com/content/archivum/47/2.pdf">
                  Impulzus
                </a>
              ]}
            />
          </p>
        </Col>
      </Row>
    </Hero>
  )
}

export default AboutSection
