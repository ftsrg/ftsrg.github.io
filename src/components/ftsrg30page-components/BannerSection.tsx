import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDeviceSelectors } from 'react-device-detect'
import useIsClient from '~hooks/useIsClient'
import confetti from 'canvas-confetti'

const BannerSection: React.FC = () => {
  const { t, language } = useI18next()
  const { isClient, key } = useIsClient()
  const confettiCanvas = useRef() as React.MutableRefObject<HTMLCanvasElement>

  const isMobile = isClient ? (useDeviceSelectors(window.navigator.userAgent)[0].isMobile as boolean) : false

  function confettiFrame(myConfetti: confetti.CreateTypes) {
    window.requestAnimationFrame(() => {
      // launch a few confetti from the left edge
      myConfetti({
        particleCount: 40,
        angle: 30,
        spread: 55,
        decay: 0.94,
        origin: { x: 0, y: 0.7 }
      })
      // and launch a few from the right edge
      myConfetti({
        particleCount: 40,
        angle: 150,
        spread: 55,
        decay: 0.94,
        origin: { x: 1, y: 0.7 }
      })
    })
  }

  useEffect(() => {
    const myConfetti = confetti.create(confettiCanvas.current, {
      resize: true
    })
    const confettiIdx = setInterval(() => confettiFrame(myConfetti), 2500)
    return () => {
      clearInterval(confettiIdx)
    }
  })

  return (
    <div id="banner" key={key}>
      <div className="overlay" />
      {isClient && !isMobile && (
        <video
          playsInline
          autoPlay
          muted
          loop
          preload="none"
          style={{ display: 'none' }}
          onCanPlayThrough={(e) => {
            e.currentTarget.style.display = ''
          }}
        >
          <source src="/images/drone-banner.mp4" type="video/mp4" />
        </video>
      )}
      <canvas
        width={1000}
        height={600}
        ref={confettiCanvas}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: 2,
          transform: 'translateX(-50%) translateY(-50%)'
        }}
      />
      <div className="intro intro-section background-4">
        <StaticImage src="../../../static/images/drone-banner-poster.jpg" alt="..." layout="fullWidth" className="bannerImage" />
        <Container>
          <Row className="align-items-center">
            <Col lg="12" className="mx-auto text-center">
              <StaticImage
                src="../../../static/images/ftsrg-large-white.png"
                placeholder="none"
                width={400}
                alt={t('commons.ftsrgFullName')}
                className="intro-img mx-auto"
              />
              <h1>
                {language === 'hu' && (
                  <>
                    <span style={{ fontSize: '5rem' }}>30 éves</span>
                    <br />
                    <span>a Kritikus Rendszerek Kutatócsoport</span>
                  </>
                )}
                {language === 'en' && (
                  <>
                    <span style={{ fontSize: '5rem' }}>30 years</span>
                    <br />
                    <span>of the Critical Systems Research Group</span>
                  </>
                )}
              </h1>
              <hr className="mx-5" />
              <h2 className="font-italic">
                {language === 'hu' && <span>Ünnepelj és emlékezz velünk július 4-én</span>}
                {language === 'en' && (
                  <span>
                    Celebrate and reminisce with us on July 4<sup>th</sup>
                  </span>
                )}
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default BannerSection
