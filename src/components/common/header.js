import { NavLink } from "react-router-dom";
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

import {
  MobileOutlined,
  MailOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  UserOutlined,
  MenuOutlined
} from '@ant-design/icons';

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='container'>
      
      <div className='topBar'>
        <div className='contactInfo'>
          <ul>
            <li><a href="tel:07450223366"><MobileOutlined /> <span>07450223366</span></a></li>
            <li><a href="mailto:contact@grocery.co.uk"><MailOutlined /> <span>contact@grocery.co.uk</span></a></li>
          </ul>
        </div>
        <div className='otherInfo'>
          <ul className='socialMedia'>
            <li><a href='https://www.google.com'><FacebookFilled /></a></li>
            <li><a href='https://www.google.com'><TwitterSquareFilled /></a></li>
            <li><a href='https://www.google.com'><InstagramFilled /></a></li>
          </ul>
          <button><UserOutlined /> My Account</button>
        </div>
      </div>
      {/* header */}
      <div className='header separator'>
        <div className="logo">
          Grocery
        </div>  
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <nav>
              <ul>
                {/* <li><NavLink onClick={onClose} to="/">Home</NavLink></li>
                <li><NavLink onClick={onClose} to="/about">About</NavLink></li>
                <li><NavLink onClick={onClose} to="/shop">Shop</NavLink></li>
                <li><NavLink onClick={onClose} to="/faq">FAQ</NavLink></li>
                <li><NavLink onClick={onClose} to="/contact">Contact</NavLink></li> */}
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/">Home</NavLink></li>
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/about">About</NavLink></li>
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/shop">Shop</NavLink></li>
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/faq">FAQ</NavLink></li>
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </Drawer>
        </div>
        <nav className="mobileHidden">
          <ul>
            {/* <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li> */}
            <li><NavLink to="/demo/react/antdesign/grocery/">Home</NavLink></li>
            <li><NavLink to="/demo/react/antdesign/grocery/about">About</NavLink></li>
            <li><NavLink to="/demo/react/antdesign/grocery/shop">Shop</NavLink></li>
            <li><NavLink to="/demo/react/antdesign/grocery/faq">FAQ</NavLink></li>
            <li><NavLink to="/demo/react/antdesign/grocery/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;