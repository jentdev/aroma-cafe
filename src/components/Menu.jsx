import React, { useContext, useRef, useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router';

const Menu = () => {

  const navigate = useNavigate();

  return (
    <div className="menu" id="menu">
      <div className="menu-items">
        <div className="menu-item">
          <div className="menu-photo">
            <img src={assets.coffee} alt="" />
          </div>
          <div className="content">
          <h3>espresso</h3>
          <p>Strong, concentrated shots of coffee with rich, smooth flavors.</p>
          <div className="view-menu-btn" onClick={() => navigate('/menu/coffee')}>view&nbsp;menu</div>          
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-photo">
            <img src={assets.tea} alt="" />
          </div>
          <div className="content">
            <h3>teas</h3>
            <p>A selection of aromatic brewed teas, offering soothing flavors.</p>
            <div className="view-menu-btn" onClick={() => navigate('/menu/teas')}>view&nbsp;menu</div> 
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-photo">
            <img src={assets.pastry} alt="" />
          </div>
          <div className="content">
          <h3>pastries</h3>
          <p>A delicious variety of freshly-baked sweet and savory pastries.</p>
          <div className="view-menu-btn" onClick={() => navigate('/menu/pastries')}>view&nbsp;menu</div> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default Menu;