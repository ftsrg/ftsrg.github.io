import React from 'react'
import { CgPerformance } from 'react-icons/cg'
import { FaBug } from 'react-icons/fa'
import { VscRocket } from 'react-icons/vsc'

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
  <div id="competences" className="section-bg style-1">
    <div className="container">
      <div className="row mb-5 justify-content-center text-center">
        <div className="col-lg-7 mb-5">
          <h2 className="section-title-underline style-2 mb-5">
            <span>Szakmai kompetenciáink</span>
          </h2>
          <p className="text-center mb-0">
            Fő területünk a kritikus informatikai rendszerek, folyamatok és platformok szolgáltatásbiztonságra tervezése, ideértve a
            kiberfizikai és informatikai infrastruktúrákat, alkalmazásokat. Alapvető metodikánk a modellalapú tervezés, analízis és
            helyességbizonyítás.
          </p>
        </div>
      </div>
      <div className="row">
        {compentencesData.map((data) => (
          <div key={data.title} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="feature-1 border">
              <div className="icon-wrapper bg-primary text-white d-flex align-items-center justify-content-center">{data.icon}</div>
              <div className="feature-1-content">
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default CompetencesSection
