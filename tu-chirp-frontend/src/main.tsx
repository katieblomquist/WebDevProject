import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Edit from './routes/edit.tsx'
import FindUsers from './routes/find_users.tsx'
import Login from './routes/login.tsx'
import PostDetails from './routes/post_details.tsx'
import Profile from './routes/profile.tsx'
import Root from './routes/root.tsx';


const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    {
      path: "profile",
      element: <Profile />
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
    }
  ]

}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
