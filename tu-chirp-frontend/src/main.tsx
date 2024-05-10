import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Edit from './routes/edit.tsx';
import FindUsers from './routes/find_users.tsx';
import Login from './routes/login.tsx';
import PostDetails from './routes/post_details.tsx';
import Root from './routes/root.tsx';
import Profile from './routes/profile.tsx';
import Account from './routes/account.tsx';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import App from './App';
import Feed from './routes/feed.tsx';
import ProfilePage from './routes/profile.tsx';
import { profile } from './services/mock_data.ts';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClGcAmx2M6hc1mJa5luYiGJgjJLMnKvkU",
  authDomain: "tu-chirp.firebaseapp.com",
  projectId: "tu-chirp",
  storageBucket: "tu-chirp.appspot.com",
  messagingSenderId: "689381813853",
  appId: "1:689381813853:web:9ec3573abcc4b05c7967b4",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let user = profile;


const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    {
      path: "profile",
      element: <ProfilePage user={user} />
    },
    {
      path: "details",
      element: <PostDetails />
    },
    {
      path: "edit",
      element: <Edit />
    },
    {
      path: "findusers",
      element: <FindUsers />
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "feed",
      element: <Feed user={user} />
    }, {
      path: "account",
      element: <Account />
    }

  ]

}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
