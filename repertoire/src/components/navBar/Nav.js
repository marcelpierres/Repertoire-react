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
          class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a class="navbar-brand js-scroll-trigger" href="/#page-top">
            <span class="d-block d-lg-none">Marcel-Pierre Samuels</span>
            <span class="d-none d-lg-block">
              <img
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={profpic}
                alt=""
              />
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/#about">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/#experience">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/#education">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/#workex">Work Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/#interests">Interests</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/#hobbies">Photography</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/chat">Talk To Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
