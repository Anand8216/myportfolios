import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Social from './social/Social';
import Video from './components/video/Video'
function App() {
  return (
    <>
    <Video/>
      <Home/>
      <Social/>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
      
     
     
    </>
  );
}

export default App;
