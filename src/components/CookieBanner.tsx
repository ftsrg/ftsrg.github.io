import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { COOKIE_CONSENT_NAME } from '~lib/cookieConsent'

type Props = Record<string, never>

const CookieBanner: React.FC<Props> = () => {
  const { t } = useI18next()
  const location = useLocation()

  return (
    <CookieConsent
      overlay
      location="bottom"
      enableDeclineButton
      buttonText={t('commons.cookiePolicy.accept')}
      declineButtonText={t('commons.cookiePolicy.decline')}
      cookieName={COOKIE_CONSENT_NAME}
      expires={150}
      style={{}}
      containerClasses="cookie-banner"
      disableButtonStyles
      overlayClasses="site-overlay"
      buttonClasses="btn btn-primary"
      declineButtonClasses="btn btn-secondary"
      onAccept={() => {
        initializeAndTrack(location)
      }}
    >
      {t('commons.cookiePolicy.text')}
    </CookieConsent>
  )
}

export default CookieBanner
