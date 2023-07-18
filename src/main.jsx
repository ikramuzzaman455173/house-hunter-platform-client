import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './style.css'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/Home/HomePage'
import Login from './Components/Login/Login'
import SignUp from './Components/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element:<HomePage/>
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'signup',
        element:<SignUp/>
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
