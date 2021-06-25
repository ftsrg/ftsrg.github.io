import React from 'react'

const BannerSection: React.FC = () => (
  <div id="banner" className="site-blocks-cover">
    <div className="overlay" />
    <video playsInline autoPlay muted loop>
      <source src="images/drone-banner.mp4" type="video/mp4" />
    </video>

    <div className="hero-slide owl-carousel">
      <div className="intro intro-section background-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
              <img
                src="images/ftsrg-large-white.png"
                className="img-responsive"
                style={{ width: '400px !important', margin: '0 auto' }}
                alt="..."
              />
              <h1>Kritikus Rendszerek Kutatócsoport</h1>
              <hr className="ml-5 mr-5" />
              <h2>
                <i>„Átültetjük az elméletet&nbsp;a&nbsp;gyakorlatba”</i>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="intro intro-section-alt background-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
              <img
                src="images/ftsrg-large.png"
                className="img-responsive"
                style={{ width: '400px !important', margin: '0 auto' }}
                alt="..."
              />
              <h1>Critical&nbsp;Systems Research&nbsp;Group</h1>
              <hr className="ml-5 mr-5" />
              <h2>
                <i>“Forging&nbsp;technology from&nbsp;science”</i>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BannerSection
