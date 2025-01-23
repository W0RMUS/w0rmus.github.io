import React from 'react';
import { Drawer } from 'antd';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="header">
        <Drawer title="Drawer Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
      <div className="home-container">
        <h1 className="h1">Markus</h1>
      </div>
    </div>
  );
}

export default Home;
