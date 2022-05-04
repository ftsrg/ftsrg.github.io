import React from 'react'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Locale from '~utils/language'

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation()
  const translations = i18n.languages
  const locale = i18n.language as keyof typeof Locale
  const otherLocale = locale === 'hu' ? 'en' : 'hu'
  const toggleLanguage = () => i18n.changeLanguage(otherLocale)

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
