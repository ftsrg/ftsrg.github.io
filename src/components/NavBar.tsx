import { Link as ReachLink } from '@reach/router'
import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import LanguageToggle from './LanguageToggle'

interface NavBarProps {
  siteTitle: string
}

const NavBar: FC<NavBarProps> = ({ siteTitle }) => (
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

export default NavBar
