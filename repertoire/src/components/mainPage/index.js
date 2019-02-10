import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../navBar/Nav.js";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <p>Hello world</p>
      </div>
    );
  }
}

export default MainPage;
