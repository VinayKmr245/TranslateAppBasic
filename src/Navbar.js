import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Style={
  textDecoration: 'none',
  color:'white'
}
const Navbar = () => {
  return (
    <div className="Navbar">
        <div><Link style={Style} to="/">WORDHELP</Link></div>
      <div className="AppNav">
        <ul className="App-header">
          <li>
            <Link style={Style} to="/">Translate</Link>
          </li>
          <li>
            <Link style={Style} to="/Synonym">Synonyms</Link>
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
