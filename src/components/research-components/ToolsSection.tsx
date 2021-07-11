import React from 'react'

const ToolsSection: React.FC = () => (
  <div id="tools" className="section-bg style-1" style={{ backgroundImage: `url('/images/bg_4.jpg')` }}>
    <div className="container">
      <div className="row mb-5 justify-content-center text-center">
        <div className="col-lg-7">
          <h2 className="section-title-underline style-2">
            <span>Eszközeink</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <span className="icon flaticon-mortarboard" />
          <h3>A Gamma állapotgép-kompozíciós keretrendszer</h3>
          <p>
            A Gamma modellezőeszköz reaktív rendszerek komponensalapú tervezését, formális ellenőrzését, illetve implementációjának
            automatikus előállítását teszi lehetővé.
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ftsrg/Gamma">
              Bővebben
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <span className="icon flaticon-school-material" />
          <h3>A Theta modellellenőrző keretrendszer</h3>
          <p>
            A Theta modellellenőrző keretrendszer absztrakció-finomítás alapú, korszerű algoritmusok kollekciója, amelyek kombinálhatóságuk
            révén mindig az adott problémához szabhatók.
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ftsrg/Theta">
              Bővebben
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <span className="icon flaticon-library" />
          <h3>A VIATRA Solver gráfgenerátor keretrendszer</h3>
          <p>
            A VIATRA Solver egy keretrendszer, amely szakterület-specifikus nyelvek jólformált és változatos példánymodelljeinek automatikus
            és skálázódó generálására szolgál.
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/viatra/VIATRA-Generator">
              Bővebben
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default ToolsSection
