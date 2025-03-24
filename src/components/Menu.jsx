import React from 'react';
import { assets } from '../assets/assets';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-items">
        <div className="menu-item">
          <div className="menu-photo-1">
            <img src={assets.coffee} alt="" />
          </div>
          <div className="content">
          <h3>espresso</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nihil</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-photo-2">
            <img src={assets.tea} alt="" />
          </div>
          <div className="content">
          <h3>teas</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nihil.</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-photo-3">
            <img src={assets.pastry} alt="" />
          </div>
          <div className="content">
          <h3>pastries</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nihil.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Menu;