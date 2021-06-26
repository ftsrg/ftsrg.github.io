import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/navbar/NavBar'
import SEO from '../components/SEO'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="d-flex flex-column">
        <NavBar />
        <main className="flex-grow-1 site-wrapper">{children}</main>
        <Footer hasContact />
      </div>
    </>
  )
}

export default Layout
