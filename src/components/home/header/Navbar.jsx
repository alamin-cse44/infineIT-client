import { useEffect, useState } from "react";
import logo from "../../../assets/icons/logo.svg";
import menuIcon from "../../../assets/icons/menu.svg";

import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add an event listener to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar ${scrolling ? "scrolling" : ""} ${
          isMobileMenuOpen ? "open" : ""
        }`}
      >
        <div className="container lg:mx-[100px] mx-2 my-5 ">
          <img src={logo} className="lg:w-[175px] w-[92px]" alt="" />

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <img
              className={`bar ${isMobileMenuOpen ? "open" : ""}`}
              src={menuIcon}
              alt=""
            />
          </div>

          {/* Navigation Items */}
          <ul
            className={`nav-links lg:gap-12 gap-4 ${
              isMobileMenuOpen ? "open" : ""
            }`}
          >
            <li>
              <a className="lg:hover:after:w-[100%] hover:after:w-[20%]" href="#">Home</a>
            </li>
            <li>
              <a className="lg:hover:after:w-[100%] hover:after:w-[20%]" href="#client">Client</a>
            </li>
            <li>
              <a className="lg:hover:after:w-[100%] hover:after:w-[20%]" href="#services">Services</a>
            </li>
            <li>
              <a className="lg:hover:after:w-[100%] hover:after:w-[20%]" href="#work">Work</a>
            </li>
            <li>
              <a className="lg:hover:after:w-[100%] hover:after:w-[20%]" href="#faq">Faq</a>
            </li>
            <li>
              <a className="lg:hover:after:w-[100%] hover:after:w-[20%]" href="#contact">Contact</a>
            </li>
            <li>
              <Link to='api' className="lg:hover:after:w-[100%] hover:after:w-[20%]">Context Api</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="poster">
        <p className="poster-title lg:ms-[106px] ms-4 lg:pt-[180px] pt-20">
          Discover Limitless <br /> Possibilities with Our <br /> Innovative Software <br />
          Solutions.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
