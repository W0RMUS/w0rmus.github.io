import './Home.css';
import Header from '../../components/Header';
import profilbildeUrl from '../../assets/images/Profilbilde.jpg';
import { Divider } from 'antd';
function Home() {
  return (
    <div>
      <Header />
      <div className="home-container">
        <img src={profilbildeUrl} alt="Profilbilde" />
        <h1 className="content">Web Developer</h1>
        <Divider />
      </div>
    </div>
  );
}

export default Home;
