/*!
 * Copyright (C) 2020  Josh Habdas <jhabdas@protonmail.com>
 *
 * This file is part of gatsby-starter-i18n-react-i18next.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { graphql, PageProps } from 'gatsby'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

interface IndexPageProps extends PageProps {
  data: {
    siteBuildMetadata: {
      buildTime: string
    }
  }
}

export const pageQuery = graphql`
  query {
    siteBuildMetadata {
      buildTime(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
    }
  }
`

const IndexPage: FC<IndexPageProps> = ({ data, path }) => {
  const { buildTime } = data.siteBuildMetadata
  const { t } = useTranslation()
  return (
    <>
      <>
        <SEO />

        <div className="site-wrap">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>

          <div id="topheader" className="py-2 bg-light">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9 d-none d-lg-block">
                  <a href="https://www.bme.hu" className="small mr-3">
                    <img src="images/logos/bme.png" height="20" alt="Budapesti Műszaki és Gazdaságtudományi Egyetem" /> | bme.hu
                  </a>
                  <a href="https://www.vik.bme.hu" className="small mr-3">
                    <img src="images/logos/vik.png" height="20" alt="Villamosmérnöki és Informatikai Kar" /> | vik.bme.hu
                  </a>
                  <a href="https://www.mit.bme.hu" className="small mr-3">
                    <img src="images/logos/mit.png" height="20" alt="Méréstechnika és Információs Rendszerek Tanszék" /> | mit.bme.hu
                  </a>
                </div>
              </div>
            </div>
          </div>
          <header id="navbar" className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            <div className="container">
              <div className="d-flex align-items-center">
                <div className="site-logo">
                  <a href="index.html" className="d-block">
                    <img src="images/ftsrg.png" alt="..." className="img-fluid" style={{ height: '36px !important' }} />
                  </a>
                </div>
                <div className="mr-auto">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                      <li className="active has-children">
                        <a href="index.html" className="nav-link text-left">
                          Kezdőlap
                        </a>
                        <ul className="dropdown">
                          <li>
                            <a href="#competences">Szakmai kompetenciáink</a>
                          </li>
                          <li>
                            <a href="#education">Oktatás és tehetséggondozás</a>
                          </li>
                          <li>
                            <a href="#about">A kutatócsoportról</a>
                          </li>
                          <li>
                            <a href="#projects">Projektjeink</a>
                          </li>
                          <li>
                            <a href="#partners">Partnereink</a>
                          </li>
                          <li>
                            <a href="#news">Hírek</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="research.html" className="nav-link text-left">
                          Kutatás-fejlesztés
                        </a>
                      </li>
                      <li>
                        <a href="education.html" className="nav-link text-left">
                          Oktatás
                        </a>
                      </li>
                      <li>
                        <a href="about.html" className="nav-link text-left">
                          Rólunk
                        </a>
                      </li>
                      <li>
                        <a href="contact.html" className="nav-link text-left">
                          Kapcsolat
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="ml-auto">
                  <div className="social-wrap">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ftsrg">
                      <span className="icon-facebook" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ftsrg_bme">
                      <span className="icon-twitter" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ftsrg">
                      <span className="icon-github" />
                    </a>

                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black">
                      <span className="icon-menu h3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

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

          <div />

          <div id="competences" className="section-bg style-1">
            <div className="container">
              <div className="row mb-5 justify-content-center text-center">
                <div className="col-lg-7 mb-5">
                  <h2 className="section-title-underline style-2 mb-5">
                    <span>Szakmai kompetenciáink</span>
                  </h2>
                  <p className="text-center mb-0">
                    Fő területünk a kritikus informatikai rendszerek, folyamatok és platformok szolgáltatásbiztonságra tervezése, ideértve a
                    kiberfizikai és informatikai infrastruktúrákat, alkalmazásokat. Alapvető metodikánk a modellalapú tervezés, analízis és
                    helyességbizonyítás.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="feature-1 border">
                    <div className="icon-wrapper bg-primary">
                      <span className="flaticon-rocket text-white" />
                    </div>
                    <div className="feature-1-content">
                      <h2>Kritikus rendszerek fejlesztése</h2>
                      <p>
                        Módszertanok, fejlesztési környezetek, technikák és technológiák a modellalapú kritikus informatikai és kiberfizikai
                        rendszerek és alkalmazások tervezésére.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="feature-1 border">
                    <div className="icon-wrapper bg-primary">
                      <span className="flaticon-test text-white" />
                    </div>
                    <div className="feature-1-content">
                      <h2>Ellenőrzés és tesztelés</h2>
                      <p>
                        Formális módszerek és modellalapú tesztelés alkalmazása funkcionális, megbízhatósági, biztonsági és teljesítmény
                        követelmények ellenőrzése és tanúsítása során.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="feature-1 border">
                    <div className="icon-wrapper bg-primary">
                      <span className="flaticon-bars-chart text-white" />
                    </div>
                    <div className="feature-1-content">
                      <h2>Empirikus rendszertervezés</h2>
                      <p>
                        Teljesítmény és megbízhatósági követelmények kísérleti vizsgálata, mérése, analízise, méretezése származtatott
                        modellek alapján, hibamodellezés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

              <div className="row">
                <div className="col-12">
                  <div className="owl-slide-3 owl-carousel">
                    <div className="education-1-item">
                      <figure className="thumnail">
                        <img src="images/education.png" alt="..." className="img-fluid" />
                        <div className="category bg-secondary">
                          <h3>Oktatás</h3>
                        </div>
                      </figure>
                      <div className="education-1-content pb-4">
                        <h2>
                          Képzésünk lefedi a kritikus rendszerek tervezésének, analízisének és üzemeltetésének legfontosabb területeit
                        </h2>
                        <p className="desc mb-4">
                          Három szakiránnyal (Rendszertervezés és Szoftverfejlesztés BSc-n, Kritikus rendszerek MSc-n) és több mint 12
                          tárggyal várjuk az érdeklődő hallgatókat.
                        </p>
                        <p>
                          <a href="education.html" className="btn btn-primary rounded-0 px-4">
                            Bővebben
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="education-1-item">
                      <figure className="thumnail">
                        <img src="images/student-project.jpg" alt=".." className="img-fluid" />
                        <div className="category bg-secondary">
                          <h3>Tehetséggondozás</h3>
                        </div>
                      </figure>
                      <div className="education-1-content pb-4">
                        <h2>
                          Kiemelt figyelmet fordítunk a tehetséggondozásra, hallgatóink előkelő helyezéseket szereznek a kari és országos
                          TDK-n
                        </h2>
                        <p className="desc mb-4">
                          Hallgatóink számos innovatív projekten dolgoznak, amelyek nemritkán önálló tudományos eredményekhez és ipari
                          együttműködésekhez vezetnek.
                        </p>
                        <p>
                          <a href="education.html#talentcare" className="btn btn-primary rounded-0 px-4">
                            Bővebben
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="education-1-item">
                      <figure className="thumnail">
                        <img src="images/awards.jpg" alt="..." className="img-fluid" />
                        <div className="category bg-secondary">
                          <h3>Díjak, pályázatok</h3>
                        </div>
                      </figure>
                      <div className="education-1-content pb-4">
                        <h2>Hallgatóink minden évben kiválóan szerepelnek a tanulmányi és kutatói pályázatokon, ösztöndíjakon</h2>
                        <p className="desc mb-4">
                          Külföldi tanulmányutak, Rektori Különdíj, Új Nemzeti Kiválóság Program, Nemzeti Felsőoktatási Ösztöndíj, Kari és
                          Egyetemi BME Ösztöndíjak...
                        </p>
                        <p>
                          <a href="education.html#achievements" className="btn btn-primary rounded-0 px-4">
                            Bővebben
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="about" className="section-bg style-1" style={{ backgroundImage: `url('images/hero_3.png')` }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <h2 className="section-title-underline style-2">
                    <span>A kutatócsoportról</span>
                  </h2>
                </div>
                <div className="col-lg-8">
                  <p className="lead">
                    Fő területünk a kritikus informatikai rendszerek, folyamatok és platformok tervezése, ellenőrzése és üzemeltetésének
                    támogatása. A magas színvonalat nemcsak a tervezett rendszerekkel szemben várjuk el, hanem a kutatás és oktatás
                    területén is magunkénak valljuk.
                  </p>
                  <p>
                    A BME VIK Méréstechnika és Információs Rendszerek Tanszékén működő Hibatűrő Rendszerek Kutatócsoportot (ftsrg) 1994-ben
                    alapította Prof. Pataricza András a hibatűrő számítástechnika kutatására és oktatására. A csoport az azóta eltelt
                    években a rendszermodellezés, &#8209;tervezés és &#8209;ellenőrzés nemzetközileg jegyzett kutatócsoportjává vált,
                    harmincnál is több európai kutatási és ipari együttműködésben kamatoztatva tudását. 2019-től megújult arculattal,
                    Kritikus Rendszerek Kutatócsoport (Critical Systems Research Group) néven, de a jól bevált „ftsrg” rövidítéssel és
                    mentalitással folytatjuk az első 25 év hagyományait.
                  </p>
                  <p>
                    Bővebben a kutatócsoportról a{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.bme.hu/hirek/20191219/Megszallottan_torodunk_a_tehetseges_hallgatokkal"
                    >
                      BME
                    </a>{' '}
                    és az{' '}
                    <a target="_blank" rel="noopener noreferrer" href="http://www.impulzus.com/content/archivum/47/2.pdf">
                      Impulzus
                    </a>{' '}
                    interjújában olvasható.
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                      A BME részvételével 2019 januárjában elindult az „Addressing Verification and Validation Challenges in Future
                      Cyber-Physical Systems” (ADVANCE) nevű H2020 RISE kutatási projekt, ami a jövő kiberfizikai rendszereinek ellenőrzési
                      kihívásait fogja vizsgálni. A projekt futamideje 4 év és teljes költségvetése € 657 800.
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
                      A BME részvételével elindult az „Environment for model-based rigorous adaptive co-design and operation of CPS”
                      (EMBrACE) című ITEA 3 projekt. Az IncQuery Labs és további húsz partner együttműködésével készítünk komplex ipari
                      rendszerek tervezéséhez innovatív mérnöki nyelveket és eszközöket.
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
                      Az EIT Digital Professional School keretében kidolgozunk egy olyan tanfolyamsorozatot, ami bemutatja, hogy hogyan
                      lehet a blockchain technológiákat beépíteni egy cég üzletmenetébe és innovatív szolgáltatásaibe.
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
                      A BME TMIT és MIT részvételével 2019 májusában elindult az „Arrowhead Tools” H2020 ECSEL projekt, ami Európa
                      legnagyobb, ipari digitalizációs és automatizálási megoldásokat fejlesztő K+F+I projektje. A projektben több mint 80
                      partner vesz részt, köztük az AITIA, evopro Innovation és az IncQuery Labs.
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

          <div id="partners" className="section-bg style-1" style={{ backgroundImage: `url('images/hero_1.jpg')` }}>
            <div className="container">
              <div className="row mb-5 justify-content-center text-center">
                <div className="col-lg-7">
                  <h2 className="section-title-underline style-2">
                    <span>Partnereink</span>
                  </h2>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div id="partners-container" className="d-flex justify-content-center">
                    {/* <script>
      var logos = [
        "1-incquery-labs-logo.png",
        "2-quanopt-logo.png",
        "3-firenze-logo.png",
        "mcgill-logo.png",
        "4-coimbra-logo.png",
        "5-thyssen-logo.png",
        "6-ericsson-logo.png",
        "7-cern-logo.png",
        "8-prolan-logo.png",
        "9-resiltech-logo.png"
      ];
      var tags = logos.map(logo => "<div className=\x22partner\x22><img src=\x22images/partners/" +
      logo + "\x22 className=\x22white-logo\x22/></div>");
      document.getElementById("partners-container").innerHTML = tags.join("\n");
    </script> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="news" className="news-updates">
            <div className="container">
              <div className="row mb-3 justify-content-center text-center">
                <div className="col-lg-6 mb-3">
                  <h2 className="section-title-underline mb-3">
                    <span>Hírek és események</span>
                  </h2>
                </div>
              </div>

              <div className="row justify-content-center text-center mb-5">
                <div className="social-media-container col-lg-6">
                  <h2>ftsrg a Twitteren</h2>
                  <hr />
                  <a
                    className="twitter-timeline"
                    data-adapt-container-width="true"
                    data-height="500"
                    data-width="500"
                    href="https://twitter.com/ftsrg_bme?ref_src=twsrc%5Etfw"
                  >
                    Tweets by ftsrg_bme
                  </a>
                </div>
                <div className="social-media-container col-lg-6">
                  <h2>ftsrg a Facebookon</h2>
                  <hr />
                  <div
                    className="fb-page"
                    data-href="https://www.facebook.com/ftsrg/"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="600"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote cite="https://www.facebook.com/ftsrg/" className="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/ftsrg/">Hibatűrő Rendszerek Kutatócsoport</a>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center text-center" />
            </div>
          </div>
        </div>

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
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                    with <i className="icon-heart" aria-hidden="true" /> by{' '}
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

        <div>{t('pages.homepage.heading')}</div>
        <div>{t('lastUpdated', { buildTime })}</div>
      </>
    </>
  )
}

export default IndexPage
