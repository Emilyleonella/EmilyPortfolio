import React from "react";
import { IconName } from "react-icons/fi";
import {BrowserRouter as Router, Outlet, useRouteMatch, useParams} from "react-router-dom";

const Navbar = ({navbarLinks}) => {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Emily Tamayo</span>
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
