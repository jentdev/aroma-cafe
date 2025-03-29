import { div, p } from 'framer-motion/client';
import React from 'react';

const DisplayMenu = ({subcat, items}) => {
  return (
    <div className="display-menu">
        <h1>{subcat}</h1>
        {items.map(({name, price}) => (
            <div key={name} className="food-item-container">
                <h2>{name}</h2>
                {price.map(({type, price}, index) => (
                    <div key={index} className="food-item">
                        <div className="type">{type}</div>
                        <div>{`$${price.toFixed(2)}`}</div>
                    </div>
                ))}
            </div>
        ))}
        
    </div>
  )
}

export default DisplayMenu;