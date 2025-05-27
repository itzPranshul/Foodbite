import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import About from './components/about';
import Feature from './components/features';
import Contact from './components/contact';
import FAQs from './components/FAQs';
import ScanIngredientForm from './components/ScanIngredientForm';
// import ImageToText from './components/ImageToText';
// import ChatGPTFrontend from './components/ChatGPTFrontend';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/ImageToText" element={<ImageToText/>}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/scan" element={<ScanIngredientForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
