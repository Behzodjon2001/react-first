import React, { Component } from "react";
import "./Home.css";
import homeImg from "../../assets/images/home.png";
import triangleImg from "../../assets/images/triangle.svg";

export class home extends Component {
  render() {
    return (
      <div className=" home_container">
        <div className="container">
          <div className="card">
            <h1> Work at the speed of thought </h1>{" "}
            <p>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.{" "}
            </p>{" "}
            <div className="inner">
              <button className="get_started"> Get started </button>{" "}
              <div className="child">
                <img src={triangleImg} alt="" />
                <h5>
                  {" "}
                  <u className="watch_the_video"> Watch the Video </u>{" "}
                </h5>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card2">
            <img src={homeImg} alt="Home" />
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default home;
