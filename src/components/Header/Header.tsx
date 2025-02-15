import { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <Button
        color="default"
        variant="text"
        type="primary"
        onClick={showDrawer}
        icon={<MenuOutlined style={{ fontSize: '1.10rem' }} />}
      ></Button>
      <Link to="#" className="title">
        Markus Einan
      </Link>

      <Drawer placement="left" onClose={closeDrawer} open={open} width={220}>
        <p>About me</p>
        <p>Skills</p>
        <p>Projects</p>
      </Drawer>
    </div>
  );
}

export default Header;
