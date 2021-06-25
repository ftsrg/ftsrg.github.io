import React from 'react'

const ProjectsSection: React.FC = () => (
  <div id="projects" className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <h2 className="section-title-underline">
            <span>Projektjeink</span>
          </h2>
        </div>
      </div>

      <div className="owl-slide owl-carousel">
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="images/logos/advance.png" alt="..." className="img-fluid mr-3" />
            <div>
              <h3>ADVANCE</h3>
              <span>Addressing Verification and Validation Challenges in Future Cyber-Physical Systems</span>
            </div>
          </div>
          <div>
            <p>
              A BME részvételével 2019 januárjában elindult az „Addressing Verification and Validation Challenges in Future Cyber-Physical
              Systems” (ADVANCE) nevű H2020 RISE kutatási projekt, ami a jövő kiberfizikai rendszereinek ellenőrzési kihívásait fogja
              vizsgálni. A projekt futamideje 4 év és teljes költségvetése € 657 800.
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="http://advance-rise.eu/">
                Bővebben
              </a>
            </p>
          </div>
        </div>

        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="images/logos/embrace.png" alt="..." className="img-fluid mr-3" />
            <div>
              <h3>EMBrACE</h3>
              <span>Environment for model-based rigorous adaptive co-design and operation of CPS</span>
            </div>
          </div>
          <div>
            <p>
              A BME részvételével elindult az „Environment for model-based rigorous adaptive co-design and operation of CPS” (EMBrACE) című
              ITEA 3 projekt. Az IncQuery Labs és további húsz partner együttműködésével készítünk komplex ipari rendszerek tervezéséhez
              innovatív mérnöki nyelveket és eszközöket.
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="https://itea3.org/project/embrace.html">
                Bővebben
              </a>
            </p>
          </div>
        </div>

        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="images/logos/eit-digital.png" alt="..." className="img-fluid mr-3" />
            <div>
              <h3>Blockchain</h3>
              <span>Blockchain for the Decision Maker</span>
            </div>
          </div>
          <div>
            <p>
              Az EIT Digital Professional School keretében kidolgozunk egy olyan tanfolyamsorozatot, ami bemutatja, hogy hogyan lehet a
              blockchain technológiákat beépíteni egy cég üzletmenetébe és innovatív szolgáltatásaibe.
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://professionalschool.eitdigital.eu/professional-courses/blockchain-decision-maker/"
              >
                Bővebben
              </a>
            </p>
          </div>
        </div>

        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img src="images/logos/arrowhead-tools.png" alt="..." className="img-fluid mr-3" />
            <div>
              <h3>Arrowhead Tools</h3>
              <span>European investment for Digitalisation and Automation Leadership</span>
            </div>
          </div>
          <div>
            <p>
              A BME TMIT és MIT részvételével 2019 májusában elindult az „Arrowhead Tools” H2020 ECSEL projekt, ami Európa legnagyobb, ipari
              digitalizációs és automatizálási megoldásokat fejlesztő K+F+I projektje. A projektben több mint 80 partner vesz részt, köztük
              az AITIA, evopro Innovation és az IncQuery Labs.
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.arrowhead.eu/arrowheadtools">
                Bővebben
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectsSection
