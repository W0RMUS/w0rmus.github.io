import './Home.css';
import Header from '../../components/Header/Header';
import InformationTable from '../../components/InformationTable';
import Skills from '../Skills/Skills';
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
          <InformationTable />
        </div>
      </section>
      <section className="section two">
        <Skills />
      </section>
      <section className="section three">Placeholder</section>
    </div>
  );
}

export default Home;
