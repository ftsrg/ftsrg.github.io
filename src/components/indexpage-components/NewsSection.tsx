import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NewsSection: React.FC = () => (
  <div id="news" className="news-updates">
    <Container>
      <h2 className="section-title-underline text-center mb-5">
        <span>Hírek és események</span>
      </h2>

      <Row className="justify-content-center text-center mb-5">
        <Col lg={6} className="social-media-container">
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
        </Col>
        <Col lg={6} className="social-media-container">
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
        </Col>
      </Row>
    </Container>
  </div>
)

export default NewsSection
