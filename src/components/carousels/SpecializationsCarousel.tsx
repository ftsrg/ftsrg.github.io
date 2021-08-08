import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'

const specsData = [
  {
    title: 'Rendszertervezés (BSc)',
    subtitle: 'Tervezés és integráció a szoftveren innen és túl',
    paragraphs: [
      `Egy modern kiber-fizikai rendszer olyan megbízható és intelligens komponensekbol és szolgáltatásokból álló, döntően
    szoftveralapú nyílt rendszer, amely az Interneten keresztül közvetlen összeköttetésben áll a különféle mobil- és
    okoseszközökkel, a külvilágot érzékelő szenzorokkal és beavatkozókkal, a szinte korlátlan kapacitású számítási felhővel – és
    azokkal a kritikus alrendszerekkel is, amelyek helyes működésén életek múlnak.`,
      `A specializáció célja olyan rendszermérnökök képzése, akik képesek e modern rendszerek specifikálására, tervezésére,
    integrációjára, ellenőrzésére és megvalósítására egy felülről lefelé történő, modellcentrikus megközelítéssel, amely már
    napjainkban is domináns a kritikus rendszerek számos területén (pl. autó, repülőgép, gyógyászati berendezések,
    bioinformatika).`
    ],
    url: 'https://www.mit.bme.hu/oktatas/kepzesek/bsc/info/rendszertervezes',
    thumbnail: '/images/spec_1.jpg'
  },
  {
    title: 'Szoftverfejlesztés (BSc)',
    subtitle: 'Programozni bárki megtanulhat, de jól csinálni nehéz',
    paragraphs: [
      `A specializáció célja megismertetni a hallgatókat azokkal a kurrens szoftvertechnikákkal és eszközökkel, amelyek informatikai
    rendszerek megvalósításához, teszteléséhez, karbantartásához és dokumentálásához szükségesek.`,
      `A specializáció kiemelt hangsúlyt fektet a legfrissebb szoftverirányzatok teljes spektrumának lefedésére, különös tekintettel
    a kliens oldalra és az informatikai háttérrendszerek fejlesztésére, a vonatkozó megvalósítási technikákra, heterogén
    platformok rendszerintegrációs elveire, olyan igényes grafikai információmegjelenítési és felhasználói interfész kialakítási
    módszerekre és fejlesztési technológiákra, amelyek követik a felhasználói igényeket, valamint a korszerű rendszerfejlesztési
    koncepcióknak való megfelelés követelményeire.`
    ],
    url: 'https://www.mit.bme.hu/oktatas/kepzesek/bsc/info/szoftverfejlesztes',
    thumbnail: '/images/spec_2.jpg'
  },
  {
    title: 'Kritikus rendszerek (MSc)',
    subtitle: 'A nagy felelősség minőségi munkát igényel',
    paragraphs: [
      `A biztonság szempontjából kritikus rendszerekkel találkozunk például gépjárművek, vasutak és repülők fedélzeti rendszerei
    esetén, de ugyanilyen kiemelt jelentőségűek az üzletileg kritikus szolgáltatások és számítógépes infrastruktúrák is.
    Napjainkban e kritikus rendszerek 70-80%-át szoftver alkalmazások teszik ki. A kritikus rendszerek és szoftverek fejlesztése
    jelentősen eltér a hagyományos webes és mobil alkalmazásokétól.`,
      `A Kritikus rendszerek MSc főspecializáció missziója, hogy olyan elit mérnökinformatikusokat képezzen ki, akik jártasak a
    kritikus rendszerek tervezésében, fejlesztésében, ellenőrzésében és üzemeltetésében, és bármilyen európai munkahelyen
    megállják a helyüket.`
    ],
    url: 'https://www.mit.bme.hu/oktatas/kepzesek/msc/info/kritikus-rendszerek',
    thumbnail: '/images/spec_3.jpg'
  }
]

const SpecializationsCarousel: React.FC = () => {
  const { t } = useTranslation()

  return (
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
      {specsData.map((data) => (
        <div key={data.title} className="px-3">
          <div className="ftco-testimonial-1">
            <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
              <img src={data.thumbnail} alt="Rendszertervezés" className="img-fluid img-rounded mr-3" />
              <div>
                <h3>{t(data.title)}</h3>
                <span>{t(data.subtitle)}</span>
              </div>
            </div>
            <div>
              {data.paragraphs.map((pText) => (
                <p key={pText.slice(0, 20)}>{t(pText)}</p>
              ))}
              <p>
                <a target="_blank" rel="noopener noreferrer" href={data.url}>
                  {t('commons.readMore')}
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SpecializationsCarousel
