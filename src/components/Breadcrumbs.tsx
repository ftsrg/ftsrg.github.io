import { Link } from 'gatsby'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaChevronRight } from 'react-icons/fa'

type Props = {
  title: string
}

const Breadcrumbs: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation()

  return (
    <div className="custom-breadcrumbs py-3 border-bottom">
      <Container>
        <Link to="/">{t('nav.home.title')}</Link>
        <span className="mx-2">
          <FaChevronRight size="0.6rem" />
        </span>
        <span className="text-primary">{t(title)}</span>
      </Container>
    </div>
  )
}

export default Breadcrumbs
