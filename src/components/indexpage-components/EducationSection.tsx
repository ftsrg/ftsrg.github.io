import React from 'react'

const EducationSection: React.FC = () => (
  <div id="education" className="site-section ftco-counter">
    <div className="container">
      <div className="row mb-3 justify-content-center text-center">
        <div className="col-lg-6 mb-3">
          <h2 className="section-title-underline mb-3">
            <span>Oktatás és tehetséggondozás</span>
          </h2>
        </div>
      </div>

      <div className="row d-md-flex align-items-center justify-content-center">
        <div className="col-lg-12">
          <div className="row d-md-flex align-items-center" id="section-counter">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="icon">
                  <span className="flaticon-doctor" />
                </div>
                <div className="text">
                  <strong className="number" data-number="450">
                    0
                  </strong>
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://diplomaterv.vik.bme.hu/hu/Browse.aspx?d=MIT">
                      Szakdolgozat és diplomaterv
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="icon">
                  <span className="flaticon-doctor" />
                </div>
                <div className="text">
                  <strong className="number" data-number="109">
                    0
                  </strong>
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href="http://tdk.bme.hu/Browse/Papers?f=VIK&d=MIT">
                      TDK és OTDK dolgozat
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="icon">
                  <span className="flaticon-doctor" />
                </div>
                <div className="text">
                  <strong className="number" data-number="69">
                    0
                  </strong>
                  <span>
                    <a href="education.html#achievements">Hallgatói díj és kitüntetés</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="owl-slide-3 owl-carousel">
            <div className="education-1-item">
              <figure className="thumnail">
                <img src="images/education.png" alt="..." className="img-fluid" />
                <div className="category bg-secondary">
                  <h3>Oktatás</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                <h2>Képzésünk lefedi a kritikus rendszerek tervezésének, analízisének és üzemeltetésének legfontosabb területeit</h2>
                <p className="desc mb-4">
                  Három szakiránnyal (Rendszertervezés és Szoftverfejlesztés BSc-n, Kritikus rendszerek MSc-n) és több mint 12 tárggyal
                  várjuk az érdeklődő hallgatókat.
                </p>
                <p>
                  <a href="education.html" className="btn btn-primary rounded-0 px-4">
                    Bővebben
                  </a>
                </p>
              </div>
            </div>

            <div className="education-1-item">
              <figure className="thumnail">
                <img src="images/student-project.jpg" alt=".." className="img-fluid" />
                <div className="category bg-secondary">
                  <h3>Tehetséggondozás</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                <h2>
                  Kiemelt figyelmet fordítunk a tehetséggondozásra, hallgatóink előkelő helyezéseket szereznek a kari és országos TDK-n
                </h2>
                <p className="desc mb-4">
                  Hallgatóink számos innovatív projekten dolgoznak, amelyek nemritkán önálló tudományos eredményekhez és ipari
                  együttműködésekhez vezetnek.
                </p>
                <p>
                  <a href="education.html#talentcare" className="btn btn-primary rounded-0 px-4">
                    Bővebben
                  </a>
                </p>
              </div>
            </div>

            <div className="education-1-item">
              <figure className="thumnail">
                <img src="images/awards.jpg" alt="..." className="img-fluid" />
                <div className="category bg-secondary">
                  <h3>Díjak, pályázatok</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                <h2>Hallgatóink minden évben kiválóan szerepelnek a tanulmányi és kutatói pályázatokon, ösztöndíjakon</h2>
                <p className="desc mb-4">
                  Külföldi tanulmányutak, Rektori Különdíj, Új Nemzeti Kiválóság Program, Nemzeti Felsőoktatási Ösztöndíj, Kari és Egyetemi
                  BME Ösztöndíjak...
                </p>
                <p>
                  <a href="education.html#achievements" className="btn btn-primary rounded-0 px-4">
                    Bővebben
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EducationSection
