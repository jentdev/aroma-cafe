import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    // <header style={{backgroundImage: `url(${assets.bg})`}}>

    <header id="">      
        <div className="logo">
          <img src={assets.logo} alt="Logo" />
        </div>      
      <div className="bg-img" style={{backgroundImage: `url(${assets.bg})`}}></div>
    </header>
  )
};

export default Header;