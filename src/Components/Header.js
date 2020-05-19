import React from "react";
import logo from "./original_trombones.png";

function Header() {
  return (
    <div id="header">
      <img id="header-img" src={logo} alt="Logo" />
      <nav id="nav-bar">
        <ul id="nav-ul">
          <li>
            <a className="nav-link" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="nav-link" href="#video">
              How It Works
            </a>
          </li>
          <li>
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
