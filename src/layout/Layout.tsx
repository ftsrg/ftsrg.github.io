import React from 'react'
import Footer from '~components/footer/Footer'
import NavBar from '~components/navbar/NavBar'
import SEO from '~components/SEO'
import { SEOProps } from '~utils/props'

interface Props {
  seo?: SEOProps
  href: string
}

const Layout: React.FC<Props> = ({ href, seo, children }) => {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SEO {...seo} />
      <div className="d-flex flex-column">
        <NavBar href={href} />
        <main className="flex-grow-1 site-wrapper">{children}</main>
        <Footer hasContact />
        <div className="d-none">Current version: GITHUB_COMMIT_URL_HERE</div>
      </div>
    </>
  )
}

export default Layout
