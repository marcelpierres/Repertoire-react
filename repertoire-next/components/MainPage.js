import Slide from './Slide'
import Image from 'next/image'

export default function MainPage() {
  return (
    <div id="page-top">
      {/* About */}
      <div className="container-fluid p-0">
        <section
          className="resume-section px-3 lg:px-12"
          id="about"
        >
          <div className="my-auto">
            <h1 className="mb-0">
              Marcel-Pierre{' '}
              <span className="text-primary">Samuels</span>
            </h1>
            <div className="subheading mb-12">
              <a href="mailto:marcelpierre.s@gmail.com" className="text-primary hover:text-primary/80">
                marcelpierre.s@gmail.com
              </a>
            </div>
            <p className="text-lg font-normal mb-12">
              Computer Science Graduate with a passion for Software Development,
              Front-End Development using Bootstrap and the React Library as well
              as IT Support. I am a self-motivated <b>leader</b> with excellent{' '}
              <b>communication skills</b> who is attentive to detail and works
              well in a team setting. Adept at learning new concepts,
              documentation, and time management skills.
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/marcel-pierre-samuels-332525163">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/marcelpierres">
                <i className="fab fa-github" />
              </a>
              <a href="https://gitlab.com/marcelpierres">
                <i className="fab fa-gitlab" />
              </a>
              <a href="https://www.instagram.com/mpdsamuels/">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <hr className="m-0" />

      {/* Projects */}
      <section className="resume-section px-3 lg:px-12" id="experience">
        <div className="my-auto">
          <h2 className="mb-12">Projects</h2>

          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                Art Gallery Web-Site (3 hr per day / 2 months / worth 30%)
              </h3>
              <div className="subheading mb-4">CPS630 Web Applications</div>
              <p>
                • Partnered with 2 others to design, develop and test Art Gallery
                Website using HTML5, CSS3, JavaScript, PHP, and MySQL <br />
                • Developed MySQL Database and used PHP to access and modify
                queries <br />
                • Utilized HTML5, CSS3 and JavaScript to design and style <br />
                • Documented design, layout, development and structure of website
                and database
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">February 2018 - April 2018</span>
            </div>
          </div>

          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                Online Registration System (1.5 hr per day / 2 months / worth 30%)
              </h3>
              <div className="subheading mb-4">CPS731 Software Engineering I</div>
              <p>
                • Partnered to develop, meet requirements and deliver Online
                Registering System <br />
                • Utilized the Software Development Waterfall Model <br />
                • Determined system functional and non-functional requirements{' '}
                <br />
                • Produced documentation using Marketecture Document, Activity,
                Component, Data Flow and Use Case Diagrams <br />
                • Created Data dictionary, Sequence Diagram and Requirement
                Prioritization artifacts
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">October 2017 - December 2017</span>
            </div>
          </div>

          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                Content Distribution Network (CDN) (4hr per day / 2 months / worth 20%)
              </h3>
              <div className="subheading mb-4">CPS706 Computer Networks I</div>
              <p>
                • Collaborated and led 2 others to develop Content Distribution
                Network using Java <br />
                • Created 5 dummy servers using TCP and UDP connections <br />
                • System supported Client server interacting with other servers to
                retrieve relevant content and download to users
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">October 2016 - December 2016</span>
            </div>
          </div>

          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">React Native Press Mania Application</h3>
              <div className="subheading mb-4">Personal React Native Project</div>
              <p>
                • Created a simple button press Android Application using React
                Native and Redux <br />
                • Redux was used to manage state on the users&apos; device <br />
                • React Native and different npm packages were used to create the
                UI
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">March 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">React Chat Web Application</h3>
              <div className="subheading mb-4">Personal React Project</div>
              <p>
                • Implemented a Full Stack Chat Application using React and
                Firebase Database (NoSQL) into this Personal Website <br />
                • React and Redux was used to manage state on the clients side{' '}
                <br />
                • Firebase Database (NoSQL) was used in creating a Server to allow
                for communication between Clients <br />
                • Firebase was used to host the Web Application
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">February 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Node.JS Twitter Bot</h3>
              <div className="subheading mb-4">Personal Node.JS Project</div>
              <p>
                • Developed using Node.JS, NewsAPI and Twitter API <br />
                • The Twitter API was used to check the Bot&apos;s connection
                status, search for tweets as well as post tweets relating to tech{' '}
                <br />
                • The NewsAPI was used to search for news outlets related to the
                Tech category, selecting news reports and formatting the JSON to be
                usable with the Twitter API <br />
                • Heroku was used to host the Bot
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">March 2019 - Present</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      {/* Education */}
      <section className="resume-section px-3 lg:px-12" id="education">
        <div className="my-auto">
          <h2 className="mb-12">Education</h2>
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Ryerson University</h3>
              <div className="subheading mb-4">
                Bachelor of Science, Computer Science Honors Degree
              </div>
              <div className="subheading mb-4">Minor in, Geography</div>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">September 2014 - October 2018</span>
              <br />
              <Image
                className="max-w-full mx-auto mt-2"
                style={{ width: '500px' }}
                src="/img/ryerson.png"
                alt="Ryerson University"
                width={500}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      {/* Certifications */}
      <section className="resume-section px-3 lg:px-12" id="cert">
        <div className="my-auto">
          <h2 className="mb-12">Certifications</h2>
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">CompTIA</h3>
              <div className="subheading mb-4">CompTIA Network+ CE</div>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">March 2021 - March 2024</span>
              <br />
              <Image
                className="max-w-full mx-auto mt-2"
                style={{ width: '500px' }}
                src="/img/cert1.png"
                alt="CompTIA Network+"
                width={500}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      {/* Work Experience */}
      <section className="resume-section px-3 lg:px-12" id="workex">
        <div className="my-auto">
          <h2 className="mb-12">Work Experience</h2>

          {/* Rogers */}
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Rogers – Tier 2 Technical Escalation Management</h3>
              <div className="subheading mb-4">
                Rogers 855 York Mills Rd, North York, ON M3B 1Z1
              </div>
              <p>
                • Floor walk and provide face to face support to Tier 1 Agents in
                my Free Time <br />
                • Collaborate with multiple Departments (TTM, OSTC, OOP, OFE,
                Dispatch, Call Creations) to resolve Technical Issues related to
                Rogers Systems and Products (Computer Networking SOHO and external
                infrastructure) <br />
                • Activate / Deactivate the IVR as well as provide voice recordings
                for the Queue <br />
                • Handle and Resolve Technical Management Escalated Cases regarding
                all Rogers Services <br />
                • Constantly engaged in email trails to resolve High Priority cases{' '}
                <br />
                • Provide Managerial Support for Tier 1 Front-line Technical Support
                agents and provide solutions for other internal departments <br />
                • Engaged in OOP offline work and assisting Tier 2 Primes when help
                is needed <br />
                • Constant monitoring in Genesis and the Advisor to manage Queue
                Levels <br />
                • Trained and Facilitated a New Hire Class of 24 individuals on the
                Technical Support and Troubleshooting practices at Rogers as well as
                answered any questions and concerns they may have <br />
                • Joined the Co-Pilot Program where I trained 2 new hires for the
                Tier 1 Technical role with the High-Speed Internet Department
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">April 2019 - Present</span>
              <div className="mt-3">
                <Image
                  className="max-w-full mx-auto"
                  style={{ width: '300px' }}
                  src="/img/rogers.png"
                  alt="Rogers"
                  width={300}
                  height={120}
                />
              </div>
            </div>
          </div>

          {/* Valx */}
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                <a href="https://valx.ca/" className="text-primary hover:text-primary/80">
                  VALX
                </a>{' '}
                – Front-End Developer
              </h3>
              <div className="subheading mb-4">Ryerson University Student Startup</div>
              <p>
                • Designed and programmed Valx website <br />
                • Fixed bugs and plans for future functionality <br />
                • Utilizes Github and Gitlab to record and plan issues as well as
                set deadlines <br />
                • Manages a team of 2 other developers <br />
                • Advertised Startup
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">June 2018 - January 2020</span>
              <div className="mt-3">
                <Image
                  className="max-w-full mx-auto"
                  style={{ width: '300px' }}
                  src="/img/valxlogo.png"
                  alt="Valx"
                  width={300}
                  height={120}
                />
              </div>
            </div>
          </div>

          {/* Jonar */}
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Jonar – Software Developer Internship</h3>
              <div className="subheading mb-4">
                55 Rue de Louvain O Suite 303, Montreal, Quebec H2N 1A4
              </div>
              <p>
                • Experienced querying with Postgres in a professional environment{' '}
                <br />
                • Fixed bugs within the company&apos;s software (Paragon) <br />
                • Learned the use and functionality of the Amazon API <br />
                • Took part in the building of a functional Integration between
                Paragon and Amazon API
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">November 2018 - February 2019</span>
              <div className="mt-3">
                <Image
                  className="max-w-full mx-auto"
                  style={{ width: '300px' }}
                  src="/img/jonar.jpg"
                  alt="Jonar"
                  width={300}
                  height={120}
                />
              </div>
            </div>
          </div>

          {/* Geek Squad */}
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Geek Squad – Counter Intelligence Agent</h3>
              <div className="subheading mb-4">
                Best Buy 480 Progress Ave, Scarborough, ON M1P 5J1
              </div>
              <p>
                • Diagnosed hardware and software issues with Laptops, Desktops and
                Tablets <br />
                • Repaired Desktops and Laptops <br />
                • Setup Desktops and Laptops <br />
                • Provided customer service <br />
                • Imaged Desktops and Laptops <br />
                • Replaced Hard Drives <br />
                • Upgraded Software for Windows and MacOS <br />
                • Install and Setup various Software (Microsoft Office, Outlook,
                etc) <br />
                • Troubleshoot Hardware and Software <br />
                • Listened to customers and matched their requirements to supported
                products
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">September 2018 - November 2018</span>
              <div className="mt-3">
                <Image
                  className="max-w-full mx-auto"
                  style={{ width: '300px' }}
                  src="/img/geekquad.png"
                  alt="Geek Squad"
                  width={300}
                  height={120}
                />
              </div>
            </div>
          </div>

          {/* The Source */}
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Sales Associate</h3>
              <div className="subheading mb-4">
                The Source, RBC Plaza 200 Bay St, Toronto, ON M5J 2J2
              </div>
              <p>
                • Learned Bell mobile products and plans <br />
                • Provided customer service <br />
                • Sold mobility, home phone, and TV packages <br />
                • Sold mobile devices and other electronic equipment <br />
                • Managed and organized store stock <br />
                • Listened to customers and matched their requirements to supported
                products
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">May 2016 - August 2017</span>
              <div className="mt-3">
                <Image
                  className="max-w-full mx-auto"
                  style={{ width: '300px' }}
                  src="/img/thesource.png"
                  alt="The Source"
                  width={300}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      {/* Skills */}
      <section className="resume-section px-3 lg:px-12" id="skills">
        <div className="my-auto">
          <h2 className="mb-12">Skills</h2>
          <div className="subheading mb-4">Languages &amp; Technologies</div>
          <ul className="dev-icons mb-6">
            <li className="list-inline-item"><i className="fab fa-java" /></li>
            <li className="list-inline-item"><i className="fab">C</i></li>
            <li className="list-inline-item"><i className="fab fa-react" /></li>
            <li className="list-inline-item"><i className="fab fa-angular" /></li>
            <li className="list-inline-item"><i className="fab fa-html5" /></li>
            <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
            <li className="list-inline-item"><i className="fab fa-sass" /></li>
            <li className="list-inline-item"><i className="fab">Bootstrap</i></li>
            <li className="list-inline-item"><i className="fab fa-js-square" /></li>
            <li className="list-inline-item"><i className="fab">JSON</i></li>
            <li className="list-inline-item"><i className="fab fa-php" /></li>
            <li className="list-inline-item"><i className="fab">MySQL</i></li>
            <li className="list-inline-item"><i className="fab fa-python" /></li>
            <li className="list-inline-item"><i className="fab">UNIX</i></li>
            <li className="list-inline-item"><i className="fab fa-git" /></li>
            <li className="list-inline-item"><i className="fab fa-linux" /></li>
            <li className="list-inline-item"><i className="fab fa-windows" /></li>
          </ul>

          <div className="subheading mb-4">Additional Qualifications</div>
          <ul className="list-none pl-6 mb-0 space-y-2">
            {[
              'Strong problem solving, analytical & mathematical skills',
              'Knowledge of UML (Unified Modeling Language) diagrams',
              'Knowledge of wide range of software & hardware technologies',
              'Knowledge of the software development life cycle',
              'Ability to handle people, problems or situations with honesty, integrity, & personal ethics',
              'Ability to assist associates & work in a fast-paced environment',
              'Ability to work a flexible job schedule',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <i className="fa fa-check text-primary mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      {/* Interests */}
      <section className="resume-section px-3 lg:px-12" id="interests">
        <div className="my-auto">
          <h2 className="mb-12">Interests</h2>
          <p className="text-lg font-normal">
            Aside from Software Development and Web Design, I enjoy learning about
            new mobile and computer technology. In addition, I enjoy photography,
            photo-editing and video-editing. Other than technology, I enjoy learning
            about social and physical geography as well as watching anime and
            science fiction, with the occasional nature and space documentaries.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      {/* Photography / Slideshow */}
      <Slide />
    </div>
  )
}
