import { useState } from "react";
import logo from "../../../assets/icons/logo.svg";
import menuIcon from "../../../assets/icons/menu.svg";

import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <Link to="/" className="title">
          <img className="lg:w-[175px] w-[92px]" src={logo} alt="" />
        </Link>
        <button className="menu -mt-2" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuIcon} alt="" />
        </button>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Client</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/services">Work</NavLink>
          </li>
          <li>
            <NavLink to="/services">Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      {!menuOpen && <div className="header-text lg:ms-16 ms-5 lg:mt-[110px] mt-8 lg:w-[600px] w-[280px]">
        <h2 className="header-title">
          Discover Limitless Possibilities with Our Innovative Software
          Solutions.
        </h2>
      </div>}
    </div>
  );
};

export default Navbar;
