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
              Customer Success–driven Senior Technical Analyst with <b>6+ years</b> of experience supporting enterprise clients in SaaS environments. 
              Proven track record of building trusted advisor relationships, guiding customers through onboarding, adoption, maturity, and expansion. 
              Skilled in managing escalations, customer product training, and aligning technology solutions with customer goals. 
              Collaborates cross-functionally with Support, Product, and Engineering teams to drive measurable outcomes, reduce churn, and grow long-term partnerships.
              I take pride in my ability to empower others through clear guidance and coaching, a strength recognized when I received the Empowerment Quadient Hero Award in 2024 for my contributions at Quadient.
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

      {/* Awards */}
      <section className="resume-section px-3 lg:px-12" id="experience">
        <div className="my-auto">
          <h2 className="mb-12">Awards</h2>

          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                Empowerment Quadient Hero Award
              </h3>
              <div className="subheading mb-4">Won Gold for the Quadient Hero Empowerment Category</div>
              <p>
                This is awarded to a creative and open-minded collegue who embraced and drove change within Quadient 2024. 
                They empowered others to elevate their learning and succeed. They approached their own role with knowledge, trust and confidence.
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">April 2025</span>
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
             {/* <span className="text-primary">September 2014 - October 2018</span> */}
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
              <span className="text-primary">March 2021 - March 2028</span>
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



          {/* Quadient */}
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Quadient / YayPay – Senior L3 Technical Analyst Team Lead</h3>
              <div className="subheading mb-4">
                150 Steelcase Rd W, Markham, ON L3R 3J9
              </div>
              <p>
                • Serve as primary escalation point for enterprise accounts, 
                ensuring retention and satisfaction across ERP and SaaS integrations (NetSuite, Intacct, Salesforce, API/FTP/SFTP, IMAP/SMTP). <br />
                • Acted as strategic advisor to enterprise clients, guiding onboarding, adoption, maturity, and expansion, 
                aligning platform features with business outcomes. <br />
                • Monitored customer health and engagement metrics (CSAT, SLA adherence, churn risk), 
                proactively mitigate risks and identify expansion opportunities maintaining a 94.44% competency performance score across Q3 2025. <br />
                • Deliver customer enablement sessions, success workshops, and workflow optimization training to advance adoption and engagement. <br />
                • Led team training sessions and workshops for internal teams with success playbooks, technical guidance, and adoption strategies.
                <br />
                • Collaborate with cross-functional teams (Engineering, Product, Support) to resolve issues, advocate customer priorities, and influence product roadmap. <br />
                • Prepare and deliver customer-facing resources (Confluence guides, success templates, playbooks) to scale enablement across accounts. <br />
                • Lead daily team standups, oversee hotfixes/updates, and manage accounts/tickets via Salesforce while ensuring seamless integrations. <br />
               
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">August 2021 - Present</span>
              <div className="mt-3">
                <Image
                  className="max-w-full mx-auto"
                  style={{ width: '300px' }}
                  src="/img/quadient-logo.png"
                  alt="Quadient"
                  width={300}
                  height={120}
                />
              </div>
            </div>
          </div>


          {/* Rogers */}
          <div className="resume-item flex flex-col md:flex-row mb-12">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Rogers – Technical Support Team Manager</h3>
              <div className="subheading mb-4">
                Rogers 855 York Mills Rd, North York, ON M3B 1Z1
              </div>
              <p>
                • Developed strong relationships with enterprise and VIP clients, acting as their main escalation point of contact to ensure retention and customer success. <br />
                • Collaborated cross-functionally to resolve complex network challenges, preventing churn through proactive engagement. <br />
                • Delivered executive-level support for Office of the President clients, ensuring long-term satisfaction and loyalty. <br />
                • Led a team of technical analysts, coaching them on customer-first strategies and scalable success practices. <br />
                • Monitored engagement and proactively addressed issues, resulting in improved resolution times and increased client trust.
                <br />
                • Provided opportunities for Career development when coaching 1 on 1 <br />
                • Managed Service Level each Technical line of Business <br />
                • Oversaw real time Analytics, Reporting <br />
                
              </p>
            </div>
            <div className="resume-date md:text-right mt-2 md:mt-0">
              <span className="text-primary">April 2019 - August 2021</span>
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
            <li className="list-inline-item"><i className="fab fa-salesforce" /></li>
            <li className="list-inline-item"><i className="fab">NetSuite</i></li>
            <li className="list-inline-item"><i className="fab">Sage Intacct</i></li>
            <li className="list-inline-item"><i className="fab"/>API</li>
            <li className="list-inline-item"><i className="fab">JSON</i></li>
            <li className="list-inline-item"><i className="fab"/>CSV</li>
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
              'Customer Success & Relationship Management',
              'Knowledge of wide range of software & hardware technologies',
              'Strategic Success Planning',
              'Community Engagement & Enablement',
              'Cross-Functional Collaboration',
              'Technical Adaptability (SaaS, APIs, ERP)',
              'Leadership & Team Coaching',
              'Communication & Presentation',
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
            Aside from IT Customer Success and Team Management, I enjoy learning about
            new mobile and computer technology. In addition, I enjoy  building servers, hosting services,
            photography, and gaming. Other than technology, I enjoy learning
            about socio-economic and physical geography as well as watching anime and
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
