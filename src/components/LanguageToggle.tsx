import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { MdLanguage } from 'react-icons/md'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import Locale from '../utils/language'

const LanguageToggle: FC = () => {
  const { translations } = useSiteMetadata() as {
    translations: Array<keyof typeof Locale>
  }
  const { i18n } = useTranslation()
  const locale = i18n.language as keyof typeof Locale
  const toggleLanguage = () => (locale === 'en' ? i18n.changeLanguage('id') : i18n.changeLanguage('en'))

  return (
    <Button
      disabled={!translations.some((loc) => loc === 'id')}
      color="gray.600"
      aria-label="Toggle language"
      variant="light"
      onClick={toggleLanguage}
    >
      <MdLanguage />
    </Button>
  )
}

export default LanguageToggle
