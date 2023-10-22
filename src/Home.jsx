import Footer from './components/Footer.jsx'
import Card from './components/Card/Card.jsx'
import { Parallax, Background } from 'react-parallax';
import improve from './images/improve.jpg';
import festin from './images/festin.jpg';
import './styles/App.scss';

function Home() {
  return (
    <section>
      <Parallax strength={600}>
        <Background className='custom-bg'>
          <div className='black_filter'/>
        </Background>
        <div className="intro">
          <h1>MS Coaching Pro</h1>
        </div>
      </Parallax>
      <Parallax strength={600}>
        <section className="cards-section">
          <div className="container-cards">
            <div className="heading-cards">
              <h1>Un accompagnement</h1>
            </div>
            <div className="grid-wrapper">
                <div className="programs">
                    <Card title="image 1"  number="001" name={improve}/>
                </div>
                <div className="programs">
                    <Card title="image 1"  number="001" name={festin}/>
                </div>
                <div className="programs">
                    <Card title="image 1"  number="001" name={improve}/>
                </div>
                <div className="programs">
                    <Card title="image 1"  number="001" name={festin}/>
                </div>
            </div>
          </div>
        </section>
      </Parallax>
      <Footer/>
    </section>
  );
}

export default Home;