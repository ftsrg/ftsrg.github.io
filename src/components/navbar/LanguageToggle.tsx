import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'

const LanguageToggle: React.FC = () => {
  const { language, originalPath } = useI18next()
  const locale = language
  const otherLocale = locale === 'hu' ? 'en' : 'hu'

  return (
    <Link
      className="rounded-0 p-0 mr-1 btn btn-primary"
      style={{ width: '2.5rem', height: '2.5rem', lineHeight: '2.4rem' }}
      aria-label="Toggle language"
      to={originalPath}
      language={otherLocale}
    >
      {otherLocale.toUpperCase()}
    </Link>
  )
}

export default LanguageToggle
