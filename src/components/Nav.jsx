import React, { useState } from "react";

// Styles
import "./Nav.scss";

// Assets
import boldLogo from "../assets/boldLogo.png";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";

// Consts

const Nav = ({ items }) => {
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
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.link}>
                {item.title} {item?.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Nav;
