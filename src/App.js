import React from 'react';
import ImageToText from './components/ImageToText';
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div>
      <h1>Image to Text Converter</h1>
      <ImageToText />
      <LandingPage/>
    </div>
  );
};

export default App;
