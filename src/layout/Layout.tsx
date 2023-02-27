import React, { PropsWithChildren, useState } from 'react'
import CookieBanner, { CookieContext } from '~components/CookieBanner'
import Footer from '~components/footer/Footer'
import NavBar from '~components/navbar/NavBar'
import SEO from '~components/SEO'
import { SEOProps } from '~utils/props'

interface Props {
  // eslint-disable-next-line react/require-default-props
  seo?: SEOProps
  href: string
}

const Layout: React.FC<PropsWithChildren<Props>> = ({ href, seo, children }) => {
  const [cookieState, setCookieState] = useState(false)

  return (
    <CookieContext.Provider value={cookieState}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SEO {...seo} />
      <CookieBanner onAccept={() => setCookieState(true)} onReject={() => setCookieState(false)} />
      <div className="d-flex flex-column bg-light">
        <NavBar href={href} />
        <main className="flex-grow-1 site-wrapper">{children}</main>
        <Footer hasContact />
        <div className="d-none">Current version: GITHUB_COMMIT_URL_HERE</div>
      </div>
    </CookieContext.Provider>
  )
}

export default Layout
