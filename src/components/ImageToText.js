import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const ImageToText = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [serverResponse, setServerResponse] = useState(null); // New state for server response

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      recognizeText(file);
    }
  };

  const recognizeText = (file) => {
    setIsLoading(true);
    setError('');

    Tesseract.recognize(
      file,
      'eng',
      {
        logger: (info) => console.log(info),
      }
    )
    .then(({ data: { text } }) => {
      setText(text);
      setIsLoading(false);
      const formattedData = parseNutritionalInfo(text, image); // Parse the text to the desired format
      sendToServer(formattedData);
    })
    .catch((err) => {
      console.error(err);
      setError('Error recognizing text.');
      setIsLoading(false);
    });
  };

  // Assume recognizedText is the text extracted by OCR
const recognizedText = `
ENERGY (kcal) 451.0
PROTEIN (g) 7.7
CARBOHYDRATE (g) 77.2
TOTAL SUGARS (g) 20.5
ADDED SUGARS (g) 20.0
TOTAL FAT (g) 12.4
SATURATED FAT (g) 5.7
TRANS FAT (g) 0
CHOLESTEROL (mg) 0
SODIUM (mg) 231
`;

const parseNutritionalInfo = (text) => {
// Regex to capture numeric values from the text
const energyRegex = /ENERGY \(kcal\)\s*(\d+\.?\d*)/i;
const proteinRegex = /PROTEIN \(g\)\s*(\d+\.?\d*)/i;
const carbohydrateRegex = /CARBOHYDRATE \(g\)\s*(\d+\.?\d*)/i;
const totalSugarsRegex = /TOTAL SUGARS \(g\)\s*(\d+\.?\d*)/i;
const addedSugarsRegex = /ADDED SUGARS \(g\)\s*(\d+\.?\d*)/i;
const fatRegex = /TOTAL FAT \(g\)\s*(\d+\.?\d*)/i;
const saturatedFatRegex = /SATURATED FAT \(g\)\s*(\d+\.?\d*)/i;
const transFatRegex = /TRANS FAT \(g\)\s*(\d+\.?\d*)/i;
const cholesterolRegex = /CHOLESTEROL \(mg\)\s*(\d+)/i;
const sodiumRegex = /SODIUM \(mg\)\s*(\d+)/i;

// Helper function to match a regex
const getValue = (regex, text) => {
  const match = text.match(regex);
  return match ? parseFloat(match[1]) : null;
};

// Parse values
const nutritionalData = {
  name: "Packaged Food Item", // You can manually set or extract this from other text if available
  servingSize: 100, // Example, could extract if needed
  calories: {
    amountPer100g: getValue(energyRegex, text),
  },
  fats: {
    amountPer100g: getValue(fatRegex, text),
    saturatedFats: getValue(saturatedFatRegex, text),
    transFats: getValue(transFatRegex, text),
  },
  sugars: {
    total: getValue(totalSugarsRegex, text),
    added: getValue(addedSugarsRegex, text),
  },
  proteins: {
    amountPer100g: getValue(proteinRegex, text),
  },
  carbohydrates: {
    amountPer100g: getValue(carbohydrateRegex, text),
  },
  cholesterol: {
    amountPer100g: getValue(cholesterolRegex, text),
  },
  sodium: {
    amountPer100g: getValue(sodiumRegex, text),
  },
  preservatives: true, // Set based on product if applicable
  artificialSweeteners: false, // Default or extract if needed
  artificialColors: false, // Default or extract if needed
  vitamins: [], // If vitamins info is present, extract and populate
};

return nutritionalData;
};

// Example usage
const structuredData = parseNutritionalInfo(recognizedText);
console.log(structuredData);


  const sendToServer = async (formattedData) => {
    try {
      const response = await fetch('http://3.6.126.234:3000/api/food/addFoodItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Data sent successfully:', data);
      setServerResponse(data); // Set the server response in state
    } catch (error) {
      console.error('Error sending data to server:', error);
      setError('Error sending data to server.');
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '300px', margin: '20px 0' }} />}
      {isLoading ? <p>Loading...</p> : <p>{text}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {serverResponse && (
        <div>
          <h3>Server Response:</h3>
          <pre>{JSON.stringify(serverResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImageToText;
