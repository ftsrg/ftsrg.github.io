import React from 'react'
import Slider from 'react-slick'

const achievementsData = [
  {
    category: 'Tudományos cikkek',
    thumbnail: '/images/students/emsoft-new-york.jpg',
    descHtmlRaw: `Hallgatóinkkal elért közös eredményeink rangos tudományos publikációkban jelennek meg. Az elmúlt években például az
    <a href="https://dl.acm.org/doi/10.1145/3358238" target="_blank" rel="noopener noreferrer">EMSOFT</a> konferencián (New York) vagy az
    <a href="https://inf.mit.bme.hu/research/publications/distributed-graph-queries-over-modelsruntime-runtime-monitoring-cyber-physical">STTT</a>
    és <a href="https://doi.org/10.1002/stvr.1627">STVR</a> vezető folyóiratokban jelent meg hallgatókkal közösen írt cikkünk.`
  },
  {
    category: 'Jellemző munkahelyek',
    thumbnail: '/images/students/workplaces.png',
    descHtmlRaw: `Hallgatóinknak nem esik nehezükre elhelyezkedni a végzés után: start-up cégeknél, multinacionális cégek hazai vagy akár
    nemzetközi fejlesztőközpontjaiban mind-mind megtalálhatók volt hallgatóink, nem ritkán senior pozícióban.`
  },
  {
    category: 'Pályázatok és ösztöndíjak',
    thumbnail: '/images/students/tdk-awards.png',
    descHtmlRaw: `A <a href="https://www.mit.bme.hu/events/2020/11/12/magas-tanszeki-reszvetel-es-kiemelkedo-eredmenyek-az-idei-tdk-konferencian" target="_blank" rel="noopener noreferrer">TDK</a>
    és <a href="https://www.mit.bme.hu/events/2019/04/24/kiemelkedo-sikerek-az-otdk-n" target="_blank" rel="noopener noreferrer">OTDK</a>
    versenyeken, <a href="https://www.mit.bme.hu/events/2018/09/05/unkp-osztondij-sikerek" target="_blank" rel="noopener noreferrer">ÚNKP</a>,
    <a href="https://inf.mit.bme.hu/news/2017/12/kutat%C3%B3csoportunk-nyolc-hallgat%C3%B3ja-nemzeti-fels%C5%91oktat%C3%A1si-%C3%B6szt%C3%B6nd%C3%ADjban-r%C3%A9szes%C3%BClt" target="_blank" rel="noopener noreferrer">NFÖD</a>
    és KBME pályázatokon hallgatóink minden évben kiemelkedően teljesítenek. Tanulmányaik alatt sokan külföldi ösztöndíjprogramokon és
    tanulmányutakon vesznek részt (pl. Svájc, Németország, Írország).`
  }
]

const StudentAchievementsCarousel: React.FC = () => (
  <Slider
    infinite={false}
    slidesToShow={3}
    slidesToScroll={1}
    className="py-3"
    responsive={[
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1
        }
      }
    ]}
  >
    {achievementsData.map((data) => (
      <div key={data.category} className="p-3">
        <div className="education-1-item">
          <figure className="thumbnail">
            <img src={data.thumbnail} alt={data.category} className="img-fluid" />
            <div className="category bg-secondary">
              <h3>{data.category}</h3>
            </div>
          </figure>
          <div className="education-1-content pb-4">
            {/* eslint-disable-next-line react/no-danger */}
            <p className="desc mb-4" dangerouslySetInnerHTML={{ __html: data.descHtmlRaw }} />
          </div>
        </div>
      </div>
    ))}
  </Slider>
)

export default StudentAchievementsCarousel
