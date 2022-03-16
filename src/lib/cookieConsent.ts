import { getCookieConsentValue, resetCookieConsentValue } from 'react-cookie-consent'

export const COOKIE_CONSENT_NAME = 'gatsby-gdpr-consent'

export function getCookieConsent(): boolean {
  return getCookieConsentValue(COOKIE_CONSENT_NAME) === 'true'
}

export function resetCookieConsent(): void {
  resetCookieConsentValue(COOKIE_CONSENT_NAME)
  window.location.reload()
}
