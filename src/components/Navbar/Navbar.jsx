import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import LogoTekmira from "../../pic/Image-Asset/logotekmira.svg";
import "./navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={LogoTekmira} />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "bx bx-x" : "bx bx-menu"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
            Tentang Kami <i className="bx bxs-chevron-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link
            to="/portofolio"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Portofolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/layanan" className="nav-links" onClick={closeMobileMenu}>
            Layanan <i className="bx bxs-chevron-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/publikasi" className="nav-links" onClick={closeMobileMenu}>
            Publikasi <i className="bx bxs-chevron-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/reformasi" className="nav-links" onClick={closeMobileMenu}>
            Reformasi Birokrasi <i className="bx bxs-chevron-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/tamsya" className="nav-links" onClick={closeMobileMenu}>
            Tamasya <i className="bx bxs-chevron-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/jurnal" className="nav-links" onClick={closeMobileMenu}>
            Jurnal <i className="bx bxs-chevron-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
