import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const counterData = [
  {
    /* EEMCN, FUTEG, HIDE, DECOS, RESIST, Sensoria, Deserec, Diana, Hidenets, SafeDMI, Amber, Genesys, Mogentes,
      SecureChange, E-freight, R3-COP, CECRIS, Concerto, MONDO, R5-COP, ADVANCE, Arrowhead Tools, EMBrACE, ProtectME,
      Urban Mobility ADA, SME4DD, OpenSCALING, EDGE-Skills, DOSS */
    title: 'research.projects.counter1.title',
    count: 29
  },
  {
    title: 'research.projects.counter2.title',
    count: 25
  },
  {
    // Lendulet, VKE, ERC_HU, OTKA, TéT, DAAD...
    title: 'research.projects.counter3.title',
    count: 20
  }
]

const ProjectCounters: React.FC = () => {
  const [showCounter, setShowCounter] = React.useState(false)
  const reactToScroll = (isVisible: boolean) => {
    if (!showCounter && isVisible) setShowCounter(true)
  }
  const { t } = useI18next()

  return (
    <VisibilitySensor partialVisibility onChange={reactToScroll}>
      <div className="counter my-4 mb-5">
        <Row>
          {counterData.map((data) => (
            <Col xs={12} md={4} key={data.title} className="text-center mb-4">
              <div className={`${showCounter ? 'counter-animated' : 'counter-unanimated'}`}>
                <div>
                  <CountUp end={data.count} duration={3} className="text-primary h1 font-weight-bold" />
                </div>
                <div>{t(data.title)}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </VisibilitySensor>
  )
}

export default ProjectCounters
