import { createContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const location = useLocation();

    const [ menuOpen, setMenuOpen ] = useState(false);
    
    const value = {
        menuOpen, setMenuOpen,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;