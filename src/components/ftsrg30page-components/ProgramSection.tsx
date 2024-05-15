import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Container } from 'react-bootstrap'

type Props = NonNullable<unknown>

const ProgramSection: React.FC<Props> = () => {
  const { t, language } = useI18next()

  return (
    <div id="program" className="site-section">
      <Container>
        <div className="mb-5 text-center">
          <h2 className="section-title-underline">
            {language === 'hu' && <span>Program és regisztráció</span>}
            {language === 'en' && <span>Program and Registration</span>}
          </h2>
        </div>
        <a className="btn btn-primary rounded-0 px-4" href="https://google.com">
          Regisztráció
        </a>
      </Container>
    </div>
  )
}

export default ProgramSection
