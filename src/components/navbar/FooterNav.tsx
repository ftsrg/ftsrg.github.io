import { Link } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'
import NAVBAR_ITEMS from './navbar-items'

const columnIds = ['research', 'education', 'about']
const FOOTER_ITEMS = NAVBAR_ITEMS.filter((i) => columnIds.includes(i.id))

const FooterNav: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      {FOOTER_ITEMS.map((item) => {
        return (
          <div key={item.id} className="col-md-4 col-lg-2 px-5 px-lg-4 py-3 py-md-5 py-lg-0">
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
          </div>
        )
      })}
    </>
  )
}

export default FooterNav
