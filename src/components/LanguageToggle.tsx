import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import Locale from '../utils/language'

const LanguageToggle: FC = () => {
  const { translations } = useSiteMetadata() as {
    translations: Array<keyof typeof Locale>
  }
  const { i18n } = useTranslation()
  const locale = i18n.language as keyof typeof Locale
  const otherLocale = locale === 'hu' ? 'en' : 'hu'
  const toggleLanguage = () => (locale === 'hu' ? i18n.changeLanguage('en') : i18n.changeLanguage('hu'))

  return (
    <Button
      className="rounded-0 p-0"
      style={{ width: '2.5rem', height: '2.5rem' }}
      disabled={!translations.some((loc) => loc === 'en')}
      aria-label="Toggle language"
      onClick={toggleLanguage}
    >
      {otherLocale.toUpperCase()}
    </Button>
  )
}

export default LanguageToggle
