import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './style.css'
import MainLayout from './Layout/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // children: [
    //   {

    //   }
    // ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)