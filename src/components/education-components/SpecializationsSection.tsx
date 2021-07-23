import React from 'react'

const SpecializationsSection: React.FC = () => (
  <div id="specializations" className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <h2 className="section-title-underline">
            <span>Specializációk</span>
          </h2>
        </div>
      </div>

      <div className="owl-slide owl-carousel">
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="/images/spec_1.jpg" alt="Rendszertervezés" className="img-fluid img-rounded mr-3" />
            <div>
              <h3>Rendszertervezés (BSc)</h3>
              <span>Tervezés és integráció a szoftveren innen és túl</span>
            </div>
          </div>
          <div>
            <p>
              Egy modern kiber-fizikai rendszer olyan megbízható és intelligens komponensekbol és szolgáltatásokból álló, döntően
              szoftveralapú nyílt rendszer, amely az Interneten keresztül közvetlen összeköttetésben áll a különféle mobil- és
              okoseszközökkel, a külvilágot érzékelő szenzorokkal és beavatkozókkal, a szinte korlátlan kapacitású számítási felhővel – és
              azokkal a kritikus alrendszerekkel is, amelyek helyes működésén életek múlnak.
            </p>
            <p>
              A specializáció célja olyan rendszermérnökök képzése, akik képesek e modern rendszerek specifikálására, tervezésére,
              integrációjára, ellenőrzésére és megvalósítására egy felülről lefelé történő, modellcentrikus megközelítéssel, amely már
              napjainkban is domináns a kritikus rendszerek számos területén (pl. autó, repülőgép, gyógyászati berendezések,
              bioinformatika).
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.mit.bme.hu/oktatas/kepzesek/bsc/info/rendszertervezes">
                Bővebben
              </a>
            </p>
          </div>
        </div>

        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="/images/spec_2.jpg" alt="Szoftverfejlesztés" className="img-fluid img-rounded mr-3" />
            <div>
              <h3>Szoftverfejlesztés (BSc)</h3>
              <span>Programozni bárki megtanulhat, de jól csinálni nehéz</span>
            </div>
          </div>
          <div>
            <p>
              A specializáció célja megismertetni a hallgatókat azokkal a kurrens szoftvertechnikákkal és eszközökkel, amelyek informatikai
              rendszerek megvalósításához, teszteléséhez, karbantartásához és dokumentálásához szükségesek.
            </p>
            <p>
              A specializáció kiemelt hangsúlyt fektet a legfrissebb szoftverirányzatok teljes spektrumának lefedésére, különös tekintettel
              a kliens oldalra és az informatikai háttérrendszerek fejlesztésére, a vonatkozó megvalósítási technikákra, heterogén
              platformok rendszerintegrációs elveire, olyan igényes grafikai információmegjelenítési és felhasználói interfész kialakítási
              módszerekre és fejlesztési technológiákra, amelyek követik a felhasználói igényeket, valamint a korszerű rendszerfejlesztési
              koncepcióknak való megfelelés követelményeire.
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.mit.bme.hu/oktatas/kepzesek/bsc/info/szoftverfejlesztes">
                Bővebben
              </a>
            </p>
          </div>
        </div>

        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="/images/spec_3.jpg" alt="Association for Computer Machinery" className="img-fluid img-rounded mr-3" />
            <div>
              <h3>Kritikus rendszerek (MSc)</h3>
              <span>A nagy felelősség minőségi munkát igényel</span>
            </div>
          </div>
          <div>
            <p>
              A biztonság szempontjából kritikus rendszerekkel találkozunk például gépjárművek, vasutak és repülők fedélzeti rendszerei
              esetén, de ugyanilyen kiemelt jelentőségűek az üzletileg kritikus szolgáltatások és számítógépes infrastruktúrák is.
              Napjainkban e kritikus rendszerek 70-80%-át szoftver alkalmazások teszik ki. A kritikus rendszerek és szoftverek fejlesztése
              jelentősen eltér a hagyományos webes és mobil alkalmazásokétól.
            </p>
            <p>
              A Kritikus rendszerek MSc főspecializáció missziója, hogy olyan elit mérnökinformatikusokat képezzen ki, akik jártasak a
              kritikus rendszerek tervezésében, fejlesztésében, ellenőrzésében és üzemeltetésében, és bármilyen európai munkahelyen
              megállják a helyüket.
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.mit.bme.hu/oktatas/kepzesek/msc/info/kritikus-rendszerek">
                Bővebben
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SpecializationsSection
