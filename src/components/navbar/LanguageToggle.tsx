import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React, { useEffect } from 'react'

const SCROLL_KEY = '@@scroll'

const LanguageToggle: React.FC = () => {
  const { language, originalPath } = useI18next()
  const locale = language
  const otherLocale = locale === 'hu' ? 'en' : 'hu'

  useEffect(() => {
    const scroll = localStorage.getItem(SCROLL_KEY)
    const { scrollingElement } = document

    if (scroll && scrollingElement) {
      localStorage.removeItem(SCROLL_KEY)
      scrollingElement.scrollTop = parseInt(scroll, 10)
    }
  }, [])

  return (
    <Link
      className="rounded-0 p-0 mr-1 btn btn-primary"
      style={{ width: '2.5rem', height: '2.5rem', lineHeight: '2.4rem' }}
      aria-label="Toggle language"
      to={originalPath}
      language={otherLocale}
      onClick={() => {
        localStorage.setItem(SCROLL_KEY, (document.scrollingElement?.scrollTop || 0).toString())
      }}
    >
      {otherLocale.toUpperCase()}
    </Link>
  )
}

export default LanguageToggle
