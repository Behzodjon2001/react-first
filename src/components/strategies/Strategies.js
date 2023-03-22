import React, { Component } from "react";
import "./Strategies.css";
import increasing from "../../assets/images/inceasing_pros.png";
import motivation from "../../assets/images/motivation.png";
import success from "../../assets/images/success.png";

export default class Strategies extends Component {
  render() {
    return (
      <div className=" strategies_container">
        <div className="container">
          <div className="card">
            <h3> Contents Strategies </h3>{" "}
            <p>
              We focus on ergonomics and meeting you where you work.It 's only a
              keystroke away.{" "}
            </p>{" "}
          </div>{" "}
          <div className="card2">
            <div className="inner">
              <div className="child">
                <img src={increasing} alt="" />
              </div>{" "}
              <div className="child2">
                <p>
                  By <span className="wahid_ari"> Wahid Ari </span> | 03 March
                  2019{" "}
                </p>{" "}
                <h3> Increasing Prosperity With Positive Thinking </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="inner">
              <div className="child">
                <img src={motivation} alt="" />
              </div>{" "}
              <div className="child2">
                <p>
                  By <span className="wahid_ari"> Wahid Ari </span> | 03 March
                  2019{" "}
                </p>{" "}
                <h3> Increasing Prosperity With Positive Thinking </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="inner">
              <div className="child">
                <img src={success} alt="" />
              </div>{" "}
              <div className="child2">
                <p>
                  By <span className="wahid_ari"> Wahid Ari </span> | 03 March
                  2019{" "}
                </p>{" "}
                <h3> Increasing Prosperity With Positive Thinking </h3>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
