import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import ViewMenu from './pages/ViewMenu';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu/:category' element={<ViewMenu />} />

      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  )
};

export default App;