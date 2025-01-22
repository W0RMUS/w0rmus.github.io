import React from 'react';
import { Button } from 'antd';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="header">
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
      </div>
      <div className="home-container">
        <h1 className="h1">Markus</h1>
      </div>
    </div>
  );
}

export default Home;
