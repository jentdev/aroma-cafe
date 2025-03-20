import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <nav>
      <div className="social-links">
        <img src={assets.instagram} alt="Instagram" />
        <img src={assets.facebook} alt="Facebook" />
        <img src={assets.tiktok} alt="TikTok" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#location">Location</a>
      </div>
    </nav>
  )
};

export default Navbar;