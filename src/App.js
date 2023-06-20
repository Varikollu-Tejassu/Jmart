import * as React from 'react';
import Header from './user/Header';
import Footer from './user/Footer';
import  { useState } from 'react';
import ProductList from './user/ProductList';
import './App.css';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import Login from './user/Login.js';
import Admin  from "./Admins/Admin";
import { Addproduct, Customers,ManageProduct,Orders } from './Admins/Dashboard';
import Cart from "./user/Cart.js";
import Profile from './user/Profile';
import Layout from './Components/Layout';
import Home from './Components/pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import AdminHome from "./Admins/AdminHome";
 function App() {
// const {path} = useLocation();
   return (
    <Provider store={store} >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        
        <Route path='cart' element={<Cart/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path="Profile" element={<Profile/>}/>

      </Route>
      <Route path='admin'  element={<Admin/>}>
        <Route index element={<AdminHome/>}/>
      <Route path='customers' element={<Customers />}/>
      <Route path='stockManagement' element={<Addproduct/>}/>
      <Route path='manageProduct' element={<ManageProduct/>}/>
      <Route path='orders' element={<Orders/>}/>
      </Route>
     </Routes>
 
     </BrowserRouter>
     </Provider>
   
   )
 }
 
 export default App

// login page using React.useEffect
// loginig in page for validation of register
// blob images
// delete item for map function
 //file upload to server
