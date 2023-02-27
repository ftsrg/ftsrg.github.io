import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React, { useEffect } from 'react'
import CookieConsent, { getCookieConsentValue, resetCookieConsentValue } from 'react-cookie-consent'

const COOKIE_CONSENT_NAME = 'gatsby-gdpr-consent'

export function resetCookieConsent(): void {
  resetCookieConsentValue(COOKIE_CONSENT_NAME)
  window.location.reload()
}

export const CookieContext = React.createContext(false)

type Props = {
  onAccept?: () => void
  onReject?: () => void
}

const CookieBanner: React.FC<Props> = ({ onAccept, onReject }) => {
  const { t } = useI18next()
  const location = useLocation()

  useEffect(() => {
    if (getCookieConsentValue(COOKIE_CONSENT_NAME) === 'true') {
      if (onAccept) onAccept()
    } else if (onReject) onReject()
  }, [])

  return (
    <CookieConsent
      overlay
      location="top"
      enableDeclineButton
      buttonText={t('commons.cookiePolicy.accept')}
      declineButtonText={t('commons.cookiePolicy.decline')}
      cookieName={COOKIE_CONSENT_NAME}
      expires={150}
      style={{}}
      containerClasses="cookie-banner"
      disableButtonStyles
      overlayClasses="cookie-overlay"
      buttonClasses="btn btn-primary"
      declineButtonClasses="btn btn-secondary"
      onAccept={() => {
        initializeAndTrack(location)
        if (onAccept) onAccept()
      }}
      onDecline={() => {
        if (onReject) onReject()
      }}
    >
      {t('commons.cookiePolicy.text')}
    </CookieConsent>
  )
}

export default CookieBanner
