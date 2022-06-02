import React, { PropsWithChildren } from 'react'
import CookieBanner from '~components/CookieBanner'
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
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SEO {...seo} />
      <div className="d-flex flex-column bg-light">
        <NavBar href={href} />
        <main className="flex-grow-1 site-wrapper">{children}</main>
        <Footer hasContact />
        <div className="d-none">Current version: GITHUB_COMMIT_URL_HERE</div>
      </div>
      <CookieBanner />
    </>
  )
}

export default Layout
