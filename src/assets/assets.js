// import icons
import logo from './logo.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import tiktok from './tiktok.svg';
import pin from './pin.svg';

// import images
import bg from './bg.jpg';
import pastry from './pastry.jpg';
import coffee from './coffee.jpg';
import tea from './tea.jpg';

// export icons
export const assets = {
    logo,    
    pin,
    bg,
    pastry,
    coffee,
    tea,
};

// nav links
export const navItems = [
    {
        label: 'home',
        endpoint: '/#top',
    },
    {
        label: 'about',
        endpoint: '/#about',
    },
    {
        label: 'menu',
        endpoint: '/#menu',
    },
    {
        label: 'location',
        endpoint: '/#location',
    },
];

// social links
export const socialLinks = [
    {
        label: 'Facebook',
        img: facebook,
        url: 'https://www.facebook.com/'
    },
    {
        label: 'Instagram',
        img: instagram,
        url: 'https://www.instagram.com/'
    },
    {
        label: 'TikTok',
        img: tiktok,
        url: 'https://www.tiktok.com/'
    }
];