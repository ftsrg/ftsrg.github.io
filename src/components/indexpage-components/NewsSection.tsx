import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const NewsSection: React.FC = () => (
  <div id="news" className="news-updates">
    <Helmet>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/hu_HU/sdk.js#xfbml=1&version=v7.0" nonce="SRkXDokT" />
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
    </Helmet>
    <Container>
      <h2 className="section-title-underline text-center mb-5">
        <span>Hírek és események</span>
      </h2>

      <Row className="justify-content-center text-center mb-5">
        <Col lg={6} className="social-media-container mb-5 mb-lg-0">
          <a
            className="twitter-timeline"
            data-adapt-container-width="true"
            data-height="500"
            data-width="400"
            href="https://twitter.com/ftsrg_bme?ref_src=twsrc%5Etfw"
          >
            Tweets by ftsrg_bme
          </a>
        </Col>
        <Col lg={6} className="social-media-container">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/ftsrg/"
            data-tabs="timeline"
            data-width="400"
            data-height="500"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://www.facebook.com/ftsrg/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/ftsrg/">Kritikus Rendszerek Kutatócsoport</a>
            </blockquote>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default NewsSection
