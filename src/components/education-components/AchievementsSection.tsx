import React from 'react'

const AchievementsSection: React.FC = () => (
  <div id="achievements" className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <h2 className="section-title-underline">
            <span>Hallgatóink eredményei</span>
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="owl-slide-3 owl-carousel">
            <div className="education-1-item">
              <figure className="thumbnail">
                <img src="/images/students/emsoft-new-york.jpg" alt="EMSOFT konferencia New Yorkban" className="img-fluid" />
                <div className="category bg-secondary">
                  <h3>Tudományos cikkek</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                <p className="desc mb-4">
                  Hallgatóinkkal elért közös eredményeink rangos tudományos publikációkban jelennek meg. Az elmúlt években az{' '}
                  <a href="https://dl.acm.org/doi/10.1145/3358238" target="_blank" rel="noopener noreferrer">
                    EMSOFT
                  </a>{' '}
                  konferencián (New York), az{' '}
                  <a href="https://inf.mit.bme.hu/research/publications/distributed-graph-queries-over-modelsruntime-runtime-monitoring-cyber-physical">
                    STTT
                  </a>{' '}
                  és <a href="https://doi.org/10.1002/stvr.1627">STVR</a> vezető folyóiratokban jelent meg hallgatókkal közösen írt cikkünk.
                </p>
              </div>
            </div>

            <div className="education-1-item">
              <figure className="thumbnail">
                <img src="/images/students/workplaces.png" alt="Hallgatóink jellemző munkahelyei" className="img-fluid" />
                <div className="category bg-secondary">
                  <h3>Jellemző munkahelyek</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                <p className="desc mb-4">
                  Hallgatóinknak nem esik nehezükre elhelyezkedni a végzés után: start-up cégeknél, multinacionális cégek hazai vagy akár
                  nemzetközi fejlesztőközpontjaiban mind-mind megtalálhatók volt hallgatóink, nem ritkán senior pozícióban.
                </p>
              </div>
            </div>

            <div className="education-1-item">
              <figure className="thumbnail">
                <img src="/images/students/tdk-awards.png" alt="TDK-díjak" className="img-fluid" />
                <div className="category bg-secondary">
                  <h3>Pályázatok és ösztöndíjak</h3>
                </div>
              </figure>
              <div className="education-1-content pb-4">
                <p className="desc mb-4">
                  A{' '}
                  <a
                    href="https://www.mit.bme.hu/events/2020/11/12/magas-tanszeki-reszvetel-es-kiemelkedo-eredmenyek-az-idei-tdk-konferencian"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TDK
                  </a>{' '}
                  és{' '}
                  <a href="https://www.mit.bme.hu/events/2019/04/24/kiemelkedo-sikerek-az-otdk-n" target="_blank" rel="noopener noreferrer">
                    OTDK
                  </a>{' '}
                  versenyeken,{' '}
                  <a href="https://www.mit.bme.hu/events/2018/09/05/unkp-osztondij-sikerek" target="_blank" rel="noopener noreferrer">
                    ÚNKP
                  </a>
                  ,{' '}
                  <a
                    href="https://inf.mit.bme.hu/news/2017/12/kutat%C3%B3csoportunk-nyolc-hallgat%C3%B3ja-nemzeti-fels%C5%91oktat%C3%A1si-%C3%B6szt%C3%B6nd%C3%ADjban-r%C3%A9szes%C3%BClt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NFÖD
                  </a>{' '}
                  és KBME pályázatokon hallgatóink minden évben kiemelkedően teljesítenek. Tanulmányaik alatt sokan külföldi
                  ösztöndíjprogramokon és tanulmányutakon vesznek részt (pl. Svájc, Németország, Írország).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AchievementsSection
