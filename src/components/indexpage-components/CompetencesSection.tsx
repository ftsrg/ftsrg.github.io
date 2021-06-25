import React from 'react'

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
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="feature-1 border">
            <div className="icon-wrapper bg-primary">
              <span className="flaticon-rocket text-white" />
            </div>
            <div className="feature-1-content">
              <h2>Kritikus rendszerek fejlesztése</h2>
              <p>
                Módszertanok, fejlesztési környezetek, technikák és technológiák a modellalapú kritikus informatikai és kiberfizikai
                rendszerek és alkalmazások tervezésére.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="feature-1 border">
            <div className="icon-wrapper bg-primary">
              <span className="flaticon-test text-white" />
            </div>
            <div className="feature-1-content">
              <h2>Ellenőrzés és tesztelés</h2>
              <p>
                Formális módszerek és modellalapú tesztelés alkalmazása funkcionális, megbízhatósági, biztonsági és teljesítmény
                követelmények ellenőrzése és tanúsítása során.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="feature-1 border">
            <div className="icon-wrapper bg-primary">
              <span className="flaticon-bars-chart text-white" />
            </div>
            <div className="feature-1-content">
              <h2>Empirikus rendszertervezés</h2>
              <p>
                Teljesítmény és megbízhatósági követelmények kísérleti vizsgálata, mérése, analízise, méretezése származtatott modellek
                alapján, hibamodellezés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CompetencesSection
