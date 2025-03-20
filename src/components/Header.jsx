import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <header style={{backgroundImage: `url(${assets.bg})`}}>
      <div className="logo-outer-border">
      <div className="logo-container">
        <img src={assets.logo} alt="Logo" />
        <span>aroma</span><span>cafe</span>
      </div>
      </div>
    </header>
  )
};

export default Header;