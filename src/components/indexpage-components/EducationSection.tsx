import { Link } from '@reach/router'
import React from 'react'
import Slider from 'react-slick'

const cardData = [
  {
    category: 'Oktatás',
    title: 'Képzésünk lefedi a kritikus rendszerek tervezésének, analízisének és üzemeltetésének legfontosabb területeit',
    desc: `Három szakiránnyal (Rendszertervezés és Szoftverfejlesztés BSc-n, Kritikus rendszerek MSc-n) és több mint 12 tárggyal
    várjuk az érdeklődő hallgatókat.`,
    path: '/education',
    thumbnail: '/images/education.png'
  },
  {
    category: 'Tehetséggondozás',
    title: 'Kiemelt figyelmet fordítunk a tehetséggondozásra, hallgatóink előkelő helyezéseket szereznek a kari és országos TDK-n',
    desc: `Hallgatóink számos innovatív projekten dolgoznak, amelyek nemritkán önálló tudományos eredményekhez és ipari
    együttműködésekhez vezetnek.`,
    path: '/education#talentcare',
    thumbnail: '/images/student-project.jpg'
  },
  {
    category: 'Díjak, pályázatok',
    title: 'Hallgatóink minden évben kiválóan szerepelnek a tanulmányi és kutatói pályázatokon, ösztöndíjakon',
    desc: `Külföldi tanulmányutak, Rektori Különdíj, Új Nemzeti Kiválóság Program, Nemzeti Felsőoktatási Ösztöndíj, Kari és Egyetemi
    BME Ösztöndíjak...`,
    path: '/education#achievements',
    thumbnail: '/images/awards.jpg'
  }
]

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

      <Slider
        arrows={false}
        dots
        slidesToShow={3}
        slidesToScroll={1}
        className="py-3"
        responsive={[
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 512,
            settings: {
              slidesToShow: 1
            }
          }
        ]}
      >
        {cardData.map((data) => (
          <div key={data.category} className="p-2">
            <div className="education-1-item">
              <figure className="thumbnail">
                <img src={data.thumbnail} alt="..." className="img-fluid" />
                <div className="category bg-secondary">
                  <h3>{data.category}</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                <h2>{data.title}</h2>
                <p className="desc mb-4">{data.desc}</p>
                <Link to={data.path} className="btn btn-primary rounded-0 px-4">
                  Bővebben
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
)

export default EducationSection
