import React from 'react'
import Footer from '../Components/Footer/Footer'
import { Outlet } from "react-router-dom";
import NavBar from '../Components/Navbar/Navbar';
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-[calc(100vh-68px)] pt-24 pb-10 ">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default MainLayout