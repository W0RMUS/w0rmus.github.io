import { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
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
        <Button
          color="default"
          variant="filled"
          type="primary"
          onClick={showDrawer}
          icon={<MenuOutlined />}
        ></Button>
        <p className="title">Markus Einan</p>

        <Drawer placement="left" onClose={closeDrawer} open={open} width={220}>
          <p>About me</p>
          <p>Skills</p>
          <p>Projects</p>
        </Drawer>
      </div>
      <div className="home-container">
        <h1 className="content">Web Developer</h1>
      </div>
    </div>
  );
}

export default Home;
