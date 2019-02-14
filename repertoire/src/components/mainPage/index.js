import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slide from "../slideShow/Slide.js";
import Nav from "../navBar/Nav.js";
// css

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
// Logo images
import Geek from "../../img/geekquad.png"
import Source from "../../img/thesource.png"
import Rye from "../../img/ryerson.png"
import Valx from "../../img/valxlogo.png"
import Jonar from "../../img/jonar.jpg"
//inline styling
const imgStyle = {
  width: '300px'
}
const imgStyle1 = {
  width: '500px'
}
class MainPage extends Component {

  render() {
    return (

      <div id='page-top'>

        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />


        <div class="container-fluid p-0">

          <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div class="my-auto">
              <h1 class="mb-0">Marcel-Pierre
          <p class=" text-primary">Samuels</p>
              </h1>
              <div class="subheading mb-5">
                <a href="mailto:name@email.com">marcelpierre.s@gmail.com</a>
              </div>
              <p class="lead mb-5"> Computer Science Graduate with a passion for Software Development as well as Front-End
                Development
          using Bootstrap, React Library and Angular Framework. I am a self-motivated <b>leader</b> with excellent <b>communication
                                                                                                                                                                                                                                                                  skills
          </b> who is attentive to detail and works well in a team setting. Adept at learning new concepts,
                                                                                                                                                                                                                                                                documentation,
                                                                                                                                                                                                                                                                and time management skills.
        </p>
              <div class="social-icons">
                <a href="https://www.linkedin.com/in/marcel-pierre-samuels-332525163">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/marcelpierres">
                  <i class="fab fa-github"></i>
                </a>
                <a href="img/marcelpierreresume.pdf">
                  <i class="fas fa-file-alt"></i>
                </a>
                <a href="https://www.instagram.com/mpdsamuels/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://discord.gg/cWhfVTU">
                  <i class="fab fa-discord"></i>
                </a>


              </div>
            </div>
          </section>
        </div>
        <hr class="m-0" />
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div class="my-auto">
            <h2 class="mb-5">Projects</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Art Gallery Web-Site (3 hr per day/ 2 months/worth 30%)</h3>
                <div class="subheading mb-3">CPS630 Web Applications</div>
                <p>• Partnered with 2 others to design, develop and test Art Gallery Website using HTML5, CSS3, JavaScript,
                  PHP,
              and MySQL <br /> • Developed MySQL Database and used PHP to access and modify queries <br /> • Utilized
                                                                                                                                                                  HTML5,
              CSS3 and JavaScript to design and style <br /> • Documented design, layout, development and structure of
                                                                                                                                                                        website
                                                                                                                                                                        and database
            </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">February 2018 - April 2018</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Online Registration System (1.5 hr per day/ 2 months/worth 30%)</h3>
                <div class="subheading mb-3">CPS731 Software Engineering I</div>
                <p>• Partnered to develop, meet requirements and deliver Online Registering System <br /> • Utilized the
                  Software
              Development Waterfall Model<br /> • Determined system functional and non-functional requirements<br /> •
                                                                                                                                                                                Produced
              documentation using Marketecture Document, Activity, Component, Data Flow and Use Case Diagrams<br /> •
                                                                                                                                                                                    Created
                                                                                                                                                                                    Data dictionary, Sequence Diagram and Requirement Prioritization artifacts
            </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">October 2017 - December 2017</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Content Distribution Network (CDN) (4hr per day/2 months/worth 20%)</h3>
                <div class="subheading mb-3">CPS706 Computer Networks I</div>
                <p>• Collaborated and led 2 others to develop Content Distribution Network using Java <br /> • Created 5
                  dummy
              servers using TCP and UDP connections <br /> • System supported Client server interacting with other
                                                                                                                                                                                            servers
              to retrieve relevant content and download to users <br />
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">October 2016 - December 2016</span>
              </div>
            </div>


          </div>

        </section>

        <hr class="m-0" />
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div class="my-auto">
            <h2 class="mb-5">Education</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Ryerson University</h3>
                <div class="subheading mb-3">Bachelor of Science, Computer Science Honors Degree </div>
                <div class="subheading mb-3">Minor in, Geography </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">September 2014 - October 2018</span> <br />
                <img class="img-fluid  mx-auto mb-2" style={imgStyle1} src={Rye} alt="" />
              </div>
            </div>


          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="workex">
          <div class="my-auto">
            <h2 class="mb-5">Work Experience</h2>


            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">VALX – Front-End Developer</h3>
                <div class="subheading mb-3"> Ryerson Student Startup </div>
                <div class="resume-content mr-auto">
                  <p> • Designed and programmed Valx website<br />
                  • Fixed bugs and plans for future functionality<br />
                  • Utilizes Github and Gitlab to record and plan issues as well as set deadlines<br />
                  • Manages a team of 2 other developers<br />
                    • Advertised Startup
              </p>
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary"> July 2018 - Present</span>
                <div class="mt-3">
                  <img class="img-fluid  mx-auto mb-0" style={imgStyle} src={Valx} alt="" />
                </div>
              </div>
            </div>



            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Geek Squad – Counter Intelligence Agent</h3>
                <div class="subheading mb-3">Best Buy 480 Progress Ave, Scarborough, ON M1P 5J1 </div>
                <div class="resume-content mr-auto">
                  <p> • Diagnosed hardware and software issues with Laptops, Desktops and Tablets <br /> • Repaired Desktops
                and Laptops <br /> • Setup Desktops and Laptops <br /> • Provided customer service <br /> • Listened to
                                                                                                                        customers and matched their requirements to supported products
              </p>
                </div>
              </div>

              <div class="resume-date text-md-right">
                <span class="text-primary">September 2018 - November 2018</span>
                <div class="mt-3">
                  <img class="img-fluid  mx-auto mb-0" style={imgStyle} src={Geek} alt="" />
                </div>
              </div>

            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Sales Associate</h3>
                <div class="subheading mb-3">The Source, RBC Plaza 200 Bay St, Toronto, ON M5J 2J2 </div>
                <div class="resume-content mr-auto">
                  <p>• Learned Bell mobile products and plans<br />
                    • Provided customer service<br />
                    • Sold mobility, home phone, and TV packages<br />
                    • Sold mobile devices and other electronic equipment<br />
                    • Managed and organized store stock<br />
                    • Listened to customers and matched their requirements to supported products

              </p>
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">May 2016 - August 2017</span>
                <div class="mt-3">
                  <img class="img-fluid  mx-auto mb-0" style={imgStyle} src={Source} alt="" />
                </div>
              </div>
            </div>


          </div>
        </section>


        <hr class="m-0" />

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div class="my-auto">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Languages &amp; Technologies</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-java"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab ">C</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-angular"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab ">Bootstrap</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab ">JSON</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-php"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab ">MySQL</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-python"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab">UNIX</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-git"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-linux"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-windows"></i>
              </li>


            </ul>

            <div class="subheading mb-3">Additional Qualifications</div>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-check"></i>
                Strong problem solving, analytical &amp; mathematical skills</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Knowledge of UML (Unified Modeling Language) diagrams</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Knowledge of wide range of software &amp; hardware technologies</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Knowledge of the software development life cycle</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Ability to handle people, problems or situations with honesty, integrity, &amp; personal ethics</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Ability to assist associates &amp; work in a fast-paced environment</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Ability to work a flexible job schedule</li>
            </ul>
          </div>
        </section>

        <hr class="m-0" />

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
          <div class="my-auto">
            <h2 class="mb-5">Interests</h2>
            <p>Aside from Software Development and Web Design, I enjoy learning about new mobile and computer technology.
              In
              addition, I enjoy photography, photo-editing and video-editing. Other than technology, I enjoy learning

              about social and physical geography as well as watching anime and science fiction, with the occasional

              nature and space documentaries.</p>

          </div>
        </section>

        <hr class="m-0" />
        <Slide />

      </div>
    );
  }
}

export default MainPage;
