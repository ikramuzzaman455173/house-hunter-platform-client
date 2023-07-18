import React from 'react'
import Footer from '../Components/Footer/Footer'
import { Outlet } from "react-router-dom";
import NavBar from '../Components/Navbar/Navbar';
const MainLayout = () => {
  return (
    <div className='bg-white'>
      <NavBar />
      <div className="min-h-[calc(100vh-68px)] pt-24 pb-10 ">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
