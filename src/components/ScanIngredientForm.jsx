import React, { useState } from 'react';
import './ScanIngredientForm.css';

const ScanIngredientForm = () => {
  const [formData, setFormData] = useState({
    food_item: '',
    main_ingredient: '',
    sweetner: '',
    fat_oil: '',
    seasoning: '',
    allergens: '',
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('http://localhost:4000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.prediction); // assuming backend returns { prediction: 0 or 1 }
      } else {
        setError(data.error || 'Prediction failed');
      }
    } catch (err) {
      setError('Could not connect to server');
    }
  };

  return (
    <div className="scan-form-container">
      <h2>Scan Ingredients</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <label key={key}>
            {key.replace('_', ' ')}:
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </label>
        ))}

        <button type="submit">Submit</button>
      </form>

      {response !== null && (
        <div
          className={`prediction-result ${response === 0 ? 'not-healthy' : 'healthy'}`}
        >
          {response === 0 ? (
            <>
              <span className="emoji">❌</span>
              <span>Not Healthy</span>
            </>
          ) : (
            <>
              <span className="emoji">✅</span>
              <span>Healthy</span>
            </>
          )}
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default ScanIngredientForm;
