// main.tsx or index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { getAnalytics } from 'firebase/analytics'; // Import getAnalytics
import App from './App';
import Login from './routes/login'; // Adjust the import path


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClGcAmx2M6hc1mJa5luYiGJgjJLMnKvkU",
  authDomain: "tu-chirp.firebaseapp.com",
  projectId: "tu-chirp",
  storageBucket: "tu-chirp.appspot.com",
  messagingSenderId: "689381813853",
  appId: "1:689381813853:web:9ec3573abcc4b05c7967b4",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional if you're using Firebase Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> {/* Route for the Login component */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
