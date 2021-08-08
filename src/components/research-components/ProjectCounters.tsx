import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'
import VisibilitySensor from 'react-visibility-sensor'

const counterData = [
  {
    /* EEMCN, FUTEG, HIDE, DECOS, RESIST, Sensoria, Deserec, Diana, Hidenets, SafeDMI, Amber, Genesys, Mogentes,
      SecureChange, E-freight, R3-COP, CECRIS, Concerto, MONDO, R5-COP, ADVANCE, Arrowhead Tools, EMBrACE */
    title: 'EU-s kutatási projekt',
    count: 23
  },
  {
    title: 'Ipari együttműködés',
    count: 25
  },
  {
    // Lendulet, VKE, ERC_HU, OTKA, TéT, DAAD...
    title: 'Hazai és bilaterális projekt',
    count: 20
  }
]

const ProjectCounters: React.FC = () => {
  const [showCounter, setShowCounter] = React.useState(false)
  const reactToScroll = (isVisible: boolean) => {
    if (!showCounter && isVisible) setShowCounter(true)
  }
  const { t } = useTranslation()

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
