import { PageProps } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: React.FC<PageProps> = () => {
  const { t } = useTranslation()
  return (
    <>
      <div>{t('pages.homepage.heading')}</div>
    </>
  )
}

export default AboutPage
