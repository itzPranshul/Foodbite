import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import About from './components/about';
import Feature from './components/features';
import Contact from './components/contact';
// import ImageToText from './components/ImageToText';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/ImageToText" element={<ImageToText/>}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
