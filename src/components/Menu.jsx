import React from 'react';
import { assets } from '../assets/assets';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-items">
        <div className="menu-item">
          <div className="menu-photo-1">
            <img src={assets.coffee} alt="" />
          </div>
          <p>espresso</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nihil.</p>
        </div>
        <div className="menu-item">
          <div className="menu-photo-2">
            <img src={assets.tea} alt="" />
          </div>
          <p>teas</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nihil.</p>
        </div>
        <div className="menu-item">
          <div className="menu-photo-3">
            <img src={assets.pastry} alt="" />
          </div>
          <p>pastries</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nihil.</p>
        </div>
      </div>
    </div>
  )
};

export default Menu;