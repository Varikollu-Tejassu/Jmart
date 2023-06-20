import React from 'react'
import Header from '../user/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../user/Footer'
import { ToastContainer } from 'react-toastify'
const Layout = () => {
  return (
    <div >
         <Header/>
         <Outlet/>
        <Footer/>
       <ToastContainer/>
    </div>
  )
}

export default Layout