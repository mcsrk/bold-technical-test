import React, { useState } from "react";

// Styles
import "./Nav.scss";

// Assets
import boldLogo from "../assets/boldLogo.png";
import iconHelp from "../assets/iconHelp.svg";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="nav">
      <a href="https://bold.co/">
        <img className="bold-logo" src={boldLogo} alt="bold-logo" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <Bars3BottomRightIcon className="icon-menu" />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="https://bold.co/comparar.html">Mi negocio</a>
          </li>
          <li>
            <a href="https://bold.co/contacto.html">
              <span>Ayuda</span>
              <img className="icon-help" src={iconHelp} alt="help-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
