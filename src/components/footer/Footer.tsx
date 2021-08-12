import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import FooterNav from './FooterNav'

type Props = {
  hasContact?: boolean
}

const Footer: React.FC<Props> = ({ hasContact }) => {
  const { t } = useTranslation()

  return (
    <>
      {hasContact && (
        <div className="site-section pagehero" style={{ backgroundImage: `url('/images/bg_2.png')` }}>
          <Container>
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex align-items-center">
                <a href="http://mit.bme.hu/~micskeiz" target="_blank" rel="noopener noreferrer">
                  <img src="/images/members/micskei-small.png" alt="Micskei Zoltán" width="100px" className="mr-4" />
                </a>
                <div>
                  <h2>{t('footer.contactHero.haveQuestion')}</h2>
                  <p className="mb-0">
                    <Trans
                      i18nKey="footer.contactHero.askMe"
                      values={{ firstName: 'Zoltán', lastName: 'Micskei' }}
                      components={[
                        <a href="http://mit.bme.hu/~micskeiz" target="_blank" rel="noopener noreferrer">
                          Dr. Micskei Zoltán
                        </a>
                      ]}
                    />
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
      <div className="footer text-white bg-secondary">
        <Container>
          <Row className="justify-content-center pb-5">
            <Col lg={4} className="text-center px-5">
              <img src="/images/ftsrg-small-white.png" alt="..." width="120px" className="mb-4" />
              <p>
                {t('contact.address.line1')}
                <br />
                {t('contact.address.line2')}
                <br />
                {t('contact.address.line3')}
              </p>
              <p>
                <Link to="/contact">{t('nav.contact.title')}</Link>
              </p>
            </Col>
            {/* Column left here intentionally as spacer */}
            <Col lg={2} />
            <FooterNav />
          </Row>

          <div className="pt-5 text-center">
            <p>
              Copyright &copy; 2021 All rights reserved | Template by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                Colorlib
              </a>{' '}
              | Photos taken by{' '}
              <a href="https://www.instagram.com/photosbyakos/" target="_blank" rel="noopener noreferrer">
                Ákos Hajdu
              </a>
              ,{' '}
              <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
                Pexels
              </a>
              ,{' '}
              <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">
                Pixabay
              </a>
              ,{' '}
              <a href="https://spot.sch.bme.hu/" target="_blank" rel="noopener noreferrer">
                SPOT
              </a>{' '}
              and{' '}
              <a href="https://home.cern/resources?type=59" target="_blank" rel="noopener noreferrer">
                CERN
              </a>
              .
            </p>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
