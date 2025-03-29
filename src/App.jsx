import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import ViewMenu from './pages/ViewMenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu/:id' element={<ViewMenu />} />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;