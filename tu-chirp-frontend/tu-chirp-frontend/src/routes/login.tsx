import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '80%', maxWidth: '528px', position: 'relative', margin: 'auto', textAlign: 'center' }}>
        <div style={{ width: '100%',height: '200%', background: 'white', boxShadow: '0px 2px 4px -2px rgba(221, 221, 221, 0.25)', borderRadius: '5px', border: '1px #DDDDDD solid', transform: 'translate(0, 0)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
            <img 
              style={{ width: '20%', height: 'auto' }} 
              src="/chirp.jpg" 
              alt="Chirp Logo" 
            />
            <div style={{ color: 'black', fontSize: '4vw', fontFamily: 'Inter', fontWeight: '700', marginLeft: '2%' }}>
              Welcome to TU Chirp!
            </div>
          </div>
          <div style={{ backgroundColor: '#F5BE41', width: '100%', height: '50px', position: 'fixed', top: '0', left: '0', right: '0' }}></div>

          <div style={{ width: '100%', background: '#F5BE41', borderRadius: '5px', marginTop: '5%' }}></div>
          <form style={{ textAlign: 'center', marginTop: '5%' }}>
            <input type="text" placeholder="Username" style={{ width: '40%', marginRight: '5%', padding: '1.5%', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="Password" style={{ width: '40%', padding: '1.5%', borderRadius: '5px', border: '1px solid #ccc' }} />
          </form>
          <button onClick={() => {}} style={{ width: '35%', height: '6%', background: '#f0f0f0', borderRadius: '5px', border: '1px #ccc solid', color: 'black', fontSize: '1vw', fontFamily: 'Inter', fontWeight: '400', cursor: 'pointer', marginTop: '3%' }}>Sign In</button>
          <div onClick={handleGoogleLogin} style={{ width: '35%', height: '6%', background: '#e5f1ff', borderRadius: '5px', border: '1px #83b7ff solid', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%', margin: 'auto', fontSize: '1vw' }}>Use your Google Account</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
