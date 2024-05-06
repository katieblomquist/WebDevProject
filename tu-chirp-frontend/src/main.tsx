import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Edit from './routes/edit.tsx'
import FindUsers from './routes/find_users.tsx'
import Login from './routes/login.tsx'
import PostDetails from './routes/post_details.tsx'
import Root from './routes/root.tsx';
import Feed from './routes/feed.tsx';
import { profile } from './services/mock_data.ts';
import ProfilePage from './routes/profile.tsx';

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
      path:"login",
      element: <Login />
    },
    {
      path:"feed",
      element: <Feed user={user}/>
    }
  ]

}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


