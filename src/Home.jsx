import Footer from './components/Footer.jsx'
import Thumbnail from './components/Thumbnail.jsx'
import { Parallax, Background } from 'react-parallax';
import img3 from './images/MSI2023.jpg';
import img7 from './images/Paris.jpg';
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
        <section className="highlights">
          <div className="container-cards">
            <div className="heading-cards">
              <h1>Un accompagnement</h1>
            </div>
            <div className="grid-wrapper">
                <div className="programs">
                    <Thumbnail title="image 1"  number="001" name={img3}/>
                </div>
                <div className="programs">
                    <Thumbnail title="image 1"  number="001" name={img7}/>
                </div>
                <div className="programs">
                    <Thumbnail title="image 1"  number="001" name={img3}/>
                </div>
                <div className="programs">
                    <Thumbnail title="image 1"  number="001" name={img7}/>
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