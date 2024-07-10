
//import logo from './logo.svg';
//import img1 from './images/siteLogo.png';

import './App.css';
import Navbar from './components/Navbar';
import Mainbar from './components/Mainbar';
import Signup from './components/Signup';
import React, { useState } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
  
     <BrowserRouter>
      <Navbar/>
      <Mainbar/>
      <div className="container my-3">
        <Routes>
          
          
        </Routes> 
      </div>
      </BrowserRouter>
      <Signup/>
    </>
    
    
);
}

export default App;