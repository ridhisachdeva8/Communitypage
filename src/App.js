
//import logo from './logo.svg';
//import img1 from './images/siteLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Mainbar from './components/Mainbar';
import Signup from './components/Signup';
import Inspiration from './components/Inspiration';
import React, { useState } from "react";

import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <>
    
     <BrowserRouter>
      <Navbar/>
      
      <div className="container my-3">
        <Routes>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/" element=
        {<Mainbar/>}></Route>
        </Routes> 
      </div>
      <Inspiration/>
      </BrowserRouter>
    
    </>
);
}

export default App;