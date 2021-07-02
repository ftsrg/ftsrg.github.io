import React from 'react'

const IntroSection: React.FC = () => (
  <div id="about" className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
          <img src="/images/members.jpg" alt="..." className="img-fluid" />
        </div>
        <div className="col-lg-5 mr-auto align-self-center order-2 order-lg-1">
          <h2 className="section-title-underline mb-5">
            <span>A kutatócsoportról</span>
          </h2>
          <p>
            A kutatócsoportnak jelenleg 20 tagja van, akik közül 14-en rendelkeznek PhD fokozattal. A csoport ezen kívül minden évben 30
            tehetséges hallgatóval dolgozik együtt, akik bekapcsolódnak a csoport mindennapi életébe.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default IntroSection
