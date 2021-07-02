import React from 'react'

const StudentsSection: React.FC = () => (
  <div id="students" className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <img src="/images/students.jpg" alt="..." className="img-fluid" />
        </div>
        <div className="col-lg-5 ml-auto align-self-center">
          <h2 className="section-title-underline mb-5">
            <span>Hallgatóink</span>
          </h2>
          <p>
            Rengeteg tehetséges hallgatóval dolgozunk együtt. Ők demonstrátorként bekapcsolódnak az általunk oktatott tárgyainkba, a
            kutatási projektjeinkben pedig saját módszerek és eszközök fejlesztésében vesznek részt.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default StudentsSection
