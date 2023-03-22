import React, { Component } from "react";
import "./Product.css";
import cursor from "../../assets/images/cursor.svg";
import blueImg from "../../assets/images/blue_img.svg";
import header from "../../assets/images/heard.svg";
import qumSoat from "../../assets/images/qum_soat.svg";

export default class Product extends Component {
  render() {
    return (
      <div className=" product_container">
        <div className="container">
          <div className="card">
            <h3 className="was_built">
              {" "}
              Product was Built Specifically for You{" "}
            </h3>{" "}
          </div>{" "}
          <div className="card2">
            <div className="inner">
              <img src={cursor} alt="" />
              <h3> First click tests </h3>{" "}
              <p> While most people enjoy casino gambling, </p>{" "}
            </div>{" "}
            <div className="inner">
              <img src={blueImg} alt="" />
              <h3> First click tests </h3>{" "}
              <p> While most people enjoy casino gambling, </p>{" "}
            </div>{" "}
            <div className="inner">
              <img src={header} alt="" />
              <h3> First click tests </h3>{" "}
              <p> While most people enjoy casino gambling, </p>{" "}
            </div>{" "}
            <div className="inner">
              <img src={qumSoat} alt="" />
              <h3> First click tests </h3>{" "}
              <p> While most people enjoy casino gambling, </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card3">
            <button className="sign_up_now"> SIGN UP NOW </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
