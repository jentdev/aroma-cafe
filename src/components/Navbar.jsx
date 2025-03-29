import React from 'react';
import { assets, navItems } from '../assets/assets';
import MobileMenu from './MobileMenu';



const Navbar = () => {
//   const [ scrolledPast, setScrolledPast] = useState(false);


//   useEffect(() => {});

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//         if (scrollY > 50) {
//             setScrolledPast(true);
//         }
//         else {
//             setScrolledPast(false);
//         }
//     });
// }, []);

  return (
    <nav>

      <div className="social-links">
        <img src={assets.instagram} alt="Instagram" />
        <img src={assets.facebook} alt="Facebook" />
        <img src={assets.tiktok} alt="TikTok" />
      </div>

      <ul>
        {navItems.map(({label, endpoint}) => (
            <li key={label}>
                <a href={endpoint}>{label}</a>
            </li>
        ))}
        </ul>

      <MobileMenu />
    </nav>
  )
};

export default Navbar;