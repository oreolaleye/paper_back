import React from "react";
import Logo from "../../assests/images/bv-logo-nobg.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo-div">
        <ul className="nav-list">
          <li className="nav-item logo-item">
            <img className="nav-logo" src={Logo} alt="BookVerse" />
          </li>
        </ul>
      </div>

      <div className="nav-list-div">
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
        </ul>
      </div>

      <div className="nav-login-div">
        <ul>
          <li className="nav-item nav-login">Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
