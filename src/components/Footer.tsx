import { Link } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'
import FooterNav from './navbar/FooterNav'

interface FooterProps {
  hasContact?: boolean
}

const Footer: React.FC<FooterProps> = ({ hasContact }) => {
  const { t } = useTranslation()

  return (
    <>
      {hasContact && (
        <div className="site-section ftco-subscribe-1" style={{ backgroundImage: `url('/images/bg_2.png')` }}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-9 d-flex align-items-center">
                <a href="http://mit.bme.hu/~micskeiz" target="_blank" rel="noopener noreferrer">
                  <img src="/images/members/micskei-small.png" alt="Micskei Zoltán" width="100px" className="mr-4" />
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
      <div className="footer text-white bg-secondary">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-lg-4 text-center px-5">
              <img src="/images/ftsrg-small-white.png" alt="..." width="120px" className="mb-4" />
              <p>H-1117 Budapest, Magyar tudósok körútja&nbsp;2., I ép. B szárny, IV. em.</p>
              <p>
                <Link to="/contact">{t('nav.contact.title')}</Link>
              </p>
            </div>
            {/* Column left here intentionally as spacer */}
            <div className="col-lg-2" />
            <FooterNav />
          </div>

          <div className="pt-5 text-center">
            <p>
              Copyright &copy; 2021 All rights reserved | Template by{' '}
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
    </>
  )
}

export default Footer
