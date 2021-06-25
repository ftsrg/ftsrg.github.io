import React from 'react'

const PartnersSection: React.FC = () => {
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
  return (
    <div id="partners" className="section-bg style-1" style={{ backgroundImage: `url('/images/hero_1.jpg')` }}>
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
              {logos.map((logo) => (
                <div className="partner">
                  <img src={`/images/partners/${logo}`} className="white-logo" alt="..." />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
