import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const counterData = [
  {
    title: 'home.counters.c1.title',
    isGatsbyLink: false,
    url: 'https://diplomaterv.vik.bme.hu/hu/Browse.aspx?d=MIT',
    count: 600,
    suffix: '+'
    /* From diplomaterv portal, 2010-2021 Summer */
  },
  {
    title: 'home.counters.c2.title',
    isGatsbyLink: false,
    url: 'http://tdk.bme.hu/Browse/Papers?f=VIK&d=MIT',
    count: 230,
    suffix: '+'
    /* Until 2024-12: 38 OTDK (2001-) and 191 TDK (2000-) */
  },
  {
    title: 'home.counters.c3.title',
    isGatsbyLink: true,
    url: '/education#achievements',
    count: 115,
    suffix: '+'
    /* Until 2024-12: DKOP: 7; UNKP/EKOP/KDP (2016-2024): 42; Rektori: 5; PP thesis: 8; NFÖD: 25+; ACM-W: 1; CERN: 13+; Huawei: 7+; IBM: 4;
    Siemens: 2; OTDT: 2; KBME: did not count... */
  }
]

const EducationCounters: React.FC = () => {
  const [showCounter, setShowCounter] = React.useState(false)
  const reactToScroll = (isVisible: boolean) => {
    if (!showCounter && isVisible) setShowCounter(true)
  }
  const { t } = useI18next()

  return (
    <VisibilitySensor partialVisibility onChange={reactToScroll}>
      <div className="counter my-3">
        <Row>
          {counterData.map((data) => (
            <Col key={data.title} xs={12} md={4} className="text-center mb-4">
              <div className={`${showCounter ? 'counter-animated' : 'counter-unanimated'}`}>
                <div>
                  {showCounter && (
                    <CountUp end={data.count} duration={3} suffix={data.suffix} className="text-primary h1 font-weight-bold" />
                  )}
                </div>
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
