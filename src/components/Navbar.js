import React from 'react'
//import logo from './logo.svg';
import img1 from './images/siteLogo.png';
//import img2 from './images/group.png';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar(){
    return (
        <>
        <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={img1} alt="Logo" />
          </div>
          <div className="navbar-links">
            <ul>
              <li><Link to="#">MEN</Link></li>
              <li><Link to="#">WOMEN</Link></li>
              <li><Link to="#">KIDS</Link></li>
              <li><Link to="#">HOME & LIVING</Link></li>
              <li><Link to="#">BEAUTY</Link></li>
              <li><Link to="#">STUDIO</Link></li>
            </ul>
          </div>
          <div className="navbar-search">
            <input type="text" placeholder="Search for products..." />
            
          </div>
          <div className="navbar-icons">
            <p  style={{alignItems:"centre"}}>
          <img
            style={{ marginLeft: "15%", fontSize: "12px" ,width:"30px", height:"30px" }}
            src="https://cdn.icon-icons.com/icons2/3054/PNG/512/account_profile_user_icon_190494.png"
            alt=""
          />
          Profile
          </p>
          <p  style={{alignItems:"centre"}}> 
          <img
            style={{ marginLeft: "15%", fontSize: "12px" ,width:"26px", height:"26px" }}
            src="https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png"
            alt=""
          />
          Wishlist
          </p>
          <p  style={{alignItems:"centre"}}>
          <img
            style={{ marginTop:"-7%" ,marginLeft: "15%", fontSize: "12px" ,width:"33px", height:"33px" }}
            src="https://t3.ftcdn.net/jpg/07/14/57/10/360_F_714571052_6cbdJRbvbZVrqqJ9ujvPOMAfunjd92bH.jpg"
            alt=""
          />
          Community
          </p>
          <p style={{alignItems:"centre"}}>
          <img
            style={{marginTop:"4%",marginLeft: "15%", fontSize: "12px" ,width:"21px", height:"21px" }}
            src="https://icons.iconarchive.com/icons/icons8/ios7/256/Ecommerce-Shopping-Bag-icon.png"
            alt=""
          />
          Bag
          </p>
          </div>
        </div>
      </nav>
      
      </>
    )
}