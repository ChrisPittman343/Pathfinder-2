import React, { Component } from "react";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

export default class Container extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}
