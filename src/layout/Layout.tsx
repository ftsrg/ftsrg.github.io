import React from 'react'
import Loader from 'react-loader-spinner'
import Footer from '../components/Footer'
import NavBar from '../components/navbar/NavBar'
import SEO from '../components/SEO'

const Layout: React.FC = ({ children }) => {
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    setLoaded(true)
  })

  return (
    <>
      <SEO />
      <div className="d-flex flex-column">
        <NavBar />
        <main className="flex-grow-1 site-wrapper">{children}</main>
        <Footer hasContact />
      </div>
      <div className="d-flex justify-content-center w-100" style={{ position: 'fixed', top: '40vh' }}>
        <Loader visible={!loaded} type="Grid" color="#960018" height="10vh" width="10vh" />
      </div>
    </>
  )
}

export default Layout
