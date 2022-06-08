import { ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'
import Hero from '~components/Hero'

type Props = {
  heroBackgroundImage: ImageDataLike
}

const logos = [
  '1-incquery-labs-logo.png',
  '2-quanopt-logo.png',
  '3-firenze-logo.png',
  'mcgill-logo.png',
  '4-coimbra-logo.png',
  '5-thyssen-logo.png',
  '6-ericsson-logo.png',
  '7-cern-logo.png',
  '8-prolan-logo.png',
  '9-resiltech-logo.png'
]

const PartnersSection: React.FC<Props> = ({ heroBackgroundImage }) => (
  <Hero id="partners" bgImage={heroBackgroundImage} heroTitle="home.partners.title" isHeroTitleCentered>
    <div id="partners-container" className="d-flex justify-content-center">
      {logos.map((logo) => (
        <div key={logo.toUpperCase()} className="partner">
          <img src={`/images/partners/${logo}`} className="white-logo" alt="..." />
        </div>
      ))}
    </div>
  </Hero>
)

export default PartnersSection
