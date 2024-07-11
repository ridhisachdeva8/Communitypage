import React from 'react'
import img2 from './images/model.png';
import { Link } from "react-router-dom";
export default function Mainbar(){
    return(
        <div className="background-container" >
         <img src={img2} alt="" className="background-image"/> 
      <div className="text-container">
     <p>
      <h1 id="head1">From Trends To Friends:</h1>
      <h1 id="head2" >Join Myntra's Stylish Community</h1>
      <p style={{fontFamily:"Georgia", fontSize:"1em", marginTop:"-3%"}}>Watch this space for the ultimate shopping <br />
        experience -minus the crowds.</p>
      </p>
      <div className="join" >
      <Link  to="/signup" >
      <button className="btn btn-orange mx-1"> Join our Community</button>
      </Link>
      </div>
      
      </div>
      </div>
    )
}