import React from "react";
import './Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <nav>
        <ul className="main-nav">

            <b><li><Link to="/">Home</Link></li></b>
            <b><li><Link to="/Series">Series</Link></li></b>
            <b><li><Link to="/Movies">Movies</Link></li></b>
        
        </ul>
    </nav>
);
}

export default Header;