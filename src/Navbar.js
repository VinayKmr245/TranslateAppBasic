import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Style={
  textDecoration: 'none',
  color:'black'
}
const Navbar = () => {
  return (
    <div className="Navbar">
        <div>WORDHELP</div>
      <div className="AppNav">
        <ul className="App-header">
          <li>
            <Link style={Style} to="/">Translate</Link>
          </li>
          <li>
            <Link style={Style} to="/Synonym">Synonym</Link>
          </li>
          <li>
            <Link style={Style} to="/Dictionary">Dictionary</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
