import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgPerformance } from 'react-icons/cg'
import { FaBug } from 'react-icons/fa'
import { VscRocket } from 'react-icons/vsc'
import Hero from '~components/Hero'
import { ImageDataLike, StaticImage } from 'gatsby-plugin-image'

const compentencesData = [
  {
    icon: <VscRocket size="3.75rem" />,
    title: 'home.competences.c1.title',
    desc: 'home.competences.c1.desc'
  },
  {
    icon: <FaBug size="3.65rem" />,
    title: 'home.competences.c2.title',
    desc: 'home.competences.c2.desc'
  },
  {
    icon: <CgPerformance size="4rem" />,
    title: 'home.competences.c3.title',
    desc: 'home.competences.c3.desc'
  }
]

type Props = {
}

const InvitationSection: React.FC<Props> = ({}) => {
  const { t, language } = useI18next()

  return (
    <Hero id="invitation">
      <Row>
        <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
          <StaticImage
            src="../../../static/images/members2024.jpg"
            className="img-fluid"
            layout="fullWidth"
            alt={language === 'hu' ? 'A kutatócsoport' : 'The Research Group'}
          />
        </Col>
        <Col lg={5} className="me-auto align-self-center order-2 order-lg-1">
          <h2 className="section-title-underline style-2 mb-5">
            {language === 'hu' && <span>Meghívó</span>}
            {language === 'en' && <span>Invitation</span>}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec eleifend lectus. Fusce sit amet justo eu elit semper
            efficitur vitae ac tellus. Integer elit enim, porttitor et pellentesque rutrum, suscipit sit amet tortor. Praesent eu lectus
            aliquet, ultrices ante a, blandit ipsum. In sagittis accumsan sem. Proin hendrerit porta eros, id sollicitudin diam laoreet
            vitae. Nunc dictum nisl dui, non efficitur arcu sodales eget. Aenean volutpat, elit id ultricies luctus, dolor dolor congue
            ipsum, vitae porttitor ligula felis non lectus. Nullam iaculis luctus libero in eleifend. Cras vitae lectus tortor. Phasellus
            est mauris, egestas eu lacinia quis, sodales a enim.
          </p>
        </Col>
      </Row>
    </Hero>
  )
}

export default InvitationSection
