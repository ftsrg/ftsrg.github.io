import { StaticImage } from 'gatsby-plugin-image'
import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { resetCookieConsent } from '~components/CookieBanner'
import FooterNav from './FooterNav'

type Props = {
  // eslint-disable-next-line react/require-default-props
  hasContact?: boolean
}

const Footer: React.FC<Props> = ({ hasContact }) => {
  const { t } = useI18next()

  return (
    <>
      {hasContact && (
        <div className="pagehero">
          <StaticImage src="../../../static/images/bg_2.jpg" alt={t('footer.contactHero.askMe')} />
          <div className="site-section">
            <Container>
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center">
                  <a href="http://mit.bme.hu/~micskeiz" target="_blank" rel="noopener noreferrer">
                    <StaticImage src="../../../static/images/members/micskei-small.png" alt="Micskei Zoltán" className="me-4" width={100} />
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
        </div>
      )}
      <div className="footer text-white bg-secondary">
        <Container>
          <Row className="justify-content-center pb-5">
            <Col lg={4} className="text-center px-5">
              <StaticImage src="../../../static/images/ftsrg-small-white.png" alt="ftsrg" className="mb-4" width={120} />
              <p>
                {t('footer.address.line1')}
                <br />
                {t('footer.address.line2')}
                <br />
                {t('footer.address.line3')}
              </p>
              <p>
                <Link to="/contact">{t('nav.contact.title')}</Link>
              </p>
            </Col>
            {/* Column left here intentionally as spacer */}
            <Col lg={2} />
            <FooterNav />
          </Row>

          <Row className="pt-5 justify-content-center">
            <Col xs="auto">
              <StaticImage src="../../../static/images/logos/kirdev.png" alt="Kir-Dev" height={46} />
            </Col>
            <Col xs="auto">
              <Trans
                i18nKey="footer.collabWithKirdev"
                components={[
                  <br />,
                  <a href="https://kir-dev.sch.bme.hu/" target="_blank" rel="noopener noreferrer">
                    Kir-Dev
                  </a>
                ]}
              />
            </Col>
            <Col xs={12} md className="text-center text-md-right mt-4 mt-md-0">
              Copyright &copy; {new Date().getFullYear()}{' '}
              <Trans
                i18nKey="footer.rightsAndSources"
                components={[
                  // eslint-disable-next-line max-len
                  // eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events
                  <a
                    role="button"
                    onClick={() => {
                      resetCookieConsent()
                    }}
                  >
                    Cookie consent
                  </a>,
                  <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                    Colorlib
                  </a>,
                  <br />,
                  <a href="https://www.instagram.com/photosbyakos/" target="_blank" rel="noopener noreferrer">
                    Ákos Hajdu
                  </a>,
                  <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
                    Pexels
                  </a>,
                  <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">
                    Pixabay
                  </a>,
                  <a href="https://spot.sch.bme.hu/" target="_blank" rel="noopener noreferrer">
                    SPOT
                  </a>,
                  <a href="https://home.cern/resources?type=59" target="_blank" rel="noopener noreferrer">
                    CERN
                  </a>
                ]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
