const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json()); // parse JSON body
app.use(cors());

// Handle uncaught errors globally for debugging
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

app.post('/predict', (req, res) => {
  console.log('Received request body:', req.body);

  const requiredFields = ['food_item', 'main_ingredient', 'sweetner', 'fat_oil', 'seasoning', 'allergens'];
  const inputData = req.body;

  // Validate input keys
  const hasAllFields = requiredFields.every(field => field in inputData);
  if (!hasAllFields) {
    console.log('Missing required fields!');
    return res.status(400).json({ error: 'Invalid input features' });
  }

  // Absolute path to your Python script
  const scriptPath = path.join(__dirname, 'predict.py');

  // Spawn Python process and pass input JSON as argument
  const pythonProcess = spawn('python3', [scriptPath, JSON.stringify(inputData)]);

  let dataToSend = '';
  pythonProcess.stdout.on('data', (data) => {
    dataToSend += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      console.log('Python script exited with code:', code);
      return res.status(500).json({ error: 'Prediction script error' });
    }

    try {
      const result = JSON.parse(dataToSend);
      console.log('Prediction result:', result);
      res.json(result);
    } catch (err) {
      console.error('Error parsing JSON from Python script:', err);
      res.status(500).json({ error: 'Invalid response from prediction script' });
    }
  });
});

const PORT = 4000;
console.log("Starting server...");
app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
// console.log("Server listen call finished");

