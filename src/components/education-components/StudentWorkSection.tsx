import React from 'react'
import Slider from 'react-slick'

const cardsData = [
  {
    title: 'Rendszertervezés (BSc)',
    subTitleLinkText: 'Impulzus 41:2',
    subTitleLinkUrl: 'http://www.impulzus.com/content/archivum/41/2.pdf',
    subTitleHelperText: ', 47. oldal',
    desc: `„Ezt a fajta rendszerben gondolkodást jól tükrözi az oktatás, miközben a tanultak kellően konkrétak, gyakorlatban is
    hasznosak. Sikerült megtalálnom a kutatómunka örömét is, ugyanis a csoportban különösen figyelnek a hallgatók önálló szakmai
    tevékenységére.”`
  },
  {
    title: 'Kritikus rendszerek (MSc)',
    subTitleLinkText: 'Impulzus 42:2',
    subTitleLinkUrl: 'http://www.impulzus.com/content/archivum/42/2.pdf',
    subTitleHelperText: ', 51. oldal',
    desc: `„A BSc ágazat és az MSc szakirány messzemenően felülmúlta a korábbi elképzeléseimet és elvárásaimat. Nem gondoltam volna, hogy
    ennyi érdekes témával lehet itt foglalkozni.”`
  }
]

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

      <Slider
        arrows={false}
        dots
        slidesToShow={2}
        slidesToScroll={1}
        className="py-3"
        responsive={[
          {
            breakpoint: 512,
            settings: {
              slidesToShow: 1
            }
          }
        ]}
        autoplay
        autoplaySpeed={4000}
      >
        {cardsData.map((data) => (
          <div key={data.title} className="px-3">
            <div className="ftco-testimonial-1">
              <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                <div>
                  <h3>{data.title}</h3>
                  <span>
                    <a href={data.subTitleLinkUrl} target="_blank" rel="noopener noreferrer">
                      {data.subTitleLinkText}
                    </a>
                    {data.subTitleHelperText}
                  </span>
                </div>
              </div>
              <div>
                <p>{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
)

export default StudentWorkSection
