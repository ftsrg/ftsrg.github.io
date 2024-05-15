import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Container } from 'react-bootstrap'

type Props = NonNullable<unknown>

const SocialSection: React.FC<Props> = () => {
  const { t, language } = useI18next()

  return (
    <div id="social" className="site-section">
      <Container>
        <div className="mb-5 text-center">
          <h2 className="section-title-underline">
            {language === 'hu' && <span>Kövess minket</span>}
            {language === 'en' && <span>Follow us</span>}
          </h2>
        </div>
      </Container>
    </div>
  )
}

export default SocialSection
