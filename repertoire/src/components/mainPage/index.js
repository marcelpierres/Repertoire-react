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
import Geek from "../../img/geekquad.png";
import Source from "../../img/thesource.png";
import Rye from "../../img/ryerson.png";
import Valx from "../../img/valxlogo.png";
import Rogerslogo from "../../img/rogers.png";
import Jonar from "../../img/jonar.jpg";
import Cert1 from "../../img/cert1.png";
//inline styling
const imgStyle = {
  width: "300px"
};
const imgStyle1 = {
  width: "500px"
};
class MainPage extends Component {
  render() {
    return (
      <div id="page-top">
        <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />

        <div class="container-fluid p-0">
          <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div class="my-auto">
              <h1 class="mb-0">
                Marcel-Pierre
                <p class=" text-primary">Samuels</p>
              </h1>
              <div class="subheading mb-5">
                <a href="mailto:name@email.com">marcelpierre.s@gmail.com</a>
              </div>
              <p class="lead mb-5">
                {" "}
                Computer Science Graduate with a passion for Software
                Development, Front-End Development using Bootstrap and the React
                Library as well as IT Support. I am a self-motivated{" "}
                <b>leader</b> with excellent <b>communication skills</b> who is
                attentive to detail and works well in a team setting. Adept at
                learning new concepts, documentation, and time management
                skills.
              </p>
              <div class="social-icons">
                <a href="https://www.linkedin.com/in/marcel-pierre-samuels-332525163">
                  <i class="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/marcelpierres">
                  <i class="fab fa-github" />
                </a>
                <a href="https://gitlab.com/marcelpierres">
                  <i class="fab fa-gitlab" />
                </a>
                {/*  <a href="img/marcelpierreresume.pdf">
                  <i class="fas fa-file-alt" />
                </a>*/}
                <a href="https://www.instagram.com/mpdsamuels/">
                  <i class="fab fa-instagram" />
                </a>
              </div>
            </div>
          </section>
        </div>
        <hr class="m-0" />
        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="experience"
        >
          <div class="my-auto">
            <h2 class="mb-5">Projects</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">
                  Art Gallery Web-Site (3 hr per day/ 2 months/worth 30%)
                </h3>
                <div class="subheading mb-3">CPS630 Web Applications</div>
                <p>
                  • Partnered with 2 others to design, develop and test Art
                  Gallery Website using HTML5, CSS3, JavaScript, PHP, and MySQL{" "}
                  <br /> • Developed MySQL Database and used PHP to access and
                  modify queries <br /> • Utilized HTML5, CSS3 and JavaScript to
                  design and style <br /> • Documented design, layout,
                  development and structure of website and database
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">February 2018 - April 2018</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">
                  Online Registration System (1.5 hr per day/ 2 months/worth
                  30%)
                </h3>
                <div class="subheading mb-3">CPS731 Software Engineering I</div>
                <p>
                  • Partnered to develop, meet requirements and deliver Online
                  Registering System <br /> • Utilized the Software Development
                  Waterfall Model
                  <br /> • Determined system functional and non-functional
                  requirements
                  <br /> • Produced documentation using Marketecture Document,
                  Activity, Component, Data Flow and Use Case Diagrams
                  <br /> • Created Data dictionary, Sequence Diagram and
                  Requirement Prioritization artifacts
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">October 2017 - December 2017</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">
                  Content Distribution Network (CDN) (4hr per day/2 months/worth
                  20%)
                </h3>
                <div class="subheading mb-3">CPS706 Computer Networks I</div>
                <p>
                  • Collaborated and led 2 others to develop Content
                  Distribution Network using Java <br /> • Created 5 dummy
                  servers using TCP and UDP connections <br /> • System
                  supported Client server interacting with other servers to
                  retrieve relevant content and download to users <br />
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">October 2016 - December 2016</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">React Native Press Mania Application</h3>
                <div class="subheading mb-3">Personal React Native Project</div>
                <p>
                  • Created a simple button press Android Application using
                  React Native and Redux <br /> • Redux was used to manage state
                  on the users' device
                  <br /> • React Native and different npm packages were used to
                  create the UI <br />
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">March 2019 - Present</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">React Chat Web Application</h3>
                <div class="subheading mb-3">Personal React Project</div>
                <p>
                  • Implemented a Full Stack Chat Application using React and
                  Firebase Database (NoSQL) into this Personal Website <br />
                  • React and Redux was used to manage state on the clients side
                  <br /> • Firebase Database (NoSQL) was used in creating a
                  Server to allow for communication between Clients <br />•
                  Firebase was used to host the Web Application
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">February 2019 - Present</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0"> Node.JS Twitter Bot</h3>
                <div class="subheading mb-3">Personal Node.JS Project</div>
                <p>
                  • Developed using Node.JS, NewsAPI and Twitter API <br />
                  • The Twitter API was used to check the Bot's connection
                  status, search for tweets as well as post tweets relating to
                  tech
                  <br /> • The NewsAPI was used to search for news outlets
                  related to the Tech category, selecting news reports and
                  formatting the JSON to be usable with the Twitter API <br />•
                  Heroku was used to host the Bot
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">March 2019 - Present</span>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0" />
        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="education"
        >
          <div class="my-auto">
            <h2 class="mb-5">Education</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Ryerson University</h3>
                <div class="subheading mb-3">
                  Bachelor of Science, Computer Science Honors Degree{" "}
                </div>
                <div class="subheading mb-3">Minor in, Geography </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">September 2014 - October 2018</span>{" "}
                <br />
                <img
                  class="img-fluid  mx-auto mb-2"
                  style={imgStyle1}
                  src={Rye}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0" />
        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="cert"
        >
          <div class="my-auto">
            <h2 class="mb-5">Certifications</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">CompTIA</h3>
                <div class="subheading mb-3">
                  CompTIA Network+ CE{" "}
                </div>
                <div class="subheading mb-3"> </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">March 2021 - March 2024</span>{" "}
                <br />
                <img
                  class="img-fluid  mx-auto mb-2"
                  style={imgStyle1}
                  src={Cert1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="workex"
        >
          <div class="my-auto">
            <h2 class="mb-5">Work Experience</h2>

            {/*Rogers*/}
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">
                  Rogers – Tier 2 Technical Escalation Management
                </h3>
                <div class="subheading mb-3">
                  {" "}
                  Rogers 855 York Mills Rd, North York, ON M3B 1Z1
                </div>
                <div class="resume-content mr-auto">
                  <p>
                    {" "}
                    • Floor walk and provide face to face support to Tier 1 Agents in my Free Time 
                    <br />
                    • Collaborate with multiple Departments (TTM, OSTC, OOP, OFE, Dispatch, Call Creations) to resolve Technical Issues related to Rogers Systems and Products (Computer Networking SOHO and external infrastructure) 
                    <br />
                    • Activate / Deactivate the IVR as well as provide voice recordings for the Queue 
                    <br />
                    • Handle and Resolve Technical Management Escalated Cases regarding all Rogers Services 
                    <br />
                    • Constantly engaged in email trails to resolve High Priority cases 
                    <br />
                    • Provide Managerial Support for Tier 1 Front-line Technical Support agents and provide solutions for other internal departments 
                    <br />• Engaged in OOP offline work and assisting Tier 2 Primes when help is needed 
                    <br />• Constant monitoring in Genesis and the Advisor to manage Queue Levels 
                    <br />• Trained and Facilitated a New Hire Class of 24 individuals on the Technical Support and Troubleshooting practices at Rogers as well as answered any questions and concerns they may have 
                    <br />• Joined the Co-Pilot Program where I trained 2 new hires for the Tier 1 Technical role with the High-Speed Internet Department 
                  </p>
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary"> April 2019 - Present</span>
                <div class="mt-3">
                  <img
                    class="img-fluid  mx-auto mb-0"
                    style={imgStyle}
                    src={Rogerslogo}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/*Valx*/}
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">
                  <a href="https://valx.ca/">VALX</a> – Front-End Developer
                </h3>
                <div class="subheading mb-3">
                  {" "}
                  Ryerson University Student Startup{" "}
                </div>
                <div class="resume-content mr-auto">
                  <p>
                    {" "}
                    • Designed and programmed Valx website
                    <br />
                    • Fixed bugs and plans for future functionality
                    <br />
                    • Utilizes Github and Gitlab to record and plan issues as
                    well as set deadlines
                    <br />
                    • Manages a team of 2 other developers
                    <br />• Advertised Startup
                  </p>
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary"> June 2018 - January 2020</span>
                <div class="mt-3">
                  <img
                    class="img-fluid  mx-auto mb-0"
                    style={imgStyle}
                    src={Valx}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/*Jonar*/}
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Jonar – Software Developer Internship</h3>
                <div class="subheading mb-3">
                  {" "}
                  55 Rue de Louvain O Suite 303, Montreal, Quebec H2N 1A4
                </div>
                <div class="resume-content mr-auto">
                  <p>
                    {" "}
                    • Experienced querying with Postgres in a professional
                    environment
                    <br />
                    • Fixed bugs within the company’s software (Paragon)
                    <br />
                    • Learned the use and functionality of the Amazon API
                    <br />• Took part in the building of a functional
                    Integration between Paragon and Amazon API
                  </p>
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary"> November 2018 - February 2019</span>
                <div class="mt-3">
                  <img
                    class="img-fluid  mx-auto mb-0"
                    style={imgStyle}
                    src={Jonar}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/*Geek Squad*/}
            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Geek Squad – Counter Intelligence Agent</h3>
                <div class="subheading mb-3">
                  Best Buy 480 Progress Ave, Scarborough, ON M1P 5J1{" "}
                </div>
                <div class="resume-content mr-auto">
                  <p>
                    {" "}
                    • Diagnosed hardware and software issues with Laptops,
                    Desktops and Tablets <br /> • Repaired Desktops and Laptops{" "}
                    <br /> • Setup Desktops and Laptops <br /> • Provided
                    customer service <br /> • Imaged Desktops and Laptops <br />{" "}
                    • Replaced Hard Drives <br /> • Upgraded Software for
                    Windows and MacOS <br /> • Install and Setup various
                    Software (Microsoft Office, Outlook, etc) <br /> •
                    Troubleshoot Hardware and Software <br /> • Listened to
                    customers and matched their requirements to supported
                    products
                  </p>
                </div>
              </div>

              <div class="resume-date text-md-right">
                <span class="text-primary">September 2018 - November 2018</span>
                <div class="mt-3">
                  <img
                    class="img-fluid  mx-auto mb-0"
                    style={imgStyle}
                    src={Geek}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Sales Associate</h3>
                <div class="subheading mb-3">
                  The Source, RBC Plaza 200 Bay St, Toronto, ON M5J 2J2{" "}
                </div>
                <div class="resume-content mr-auto">
                  <p>
                    • Learned Bell mobile products and plans
                    <br />
                    • Provided customer service
                    <br />
                    • Sold mobility, home phone, and TV packages
                    <br />
                    • Sold mobile devices and other electronic equipment
                    <br />
                    • Managed and organized store stock
                    <br />• Listened to customers and matched their requirements
                    to supported products
                  </p>
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">May 2016 - August 2017</span>
                <div class="mt-3">
                  <img
                    class="img-fluid  mx-auto mb-0"
                    style={imgStyle}
                    src={Source}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="skills"
        >
          <div class="my-auto">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Languages &amp; Technologies</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-java" />
              </li>
              <li class="list-inline-item">
                <i class="fab ">C</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-angular" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-html5" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-sass" />
              </li>
              <li class="list-inline-item">
                <i class="fab ">Bootstrap</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square" />
              </li>
              <li class="list-inline-item">
                <i class="fab ">JSON</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-php" />
              </li>
              <li class="list-inline-item">
                <i class="fab ">MySQL</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-python" />
              </li>
              <li class="list-inline-item">
                <i class="fab">UNIX</i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-git" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-linux" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-windows" />
              </li>
            </ul>

            <div class="subheading mb-3">Additional Qualifications</div>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-check" />
                Strong problem solving, analytical &amp; mathematical skills
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Knowledge of UML (Unified Modeling Language) diagrams
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Knowledge of wide range of software &amp; hardware technologies
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Knowledge of the software development life cycle
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Ability to handle people, problems or situations with honesty,
                integrity, &amp; personal ethics
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Ability to assist associates &amp; work in a fast-paced
                environment
              </li>
              <li>
                <i class="fa-li fa fa-check" />
                Ability to work a flexible job schedule
              </li>
            </ul>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="interests"
        >
          <div class="my-auto">
            <h2 class="mb-5">Interests</h2>
            <p>
              Aside from Software Development and Web Design, I enjoy learning
              about new mobile and computer technology. In addition, I enjoy
              photography, photo-editing and video-editing. Other than
              technology, I enjoy learning about social and physical geography
              as well as watching anime and science fiction, with the occasional
              nature and space documentaries.
            </p>
          </div>
        </section>

        <hr class="m-0" />
        <Slide />
      </div>
    );
  }
}

export default MainPage;
