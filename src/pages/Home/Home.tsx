import './Home.css';
import Header from '../../components/Header';
import profilbildeUrl from '../../assets/images/Profilbilde.jpg';
import { Divider, Table } from 'antd';

function Home() {
  const dataSource = [
    {
      key: '1',
      name: 'Markus Einan',
      age: 28,
      from: 'Sørumsand'
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from'
    }
  ];

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
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </div>
      </section>
      <section className="section two">Placeholder</section>
      <section className="section three">Placeholder</section>
    </div>
  );
}

export default Home;
