import React from "react";
import { IconName } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Emily's Portfolio</span>
      <ul className="navbar-list">
        {navbarLinks.map((item) => {
          return (
            <li className="navbar-item" key={item.title}>
              <a className="navbar-link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
