import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { useTranslation } from 'react-i18next'
import { COOKIE_CONSENT_NAME } from '~lib/cookieConsent'
import { initializeI18Next } from '~lib/i18next'

type Props = Record<string, never>

const CookieBanner: React.FC<Props> = () => {
  const { t } = useTranslation()
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
        initializeI18Next(true)
      }}
    >
      {t('commons.cookiePolicy.text')}
    </CookieConsent>
  )
}

export default CookieBanner
