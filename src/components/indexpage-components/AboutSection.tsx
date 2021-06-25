import React from 'react'

const AboutSection: React.FC = () => (
  <div id="about" className="section-bg style-1" style={{ backgroundImage: `url('/images/hero_3.png')` }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h2 className="section-title-underline style-2">
            <span>A kutatócsoportról</span>
          </h2>
        </div>
        <div className="col-lg-8">
          <p className="lead">
            Fő területünk a kritikus informatikai rendszerek, folyamatok és platformok tervezése, ellenőrzése és üzemeltetésének támogatása.
            A magas színvonalat nemcsak a tervezett rendszerekkel szemben várjuk el, hanem a kutatás és oktatás területén is magunkénak
            valljuk.
          </p>
          <p>
            A BME VIK Méréstechnika és Információs Rendszerek Tanszékén működő Hibatűrő Rendszerek Kutatócsoportot (ftsrg) 1994-ben
            alapította Prof. Pataricza András a hibatűrő számítástechnika kutatására és oktatására. A csoport az azóta eltelt években a
            rendszermodellezés, &#8209;tervezés és &#8209;ellenőrzés nemzetközileg jegyzett kutatócsoportjává vált, harmincnál is több
            európai kutatási és ipari együttműködésben kamatoztatva tudását. 2019-től megújult arculattal, Kritikus Rendszerek Kutatócsoport
            (Critical Systems Research Group) néven, de a jól bevált „ftsrg” rövidítéssel és mentalitással folytatjuk az első 25 év
            hagyományait.
          </p>
          <p>
            Bővebben a kutatócsoportról a{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.bme.hu/hirek/20191219/Megszallottan_torodunk_a_tehetseges_hallgatokkal"
            >
              BME
            </a>{' '}
            és az{' '}
            <a target="_blank" rel="noopener noreferrer" href="http://www.impulzus.com/content/archivum/47/2.pdf">
              Impulzus
            </a>{' '}
            interjújában olvasható.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default AboutSection
