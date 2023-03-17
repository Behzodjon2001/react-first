import React, { Component } from "react";
import "./Home.css";
import homeImg from "../../assets/images/home.png";

export class home extends Component {
  render() {
    return (
      <div className="container">
        home <img src={homeImg} alt="Home" />
        <img src="/logo192.png" alt="" />
      </div>
    );
  }
}

export default home;
