import sys
import json
import joblib
import pandas as pd

# Load model
model = joblib.load("allergen_detector_model.pkl")

# Read input from command line
input_data = json.loads(sys.argv[1])

# Convert to DataFrame
try:
    df = pd.DataFrame([input_data])
    prediction = model.predict(df)
    result = {"prediction": prediction[0]}
except Exception as e:
    result = {"error": str(e)}

# Return result
result = {"prediction": int(prediction[0])}
print(json.dumps(result))
