import React, { Component } from "react";
import "./Container.css";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default class Container extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}
