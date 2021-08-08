import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgPerformance } from 'react-icons/cg'
import { FaBug } from 'react-icons/fa'
import { VscRocket } from 'react-icons/vsc'
import Hero from '~components/Hero'

const compentencesData = [
  {
    icon: <VscRocket size="3.75rem" />,
    title: 'Kritikus rendszerek fejlesztése',
    desc: `Módszertanok, fejlesztési környezetek, technikák és technológiák a modellalapú kritikus informatikai és kiberfizikai
    rendszerek és alkalmazások tervezésére.`
  },
  {
    icon: <FaBug size="3.65rem" />,
    title: 'Ellenőrzés és tesztelés',
    desc: `Formális módszerek és modellalapú tesztelés alkalmazása funkcionális, megbízhatósági, biztonsági és teljesítmény
    követelmények ellenőrzése és tanúsítása során.`
  },
  {
    icon: <CgPerformance size="4rem" />,
    title: 'Empirikus rendszertervezés',
    desc: `Teljesítmény és megbízhatósági követelmények kísérleti vizsgálata, mérése, analízise, méretezése származtatott modellek
    alapján, hibamodellezés.`
  }
]

const CompetencesSection: React.FC = () => (
  <Hero id="competences" heroTitle="Szakmai kompetenciáink" isHeroTitleCentered>
    <Row className="justify-content-center mb-5">
      <Col lg={7}>
        <p className="text-center mb-5">
          Fő területünk a kritikus informatikai rendszerek, folyamatok és platformok szolgáltatásbiztonságra tervezése, ideértve a
          kiberfizikai és informatikai infrastruktúrákat, alkalmazásokat. Alapvető metodikánk a modellalapú tervezés, analízis és
          helyességbizonyítás.
        </p>
      </Col>
    </Row>
    <Row>
      {compentencesData.map((data) => (
        <Col key={data.title} lg={4} md={6} className="mb-4 mb-lg-0">
          <div className="feature-1 border">
            <div className="icon-wrapper bg-primary text-white d-flex align-items-center justify-content-center">{data.icon}</div>
            <div className="feature-1-content">
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Hero>
)

export default CompetencesSection
