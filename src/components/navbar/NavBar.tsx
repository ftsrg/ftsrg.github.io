import { StaticImage } from 'gatsby-plugin-image'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import LanguageToggle from './LanguageToggle'
import NAVBAR_ITEMS from './navbar-items'

type Props = {
  href: string
}

const NavBar: React.FC<Props> = ({ href }) => {
  const { t } = useI18next()
  const socialStyle = { width: '2.5rem', height: '2.5rem' }

  return (
    <>
      <div className="bg-light topheader align-items-center d-none d-lg-flex">
        <Container>
          <Row>
            <Col>
              <a href="https://www.bme.hu" className="small me-3">
                <StaticImage
                  src="../../../static/images/logos/bme.png"
                  alt="Budapesti Műszaki és Gazdaságtudományi Egyetem"
                  height={20}
                  style={{ verticalAlign: 'middle' }}
                />
                {' | bme.hu'}
              </a>
              <a href="https://www.vik.bme.hu" className="small me-3">
                <StaticImage
                  src="../../../static/images/logos/vik.png"
                  alt="Villamosmérnöki és Informatikai Kar"
                  height={20}
                  style={{ verticalAlign: 'middle' }}
                />
                {' | vik.bme.hu'}
              </a>
              <a href="https://www.mit.bme.hu" className="small me-3">
                <StaticImage
                  src="../../../static/images/logos/mit.png"
                  alt="Méréstechnika és Információs Rendszerek Tanszék"
                  height={20}
                  style={{ verticalAlign: 'middle' }}
                />
                {' | mit.bme.hu'}
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar id="navbar" bg="light" className="site-navbar" expand="lg">
        <Container className="site-navcontainer align-items-center">
          <Navbar.Brand className="pe-4" as="div">
            <Link to="/">
              <StaticImage
                src="../../../static/images/ftsrg.png"
                alt={t('nav.home.title')}
                className="img-fluid"
                height={48}
                placeholder="none"
                role="banner"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto site-menu">
              {NAVBAR_ITEMS.map((item) => {
                if (href === item.href) {
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
            <div className="ms-auto d-flex align-items-center justify-content-end mt-4 mb-2 mt-lg-auto mb-lg-auto">
              <Button
                className="rounded-0 me-1"
                style={socialStyle}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/ftsrg"
              >
                <FaFacebookF />
              </Button>
              <Button
                className="rounded-0 me-1"
                style={socialStyle}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ftsrg_bme"
              >
                <FaTwitter />
              </Button>
              <Button
                className="rounded-0 me-1"
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
