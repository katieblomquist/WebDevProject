import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <h1>Welcome to TUChirp</h1>
      <Link to="/login">
        <button>TU Chirp</button>
      </Link>
    </div>
  );
}

export default App;
