import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
// scss
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../../node_modules/font-awesome/scss/font-awesome.scss";
import "../../scss/resume.scss";
// js imports
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/jquery-easing/dist/jquery.easing.1.3.umd.min.js";
import "../../../node_modules/popper.js/dist/popper.js";
import "../../js/resume.js";
import profpic from "../../img/profpicedit.jpg";
class Nav extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Marcel-Pierre Samuels</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={profpic}
                alt=""
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#workex">Work Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#hobbies">Photography</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
