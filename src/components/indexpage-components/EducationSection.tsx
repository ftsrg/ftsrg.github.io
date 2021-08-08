import { Link } from 'gatsby'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import EducationCounters from './EducationCounters'

const cardsData = [
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

const EducationSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div id="education" className="site-section">
      <Container>
        <div className="mb-5 text-center">
          <h2 className="section-title-underline">
            <span>Oktatás és tehetséggondozás</span>
          </h2>
        </div>
        <EducationCounters />
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
          {cardsData.map((data) => (
            <div key={data.category} className="p-2">
              <div className="education-1-item">
                <figure className="thumbnail">
                  <img src={data.thumbnail} alt="..." className="img-fluid" />
                  <div className="category bg-secondary">
                    <h3>{t(data.category)}</h3>
                  </div>
                </figure>
                <div className="education-1-content pb-4">
                  <h2>{t(data.title)}</h2>
                  <p className="desc mb-4">{t(data.desc)}</p>
                  <Link to={data.path} className="btn btn-primary rounded-0 px-4">
                    Bővebben
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default EducationSection
