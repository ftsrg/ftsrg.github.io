import React from 'react'

const StudentWorkSection: React.FC = () => (
  <div id="student-work" className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <h2 className="section-title-underline">
            <span>Önálló munka</span>
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <p>
            Hallgatóink változatos témákon dolgozhatnak már a{' '}
            <a href="https://inf.mit.bme.hu/edu/individual/taskgroups" target="_blank" rel="noopener noreferrer">
              témalabortól
            </a>{' '}
            kezdődően: az ipari partnereink által inspirált gyakorlati fejlesztési feladatoktól kezdve az elméleti jellegű kutatási témákig
            széles spektrumon biztosítunk konzultációt. Célunk, hogy hallgatóink olyan témákat találjanak, amikben elmélyülnek és szakmailag
            fejlődnek.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <p>
            <img src="/images/students/thesis-topics.jpg" alt="Szakdolgozat és diplomaterv témák" className="img-fluid" />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <div>
              <h3>Rendszertervezés (BSc)</h3>
              <span>
                <a href="http://www.impulzus.com/content/archivum/41/2.pdf" target="_blank" rel="noopener noreferrer">
                  Impulzus 41:2
                </a>
                , 47. oldal
              </span>
            </div>
          </div>
          <div>
            <p>
              „Ezt a fajta rendszerben gondolkodást jól tükrözi az oktatás, miközben a tanultak kellően konkrétak, gyakorlatban is
              hasznosak. Sikerült megtalálnom a kutatómunka örömét is, ugyanis a csoportban különösen figyelnek a hallgatók önálló szakmai
              tevékenységére.”
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-6 ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <div>
              <h3>Kritikus rendszerek (MSc)</h3>
              <span>
                <a href="http://www.impulzus.com/content/archivum/42/2.pdf" target="_blank" rel="noopener noreferrer">
                  Impulzus 42:2
                </a>
                , 51. oldal
              </span>
            </div>
          </div>
          <div>
            <p>
              „A BSc ágazat és az MSc szakirány messzemenően felülmúlta a korábbi elképzeléseimet és elvárásaimat. Nem gondoltam volna, hogy
              ennyi érdekes témával lehet itt foglalkozni.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default StudentWorkSection
