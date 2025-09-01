import { useI18next } from 'gatsby-plugin-react-i18next'
import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { CookieContext, resetCookieConsent } from '~components/CookieBanner'
import useIsClient from '~hooks/useIsClient'

const NewsSection: React.FC = () => {
  const { t } = useI18next()
  const { isClient, key } = useIsClient()

  const cookieConsent = useContext(CookieContext)

  if (!isClient) return null

  if (cookieConsent) {
    return (
      <div id="news" className="news-updates" key={key}>
        <Helmet>
          <script defer crossOrigin="anonymous" src="https://connect.facebook.net/hu_HU/sdk.js#xfbml=1&version=v7.0" nonce="SRkXDokT" />
        </Helmet>
        <Container>
          <h2 className="section-title-underline text-center mb-5">
            <span>{t('home.news.title')}</span>
          </h2>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={12} className="social-media-container">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/ftsrg/"
                data-tabs="timeline"
                data-width="400"
                data-height="500"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote cite="https://www.facebook.com/ftsrg/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/ftsrg/">{t('commons.ftsrgFullName')} on Facebook</a>
                </blockquote>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  return (
    <div id="news" className="news-updates" key={key}>
      <Container>
        <h2 className="section-title-underline text-center mb-5">
          <span>{t('home.news.title')}</span>
        </h2>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6} className="smb-5 mb-lg-0">
            <p>{t('commons.cookiePolicy.socialBlocked')}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                resetCookieConsent()
              }}
            >
              {t('commons.cookiePolicy.consentCookies')}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NewsSection
