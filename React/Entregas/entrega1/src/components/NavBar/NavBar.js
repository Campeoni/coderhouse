import React from 'react';
import CardWidget from '../CardWidget/CardWidget.js';
import Brand from '../Brand/Brand.js';
import ListLinks from '../ListLinks/ListLinks.js';

import './nav-bar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Brand/>
      <ListLinks/>
      <CardWidget/>
    </div>
  );
};

export default NavBar;
