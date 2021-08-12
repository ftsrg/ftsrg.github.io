import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import LanguageToggle from './LanguageToggle'
import NAVBAR_ITEMS from './navbar-items'

const NavBar: React.FC = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const socialStyle = { width: '2.5rem', height: '2.5rem' }

  const [isShrinked, setShrinked] = useState(false)
  const [fromTop, setFromTop] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onScroll = (event: any) => {
    setFromTop(event.target.scrollingElement.scrollTop)
    setShrinked(fromTop > 50)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <>
      <div className="bg-light topheader align-items-center d-none d-lg-flex">
        <Container>
          <Row>
            <Col>
              <a href="https://www.bme.hu" className="small mr-3">
                <img src="/images/logos/bme.png" height="20" alt="Budapesti Műszaki és Gazdaságtudományi Egyetem" /> | bme.hu
              </a>
              <a href="https://www.vik.bme.hu" className="small mr-3">
                <img src="/images/logos/vik.png" height="20" alt="Villamosmérnöki és Informatikai Kar" /> | vik.bme.hu
              </a>
              <a href="https://www.mit.bme.hu" className="small mr-3">
                <img src="/images/logos/mit.png" height="20" alt="Méréstechnika és Információs Rendszerek Tanszék" /> | mit.bme.hu
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar id="navbar" bg="light" className="fixed-top site-navbar" expand="lg">
        <Container className={`site-navcontainer align-items-center ${isShrinked ? 'shrinked' : ''}`}>
          <Navbar.Brand className="pr-4" as="div">
            <Link to="/">
              <img src="/images/ftsrg.png" alt="..." className="img-fluid" style={{ height: '3rem' }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto site-menu">
              {NAVBAR_ITEMS.map((item) => {
                if (location.pathname === item.href) {
                  if (item.children) {
                    return (
                      <NavDropdown key={item.id} title={t(item.title)} id="basic-nav-dropdown" className="active" show>
                        {item.children?.map((child) => (
                          <NavDropdown.Item as={AnchorLink} offset="70" key={child.href} href={child.href}>
                            {t(child.title)}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    )
                  }

                  return (
                    <Nav.Link className="active" key={item.id} as="div">
                      <Link to={item.href}>{t(item.title)}</Link>
                    </Nav.Link>
                  )
                }

                return (
                  <Nav.Link key={item.id} as="div">
                    <Link to={item.href}>{t(item.title)}</Link>
                  </Nav.Link>
                )
              })}
            </Nav>
            <div className="ml-auto d-flex align-items-center justify-content-end mt-4 mb-2 mt-lg-auto mb-lg-auto">
              <Button
                className="rounded-0 mr-1"
                style={socialStyle}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/ftsrg"
              >
                <FaFacebookF />
              </Button>
              <Button
                className="rounded-0 mr-1"
                style={socialStyle}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ftsrg_bme"
              >
                <FaTwitter />
              </Button>
              <Button
                className="rounded-0 mr-1"
                style={socialStyle}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ftsrg"
              >
                <FaGithub />
              </Button>
              <LanguageToggle />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
