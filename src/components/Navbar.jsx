import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setmenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setmenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span className="navbar-logo">Emily Tamayo</span>

      {menuClicked ? (
        <FiMenu size={25} className="navBar-Menu" onClick={toggleMenuClick} />
      ) : (
        <FiX size={25} className="navBar-Menu" onClick={toggleMenuClick} />
      )}

      <ul className={menuClicked ? "navbar-list" : "navbar-list navbar-list_active"}>
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
