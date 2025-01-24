import { useState } from 'react';
import { Drawer, Button } from 'antd';
import './Home.css';

function Home() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="header">
        <Button type="primary" onClick={showDrawer}>
          <p className="menu">Menu</p>
        </Button>
        <Drawer
          title="Options"
          placement="left"
          onClose={closeDrawer}
          open={open}
          width={200}
        >
          <p>Option one</p>
          <p>Option two</p>
          <p>Option three</p>
        </Drawer>
      </div>
      <div className="home-container">
        <h1 className="content">Markus</h1>
      </div>
    </div>
  );
}

export default Home;
