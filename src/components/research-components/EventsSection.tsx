import React from 'react'

const EventsSection: React.FC = () => (
  <div id="events" className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <h2 className="section-title-underline">
            <span>Események és díjak</span>
          </h2>
        </div>
      </div>

      <div className="owl-slide owl-carousel">
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="/images/logos/disc2019.png" alt="DISC 2019 konferencia" className="img-fluid mr-3" />
            <div>
              <h3>DISC 2019</h3>
              <span>33rd International Symposium on Distributed Computing</span>
            </div>
          </div>
          <div>
            <p>
              Kutatócsoportunk szervezte az International Symposium on Distributed Computing (DISC) konferenciát 2019. október 14-18. között
              Budapesten. A DISC egy nemzetközi, elismert akadémiai konferencia, aminek a témája az elosztott rendszerek és hálózatok
              elmélete, tervezése, analízise és alkalmazása.
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="http://www.disc-conference.org/wp/disc2019/">
                Bővebben
              </a>
            </p>
          </div>
        </div>

        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="/images/logos/mta-price.jpg" alt="MTA Akadémiai Díj" className="img-fluid mr-3" />
            <div>
              <h3>Akadémiai Díj</h3>
              <span>MTA Akadémiai Díj Pataricza András részére</span>
            </div>
          </div>
          <div>
            <p>
              A díj elismerte a kritikus informatikai infrastruktúrák és a kiberfizikai rendszerek elméleti megalapozását, tervezését és
              fejlesztését célzó példaértékű munkásságát, a hibatűrés terén nemzetközileg is ismert iskolateremtő tudományos tevékenységét,
              valamint a tudományos utánpótlás nevelésében elért eredményeit.
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mta.hu/mta_hirei/akademiai-elismeresek-nyilvanos-a-dijazottak-nevsora-110628"
              >
                Bővebben
              </a>
            </p>
          </div>
        </div>

        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="/images/logos/models-mip-award-2020.png" alt="MODELS 2020 Most Influential Paper Award" className="img-fluid mr-3" />
            <div>
              <h3>Most influential paper</h3>
              <span>Legnagyobb hatású cikk a MODELS 2020 konferencián</span>
            </div>
          </div>
          <div>
            <p>
              Kutatócsoportunk jelenlegi és korábbi munkatársai vehették át a „Legnagyobb hatású cikk” díját a modellalapú rendszer- és
              szoftvertervezés legrangosabb nemzetközi tudományos fórumán az „Incremental Evaluation of Model Queries over EMF Models” című,
              a MODELS 2010 konferencián bemutatott publikációjukért.
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="http://www.vik.bme.hu/hir/2665/">
                Bővebben
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EventsSection
