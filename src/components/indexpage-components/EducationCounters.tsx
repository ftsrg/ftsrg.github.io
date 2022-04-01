import { Link } from 'gatsby'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'
import VisibilitySensor from 'react-visibility-sensor'

const counterData = [
  {
    title: 'home.counters.c1.title',
    isGatsbyLink: false,
    url: 'https://diplomaterv.vik.bme.hu/hu/Browse.aspx?d=MIT',
    count: 498
    /* From diplomaterv portal, 2010-2021 Summer */
  },
  {
    title: 'home.counters.c2.title',
    isGatsbyLink: false,
    url: 'http://tdk.bme.hu/Browse/Papers?f=VIK&d=MIT',
    count: 117
    /* Until 2021-12: 38 OTDK (2001-) and 79 TDK (2009-) */
  },
  {
    title: 'home.counters.c3.title',
    isGatsbyLink: true,
    url: '/education#achievements',
    count: 80
    /* Until 2021-12: UNKP (2016-2021): 18; Rektori: 4; PP thesis: 8; NFÖD: 25+; ACM-W: 1; CERN: 9+; Huawei: 7+; IBM: 4;
    Siemens: 2; OTDT: 2; KBME: did not count... */
  }
]

const EducationCounters: React.FC = () => {
  const [showCounter, setShowCounter] = React.useState(false)
  const reactToScroll = (isVisible: boolean) => {
    if (!showCounter && isVisible) setShowCounter(true)
  }
  const { t } = useTranslation()

  return (
    <VisibilitySensor partialVisibility onChange={reactToScroll}>
      <div className="counter my-3">
        <Row>
          {counterData.map((data) => (
            <Col key={data.title} xs={12} md={4} className="text-center mb-4">
              <div className={`${showCounter ? 'counter-animated' : 'counter-unanimated'}`}>
                <div>{showCounter && <CountUp end={data.count} duration={3} className="text-primary h1 font-weight-bold" />}</div>
                {data.isGatsbyLink ? (
                  <Link to={data.url}>{t(data.title)}</Link>
                ) : (
                  <a target="_blank" rel="noopener noreferrer" href={data.url}>
                    {t(data.title)}
                  </a>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </VisibilitySensor>
  )
}

export default EducationCounters
