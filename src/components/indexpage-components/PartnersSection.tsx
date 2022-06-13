import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'
import Hero from '~components/Hero'
import PartnerProps from '~utils/props/partner.props'

type Props = {
  nodes: Array<PartnerProps>
  heroBackgroundImage: ImageDataLike
}

const PartnersSection: React.FC<Props> = ({ nodes, heroBackgroundImage }) => (
  <Hero id="partners" bgImage={heroBackgroundImage} heroTitle="home.partners.title" isHeroTitleCentered>
    <div id="partners-container" className="d-flex justify-content-center">
      {nodes.map((partner) => (
        <div key={partner.name} className="partner">
          <GatsbyImage
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            image={getImage(partner.logo)!}
            className="white-logo"
            alt={partner.name}
            imgStyle={{ objectFit: 'contain', padding: 20 }}
          />
        </div>
      ))}
    </div>
  </Hero>
)

export default PartnersSection
