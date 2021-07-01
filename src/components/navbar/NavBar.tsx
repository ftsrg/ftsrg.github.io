import { useLocation } from '@reach/router'
import React, { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import LanguageToggle from '../LanguageToggle'

interface INavbarItem {
  title: string
  href: string
  children?: Array<{ title: string; href: string }>
}

const NavBar: React.FC = () => {
  const location = useLocation()
  const socialStyle = { width: '2.5rem', height: '2.5rem' }
  const [isShrinked, setShrinked] = useState(false)
  const [fromTop, setFromTop] = useState(0)
  const onScroll = () => {
    setFromTop(window.scrollY)
    setShrinked(fromTop > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const { t } = useTranslation()
  const NAVBAR_ITEMS: Array<INavbarItem> = [
    {
      title: t('nav.home.title'),
      href: '/',
      children: [
        { title: t('nav.home.competences'), href: '#competences' },
        { title: t('nav.home.education'), href: '#education' },
        { title: t('nav.home.about'), href: '#about' },
        { title: t('nav.home.projects'), href: '#projects' },
        { title: t('nav.home.partners'), href: '#partners' },
        { title: t('nav.home.news'), href: '#news' }
      ]
    },
    {
      title: t('nav.research.title'),
      href: '/research/',
      children: [
        { title: t('nav.research.projects'), href: '#projects' },
        { title: t('nav.research.publications'), href: '#publications' },
        { title: t('nav.research.tools'), href: '#tools' },
        { title: t('nav.research.events'), href: '#events' }
      ]
    },
    {
      title: t('nav.education.title'),
      href: '/education/',
      children: [
        { title: t('nav.education.specializations'), href: '#specializations' },
        { title: t('nav.education.courses'), href: '#courses' },
        { title: t('nav.education.studentwork'), href: '#student-work' },
        { title: t('nav.education.talentcare'), href: '#talentcare' },
        { title: t('nav.education.achievements'), href: '#achievements' }
      ]
    },
    {
      title: t('nav.about.title'),
      href: '/about/',
      children: [
        { title: t('nav.about.about'), href: '#about' },
        { title: t('nav.about.members'), href: '#members' },
        { title: t('nav.about.formermembers'), href: '#formermembers' },
        { title: t('nav.about.students'), href: '#students' }
      ]
    },
    {
      title: t('nav.contact.title'),
      href: '/contact/'
    }
  ]

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
          <Navbar.Brand className="pr-4" href="/">
            <img src="/images/ftsrg.png" alt="..." className="img-fluid" style={{ height: '3rem' }} />
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
                      <NavDropdown key={item.href} title={item.title} id="basic-nav-dropdown" className="active" show>
                        {item.children?.map((child) => (
                          <NavDropdown.Item as={AnchorLink} offset="70" key={child.href} href={child.href}>
                            {child.title}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    )
                  }

                  return (
                    <Nav.Link className="active" key={item.href} href={item.href}>
                      {item.title}
                    </Nav.Link>
                  )
                }

                return (
                  <Nav.Link key={item.href} href={item.href}>
                    {item.title}
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
