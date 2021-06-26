import { useLocation } from '@reach/router'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

interface INavbarItem {
  title: string
  href: string
  children?: Array<{ title: string; href: string }>
}

const NAVBAR_ITEMS: Array<INavbarItem> = [
  {
    title: 'Kezdőlap',
    href: '/',
    children: [
      { title: 'Szakmai kompetenciáink', href: '#competences' },
      { title: 'Oktatás és tehetséggondozás', href: '#education' },
      { title: 'A kutatócsoportról', href: '#about' },
      { title: 'Projektjeink', href: '#projects' },
      { title: 'Partnereink', href: '#partners' },
      { title: 'Hírek', href: '#news' }
    ]
  },
  {
    title: 'Kutatás-fejlesztés',
    href: '/research',
    children: [
      { title: 'K+F+I projektjeink', href: '#projects' },
      { title: 'Publikációink', href: '#publications' },
      { title: 'Eszközeink', href: '#tools' },
      { title: 'Események és díjak', href: '#events' }
    ]
  },
  {
    title: 'Oktatás',
    href: '/education',
    children: [
      { title: 'Specializációk', href: '#specializations' },
      { title: 'Tantárgyaink', href: '#courses' },
      { title: 'Önálló munka', href: '#student-work' },
      { title: 'Tehetséggondozás', href: '#talentcare' },
      { title: 'Hallgatóink eredményei', href: '#achievements' }
    ]
  },
  {
    title: 'Rólunk',
    href: '/about',
    children: [
      { title: 'A kutatócsoportról', href: '#about' },
      { title: 'A kutatócsoport tagjai', href: '#members' },
      { title: 'Korábbi munkatársaink', href: '#formermembers' },
      { title: 'Hallgatóink', href: '#students' }
    ]
  },
  {
    title: 'Kapcsolat',
    href: '/contact'
  }
]

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

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src="/images/ftsrg.png" alt="..." className="img-fluid" style={{ height: '2.5rem' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.href} className={location.pathname === item.href ? 'active has-children' : ''}>
                <a href={item.href} className="nav-link text-left">
                  {item.title}
                </a>
                <ul className="dropdown">
                  {location.pathname === item.href &&
                    item.children?.map((child) => (
                      <li key={child.href}>
                        <a href={child.href}>{child.title}</a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </Nav>
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
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
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
