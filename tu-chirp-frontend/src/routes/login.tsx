import React, { useState, FormEvent } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import '../Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setEmailError('');
      setPasswordError('');

      if (!email) {
        setEmailError('Email is required.');
      }

      if (!password) {
        setPasswordError('Password is required.');
      }

      if (!email || !password) {
        return;
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="form-container">
          <img 
            className="logo" 
            src="/chirp.jpg" 
            alt="Chirp Logo" 
          />
          <div className="title">
            Welcome to TU Chirp!
          </div>
          <form onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="input-field" 
            />
            {emailError && <div className="error">{emailError}</div>}
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="input-field" 
            />
            {passwordError && <div className="error">{passwordError}</div>}
            <button type="submit" className="submit-button">Sign In</button>
          </form>
        </div>
        <div className="form-container">
          <div onClick={handleGoogleLogin} className="google-button">
            <i className="fab fa-google google-icon"></i>
            Sign in with Google
          </div>
        </div>
        <div className="footer">
          <p>New to TU Chirp? <a href="#" style={{ color: '#0366d6', textDecoration: 'none' }}>Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
