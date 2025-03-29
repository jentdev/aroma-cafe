import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { MobileBtn } from './MobileBtn';

const MobileMenu = () => {
    const { menuOpen, setMenuOpen } = useContext(AppContext);
    
  return (
    <div className="mobile-menu">
        <MobileBtn />
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="items"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.6, type: 'spring'}}
                >
                    <ul>
                        {navItems.map(({label, endpoint}) => (
                            <li key={label}>
                                <a href={endpoint} onClick={() => setMenuOpen(false)}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
};

export default MobileMenu;