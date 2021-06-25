import { useLocation } from '@reach/router'
import React from 'react'

const NavBar: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>

      <div id="topheader" className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 d-none d-lg-block">
              <a href="https://www.bme.hu" className="small mr-3">
                <img src="/images/logos/bme.png" height="20" alt="Budapesti Műszaki és Gazdaságtudományi Egyetem" /> | bme.hu
              </a>
              <a href="https://www.vik.bme.hu" className="small mr-3">
                <img src="/images/logos/vik.png" height="20" alt="Villamosmérnöki és Informatikai Kar" /> | vik.bme.hu
              </a>
              <a href="https://www.mit.bme.hu" className="small mr-3">
                <img src="/images/logos/mit.png" height="20" alt="Méréstechnika és Információs Rendszerek Tanszék" /> | mit.bme.hu
              </a>
            </div>
          </div>
        </div>
      </div>

      <header id="navbar" className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <a href="index.html" className="d-block">
                <img src="images/ftsrg.png" alt="..." className="img-fluid" style={{ height: '36px !important' }} />
              </a>
            </div>
            <div className="mr-auto">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li className={location.pathname === '/' ? 'active has-children' : ''}>
                    <a href="index.html" className="nav-link text-left">
                      Kezdőlap
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#competences">Szakmai kompetenciáink</a>
                      </li>
                      <li>
                        <a href="#education">Oktatás és tehetséggondozás</a>
                      </li>
                      <li>
                        <a href="#about">A kutatócsoportról</a>
                      </li>
                      <li>
                        <a href="#projects">Projektjeink</a>
                      </li>
                      <li>
                        <a href="#partners">Partnereink</a>
                      </li>
                      <li>
                        <a href="#news">Hírek</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="research.html" className="nav-link text-left">
                      Kutatás-fejlesztés
                    </a>
                  </li>
                  <li>
                    <a href="education.html" className="nav-link text-left">
                      Oktatás
                    </a>
                  </li>
                  <li>
                    <a href="about.html" className="nav-link text-left">
                      Rólunk
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" className="nav-link text-left">
                      Kapcsolat
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ml-auto">
              <div className="social-wrap">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ftsrg">
                  <span className="icon-facebook" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ftsrg_bme">
                  <span className="icon-twitter" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ftsrg">
                  <span className="icon-github" />
                </a>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black">
                  <span className="icon-menu h3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

/*
const NavBar: React.FC<NavBarProps> = ({ siteTitle }) => (
  <div>
    <ReachLink to="/">{siteTitle}</ReachLink>
    <Row>
      <Col>
        <LanguageToggle />
      </Col>
      <Col>asd</Col>
    </Row>
  </div>
)
*/

export default NavBar
