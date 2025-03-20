import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Menu />
      <Location />
      <Footer />
    </div>
  )
};

export default App;