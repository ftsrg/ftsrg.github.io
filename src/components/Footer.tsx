import React from 'react'

interface FooterProps {
  hasContact?: boolean
}

const Footer: React.FC<FooterProps> = ({ hasContact }) => (
  <>
    {hasContact && (
      <div className="site-section ftco-subscribe-1" style={{ backgroundImage: `url('/images/bg_2.png')` }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9 d-flex align-items-center">
              <a href="http://mit.bme.hu/~micskeiz" target="_blank" rel="noopener noreferrer">
                <img src="images/members/micskei-small.png" alt="Micskei Zoltán" width="100px" className="mr-4" />
              </a>
              <div>
                <h2>Kérdésed van?</h2>
                <p className="mb-0">
                  A kutatócsoporttal kapcsolatos kérdésekkel keresd{' '}
                  <a href="http://mit.bme.hu/~micskeiz" target="_blank" rel="noopener noreferrer">
                    Dr. Micskei Zoltánt
                  </a>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center footer-column">
            <img src="images/ftsrg-small-white.png" alt="..." width="120px" className="mb-4" />
            <p>H-1117 Budapest, Magyar tudósok körútja&nbsp;2., I ép. B szárny, IV. em.</p>
            <p>
              <a href="contact.html">Elérhetőség</a>
            </p>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-2 footer-column">
            <h3 className="footer-heading">
              <span>Kutatás</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="research.html#projects">Projektek</a>
              </li>
              <li>
                <a href="research.html#publications">Publikációk</a>
              </li>
              <li>
                <a href="research.html#tools">Eszközök</a>
              </li>
              <li>
                <a href="research.html#events">Események</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 footer-column">
            <h3 className="footer-heading">
              <span>Oktatás</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="education.html#specializations">Specializációk</a>
              </li>
              <li>
                <a href="education.html#courses">Tantárgyak</a>
              </li>
              <li>
                <a href="education.html#student-work">Önálló munka</a>
              </li>
              <li>
                <a href="education.html#talentcare">Tehetséggondozás</a>
              </li>
              <li>
                <a href="education.html#achievements">Hallgatóink eredményei</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 footer-column">
            <h3 className="footer-heading">
              <span>Rólunk</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="about.html#members">Munkatársak</a>
              </li>
              <li>
                <a href="about.html#formermembers">Korábbi munkatársak</a>
              </li>
              <li>
                <a href="about.html#students">Hallgatóink</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="copyright">
              <p>
                Copyright &copy;2021 All rights reserved | Template is made with <i className="icon-heart" aria-hidden="true" /> by{' '}
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                  Colorlib
                </a>{' '}
                | Photos taken by{' '}
                <a href="https://www.instagram.com/photosbyakos/" target="_blank" rel="noopener noreferrer">
                  Ákos Hajdu
                </a>
                ,{' '}
                <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
                  Pexels
                </a>
                ,{' '}
                <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">
                  Pixabay
                </a>
                ,{' '}
                <a href="https://spot.sch.bme.hu/" target="_blank" rel="noopener noreferrer">
                  SPOT
                </a>{' '}
                and{' '}
                <a href="https://home.cern/resources?type=59" target="_blank" rel="noopener noreferrer">
                  CERN
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Footer
