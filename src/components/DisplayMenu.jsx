import { div, p } from 'framer-motion/client';
import React from 'react';

const DisplayMenu = ({subcat, items}) => {
  return (
    <div className="display-menu">
        <h1>{subcat}</h1>
        {items.map(({name, price}) => (
            <div key={name} className="food-item-container">
                <p>{name}</p>
                {price.map(({type, price}, index) => (
                    <div key={index} className="food-item">
                        <p>{type}</p>
                        <p>{price}</p>
                    </div>
                ))}
            </div>
        ))}
        
    </div>
  )
}

export default DisplayMenu;