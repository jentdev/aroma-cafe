import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    // <header style={{backgroundImage: `url(${assets.bg})`}}>

    <header>
      <div className="logo-outer-border">
        <div className="logo">
          <img src={assets.logo} alt="Logo" />
          <span>aroma</span><span>cafe</span>
        </div>
      </div>
      <div className="bg-img" style={{backgroundImage: `url(${assets.bg})`}}>some div</div>
    </header>
  )
};

export default Header;