import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'

const eventsData = [
  {
    title: 'DISC 2019',
    subtitle: '33rd International Symposium on Distributed Computing',
    desc: `Kutatócsoportunk szervezte az International Symposium on Distributed Computing (DISC) konferenciát 2019. október 14-18. között
    Budapesten. A DISC egy nemzetközi, elismert akadémiai konferencia, aminek a témája az elosztott rendszerek és hálózatok
    elmélete, tervezése, analízise és alkalmazása.`,
    url: 'http://www.disc-conference.org/wp/disc2019/',
    thumbnail: '/images/logos/disc2019.png'
  },
  {
    title: 'Akadémiai Díj',
    subtitle: 'MTA Akadémiai Díj Pataricza András részére',
    desc: `A díj elismerte a kritikus informatikai infrastruktúrák és a kiberfizikai rendszerek elméleti megalapozását, tervezését és
    fejlesztését célzó példaértékű munkásságát, a hibatűrés terén nemzetközileg is ismert iskolateremtő tudományos tevékenységét,
    valamint a tudományos utánpótlás nevelésében elért eredményeit.`,
    url: 'https://mta.hu/mta_hirei/akademiai-elismeresek-nyilvanos-a-dijazottak-nevsora-110628',
    thumbnail: '/images/logos/mta-price.jpg'
  },
  {
    title: 'Most influential paper',
    subtitle: 'Legnagyobb hatású cikk a MODELS 2020 konferencián',
    desc: `Kutatócsoportunk jelenlegi és korábbi munkatársai vehették át a „Legnagyobb hatású cikk” díját a modellalapú rendszer- és
    szoftvertervezés legrangosabb nemzetközi tudományos fórumán az „Incremental Evaluation of Model Queries over EMF Models” című,
    a MODELS 2010 konferencián bemutatott publikációjukért.`,
    url: 'http://www.vik.bme.hu/hir/2665/',
    thumbnail: '/images/logos/models-mip-award-2020.png'
  }
]

const EventsCarousel: React.FC = () => {
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
    >
      {eventsData.map((data) => (
        <div key={data.title} className="px-3">
          <div key={data.title} className="ftco-testimonial-1">
            <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
              <img src={data.thumbnail} alt="..." className="img-fluid mr-3" />
              <div>
                <h3>{t(data.title)}</h3>
                <span>{t(data.subtitle)}</span>
              </div>
            </div>
            <div>
              <p>{t(data.desc)}</p>
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

export default EventsCarousel
