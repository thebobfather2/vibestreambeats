import Logo from "./img/vsn.jpg"
import React, { useState } from "react";


import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
          <img src={Logo} className="navLogo" />
          <i class="fab fa-firstdraft" />

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;