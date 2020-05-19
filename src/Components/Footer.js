import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div id="footer">
        <ul id="footer-list" style={{ paddingBottom: "0" }}>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <span>Copright 2016,Original Trombones</span>
      </div>
    </React.Fragment>
  );
};

export default Footer;
