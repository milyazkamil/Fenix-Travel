import { useState } from "react";
import logo from "../assets/images/logo.svg";
import PageLinks from "./PageLinks";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [showNav, setShowNav] = useState("none");

  const show = (e) => {
    e.preventDefault();
    setShowNav(showNav === "none" ? "flex" : "none");
  };

  return (
    <header id="header">
      <nav>
        <a className="logo-container" href="#">
          <img id="logo" src={logo} alt="logo" />
          <h1>
            Fenix <span >Travel</span>
          </h1>
        </a>
        <div className="mobile-nav">
          <div style={{ display: showNav }}>
            <PageLinks />
          </div>
        </div>
        <div className="desktop-nav">
          <PageLinks />
        </div>
        <div className="social-icons-container">
          <SocialIcons />
          <ul className="hamburger">
            <li>
              <i onClick={show} className="fa-solid fa-bars hamburger-icon"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;