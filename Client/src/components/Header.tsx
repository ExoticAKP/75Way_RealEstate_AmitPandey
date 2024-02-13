import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="headerNav">
        <div className="headerNavdivs">
          <h1>Reali<span style={{color:'red'}}>ties</span></h1>
        </div>
        <div className="headerNavdivs">
          <div className="navbar">
            <a href="#home">Home</a>
            <a href="#news">Comapny</a>
            <div className="dropdown">
              <button className="dropbtn">
                Properties
              </button>
              <div className="dropdown-content">
                <a href="#">Villas</a>
                <a href="#">Tenaments</a>
                <a href="#">Flats</a>
              </div>
            </div>
            <a href="#home">Blogs</a>
            <a href="#home">Contact Us</a>
          </div>
        </div>
        <div className="headerBtndiv">
            <Link to={'/login'}><button className="log">Login
              </button></Link>
              <Link to={'/signup'}><button className="sign">Register</button></Link>
        </div>
      </div>
      <div className="middle">
        <text className="midleMainTxt">Live Green, Live Luxuriously</text>
        <text className="middleParaTxt">Discover The Advantages Of Eco-Friendly Homes With Our Real Estate Agencies</text>
        <div className="search">
          <select className="select">
            <option value="for sale">For Sale</option>
            <option value="for rent">For Rent</option>
          </select>
          <input className="searchBar" placeholder="Enter an Address, City, Neighbourhood or ZIP code"/>
          <button className="searchBtn">
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
