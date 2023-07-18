import React from 'react'
import Footer from '../Components/Footer/Footer'
import { Outlet } from "react-router-dom";
import NavBar from '../Components/Navbar/Navbar';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  return (
    <div className='bg-white'>
      <NavBar />
      <div className="min-h-[calc(100vh-68px)] pt-24 pb-10">
        <Outlet/>
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  )
}

export default MainLayout
