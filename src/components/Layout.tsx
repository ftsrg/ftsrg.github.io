import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import NavBar from './NavBar'
import SEO from './SEO'

const Layout: FC = ({ children }) => {
  const { title, image } = useSiteMetadata()
  return (
    <>
      <SEO />
      <Row as="header">
        <Col color="gray.100" style={{ backdropFilter: 'brightness(0.7) saturate(80%) blur(5px)' }}>
          <NavBar siteTitle={title} />
        </Col>
      </Row>
      <Container as="main">{children}</Container>
    </>
  )
}

export default Layout
