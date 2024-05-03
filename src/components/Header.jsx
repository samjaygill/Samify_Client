import React from "react";
import "./css/Header.css"
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
  return (
    <div className="header-container">
      <img
        src="https://i.ibb.co/zGZ651p/logo.png"
        alt="logo"
        className="logo-img"
      />
      <div className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'home active' : 'home'}>
        HOME
      </Link>
      <Link to="/artists" className={location.pathname === '/artists' ? 'artists active' : 'artists'}>
        ARTISTS
      </Link>
      <Link to="/albums" className={location.pathname === '/albums' ? 'albums active' : 'albums'}>
        ALBUMS
      </Link>
      </div>
    </div>
  );
}

export default Header;
