import './Home.css';
import Header from '../../components/Header';
import profilbildeUrl from '../../assets/images/Profilbilde.jpg';
import { Divider } from 'antd';

function Home() {
  return (
    <div className="container">
      <Header />
      <section className="section home">
        <div className="home-container">
          <div className="imageContainer">
            <img src={profilbildeUrl} alt="Profilbilde" />
          </div>
          <h1 className="content">Web Developer</h1>
          <Divider />
        </div>
      </section>
      <section className="section two">Section 2</section>
      <section className="section three">Section 3</section>
    </div>
  );
}

export default Home;
