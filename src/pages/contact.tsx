import { Link, PageProps } from 'gatsby'
import React from 'react'
import SEO from '../components/SEO'
import Layout from '../layout/Layout'

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO />
      <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: `url('/images/bg_3.jpg')` }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h2 className="mb-0">Kapcsolat</h2>
              <p>Elérhetőség, térkép és fényképek</p>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-breadcrumbs border-bottom">
        <div className="container">
          <Link to="/">Kezdőlap</Link>
          <span className="mx-3 icon-keyboard_arrow_right" />
          <span className="current">Kapcsolat</span>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
              <img src="/images/bme-i-building.jpg" alt="..." className="img-fluid" />
            </div>
            <div className="col-lg-5 mr-auto align-self-center order-2 order-lg-1">
              <h2 className="section-title-underline mb-5">
                <span>Megközelítés</span>
              </h2>
              <p>
                BME I épület, B szárny 4. emelet
                <br />
                Magyar tudósok körútja 2.
                <br />
                1117 Budapest, Magyarország
              </p>
              <p>
                GPS-koordináták:{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/BME+Building+I/@47.4724731,19.0594159,18z/data=!4m5!3m4!1s0x4741ddabb29bd997:0x4b453205e2d0f96b!8m2!3d47.4726765!4d19.060026"
                >
                  N47.4724731, E19.0594159
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <img src="/images/ftsrg-rooms.jpg" alt="..." className="img-fluid" />
            </div>
            <div className="col-lg-5 ml-auto align-self-center">
              <h2 className="section-title-underline mb-5">
                <span>Az épületen belül</span>
              </h2>
              <p>Az épületbe belépve bal kéz felé a portával szemközti liftekkel fel a 4. emeletre.</p>
              <p>A liftből kilépve jobbra, majd balra belépve az üvegajtón található a kutatócsoport.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
              <img src="/images/ftsrg-4th-floor.jpg" alt="Hallgatói folyosó" className="img-fluid" />
            </div>
            <div className="col-lg-5 mr-auto align-self-center order-2 order-lg-1">
              <h2 className="section-title-underline mb-5">
                <span>Hallgatói folyosó</span>
              </h2>
              <p>Hallgatóinkat várjuk a 4. emeleti folyosón, a kutatócsoport szobáinál kihelyezett asztalokhoz.</p>
              <p>Itt tanulhatnak, dolgozhatnak az önálló munkájukon vagy pedig konzultálhatnak velünk.</p>
              <p>
                A bútorokért köszönet a{' '}
                <a href="https://www.mit.bme.hu/general/alapitvany" target="_blank" rel="noopener noreferrer">
                  Schnell Alapítványnak
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
