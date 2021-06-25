import React from 'react'

const NewsSection: React.FC = () => (
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
)

export default NewsSection
