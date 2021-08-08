import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Hero from '~components/Hero'

const toolsData = [
  {
    title: 'A Gamma állapotgép-kompozíciós keretrendszer',
    desc: `A Gamma modellezőeszköz reaktív rendszerek komponensalapú tervezését, formális ellenőrzését, illetve implementációjának
    automatikus előállítását teszi lehetővé.`,
    url: 'https://github.com/ftsrg/Gamma'
  },
  {
    title: 'A Theta modellellenőrző keretrendszer',
    desc: `A Theta modellellenőrző keretrendszer absztrakció-finomítás alapú, korszerű algoritmusok kollekciója, amelyek kombinálhatóságuk
    révén mindig az adott problémához szabhatók.`,
    url: 'https://github.com/ftsrg/Theta'
  },
  {
    title: 'A VIATRA Solver gráfgenerátor keretrendszer',
    desc: `A VIATRA Solver egy keretrendszer, amely szakterület-specifikus nyelvek jólformált és változatos példánymodelljeinek automatikus
    és skálázódó generálására szolgál.`,
    url: 'https://github.com/viatra/VIATRA-Generator'
  }
]

const ToolsSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Hero id="tools" bgImageUrl="/images/bg_4.jpg" heroTitle="Eszközeink" isHeroTitleCentered>
      <Row>
        {toolsData.map((data) => (
          <Col lg={4} md={6} className="mb-5 mb-lg-0">
            <h3>{t(data.title)}</h3>
            <p>{t(data.desc)}</p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href={data.url}>
                Bővebben
              </a>
            </p>
          </Col>
        ))}
      </Row>
    </Hero>
  )
}

export default ToolsSection
