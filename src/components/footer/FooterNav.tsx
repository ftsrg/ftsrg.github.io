import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col } from 'react-bootstrap'
import NAVBAR_ITEMS from '../navbar/navbar-items'

const columnIds = ['research', 'education', 'about']
const FOOTER_ITEMS = NAVBAR_ITEMS.filter((i) => columnIds.includes(i.id))

const FooterNav: React.FC = () => {
  const { t } = useI18next()

  return (
    <>
      {FOOTER_ITEMS.map((item) => {
        return (
          <Col key={item.id} md={4} lg={2} className="px-5 px-lg-4 py-3 py-md-5 py-lg-0">
            <h3 className="text-white h6 mb-3">
              <span className="border-bottom border-primary">{t(item.shortTitle)}</span>
            </h3>
            <ul className="list-unstyled">
              {item.children &&
                item.children.map((child) => (
                  <li key={child.title}>
                    <Link to={item.href + child.href}>{t(child.title)}</Link>
                  </li>
                ))}
            </ul>
          </Col>
        )
      })}
    </>
  )
}

export default FooterNav
