import React from "react";
import "./Navbar.css";
import logoImg from "../../assets/images/logo.svg";
import light_dark from "../../assets/images/ligth_dark.svg";
import burder_menu from "../../assets/images/hamburger-menu.webp";
const Navbar = () => {
  return (
    <div className=" header_container">
      <div className="container">
        <div className="card">
          <img src={logoImg} alt="Logo" />
          <h1> Product </h1>{" "}
        </div>{" "}
        <div className="card2">
          <ul className="list_header">
            <li> Product </li> <li> Customers </li> <li> Pricing </li>{" "}
            <li> Resources </li>{" "}
          </ul>{" "}
        </div>{" "}
        <img className="burger_menu" src={burder_menu} alt="" />
        <ul className="list_header2">
          <li> Product </li> <li> Customers </li> <li> Pricing </li>{" "}
          <li> Resources </li>{" "}
        </ul>{" "}
        <div className="card3">
          {" "}
          <a href="#" className="sign_in">
            {" "}
            Sign In{" "}
          </a>{" "}
          <a href="#" className="sign_up">
            {" "}
            Sign Up{" "}
          </a>{" "}
          <img src={light_dark} alt="" />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
