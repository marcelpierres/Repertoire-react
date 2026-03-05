import Slide from './Slide'
import Image from 'next/image'

/* ── Tech skills data ────────────────────────────────────────────── */
const techSkills = [
  { icon: 'fab fa-salesforce', label: 'Salesforce' },
  { text: 'NS',              label: 'NetSuite' },
  { text: 'SI',              label: 'Sage Intacct' },
  { text: 'API',             label: 'API / REST' },
  { text: 'JSON',            label: 'JSON' },
  { text: 'CSV',             label: 'CSV' },
  { text: 'SQL',             label: 'MySQL' },
  { icon: 'fab fa-python',   label: 'Python' },
  { text: 'UNIX',            label: 'UNIX' },
  { icon: 'fab fa-git',      label: 'Git' },
  { icon: 'fab fa-linux',    label: 'Linux' },
  { icon: 'fab fa-windows',  label: 'Windows' },
]

/* ── Additional qualifications ───────────────────────────────────── */
const qualifications = [
  'Problem Solving & Analytics',
  'Customer Success Management',
  'Software & Hardware Expertise',
  'Strategic Success Planning',
  'Community Engagement & Enablement',
  'Cross-Functional Collaboration',
  'Technical Adaptability (SaaS, APIs, ERP)',
  'Leadership & Team Coaching',
  'Communication & Presentation',
  'Integrity & Personal Ethics',
  'Fast-Paced Environment',
  'Flexible Scheduling',
]

export default function MainPage() {
  return (
    <div id="page-top" className="bg-dot-grid">

      {/* ================================================================
          ABOUT
      ================================================================ */}
      <section className="resume-section px-3 lg:px-12" id="about">
        <div className="my-auto">
          <span className="section-badge fade-in-up">Portfolio</span>

          <h1 className="mb-2 fade-in-up-d1">
            Marcel-Pierre
            <br />
            <span className="text-gradient">Samuels</span>
          </h1>

          <div className="subheading mb-8 fade-in-up-d2">
            <a
              href="mailto:marcelpierre.s@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              marcelpierre.s@gmail.com
            </a>
          </div>

          <p className="text-base leading-relaxed mb-10 max-w-2xl fade-in-up-d2">
            Customer Success–driven <b>Senior Technical Analyst</b> with{' '}
            <b>6+ years</b> of experience supporting enterprise clients in SaaS
            environments. Proven track record of building trusted advisor
            relationships, guiding customers through onboarding, adoption,
            maturity, and expansion. Skilled in managing escalations, customer
            product training, and aligning technology solutions with customer
            goals. Collaborates cross-functionally with Support, Product, and
            Engineering teams to drive measurable outcomes, reduce churn, and
            grow long-term partnerships.{' '}
            I take pride in my ability to empower others through clear guidance
            and coaching — a strength recognized when I received the{' '}
            <b>Empowerment Quadient Hero Award</b> in 2024.
          </p>

          <div className="social-icons fade-in-up-d3">
            <a href="https://www.linkedin.com/in/marcel-pierre-samuels-332525163"
               aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/marcelpierres" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://gitlab.com/marcelpierres" aria-label="GitLab">
              <i className="fab fa-gitlab" />
            </a>
            <a href="https://www.instagram.com/mpdsamuels/" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>

      <hr className="m-0 border-primary/10" />

      {/* ================================================================
          AWARDS
      ================================================================ */}
      <section className="resume-section px-3 lg:px-12" id="experience">
        <div className="my-auto">
          <span className="section-badge">Recognition</span>
          <h2 className="mb-10">Awards</h2>

          <div className="resume-card max-w-3xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                {/* Gold trophy icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-500 text-lg shrink-0">
                    🏆
                  </div>
                  <h3 className="mb-0">Empowerment Quadient Hero Award</h3>
                </div>
                <p className="subheading-sm mb-3">
                  Gold — Quadient Hero Empowerment Category
                </p>
                <p className="text-sm leading-relaxed">
                  Awarded to a creative and open-minded colleague who embraced
                  and drove change within Quadient 2024. They empowered others
                  to elevate their learning and succeed, approaching their own
                  role with knowledge, trust, and confidence.
                </p>
              </div>
              <span className="tech-tag self-start whitespace-nowrap">April 2025</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0 border-primary/10" />

      {/* ================================================================
          EDUCATION
      ================================================================ */}
      <section className="resume-section px-3 lg:px-12" id="education">
        <div className="my-auto">
          <span className="section-badge">Learning</span>
          <h2 className="mb-10">Education</h2>

          <div className="resume-card max-w-3xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="mb-1">Ryerson University</h3>
                <p className="subheading mb-1">
                  Bachelor of Science — Computer Science Honors
                </p>
                <p className="subheading-sm">Minor in Geography</p>
              </div>
              <div className="shrink-0 md:text-right">
                <Image
                  src="/img/ryerson.png"
                  alt="Ryerson University"
                  width={260}
                  height={100}
                  className="max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0 border-primary/10" />

      {/* ================================================================
          CERTIFICATIONS
      ================================================================ */}
      <section className="resume-section px-3 lg:px-12" id="cert">
        <div className="my-auto">
          <span className="section-badge">Credentials</span>
          <h2 className="mb-10">Certifications</h2>

          <div className="resume-card max-w-3xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="mb-1">CompTIA</h3>
                <p className="subheading mb-2">CompTIA Network+ CE</p>
                <span className="tech-tag">March 2021 – March 2028</span>
              </div>
              <div className="shrink-0 md:text-right">
                <Image
                  src="/img/cert1.png"
                  alt="CompTIA Network+"
                  width={260}
                  height={100}
                  className="max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0 border-primary/10" />

      {/* ================================================================
          WORK EXPERIENCE  — Timeline layout (Linkify-inspired)
      ================================================================ */}
      <section className="resume-section px-3 lg:px-12" id="workex">
        <div className="my-auto">
          <span className="section-badge">Career</span>
          <h2 className="mb-10">Work Experience</h2>

          <div className="timeline">

            {/* Quadient */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="resume-card">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="mb-1">
                      Quadient / YayPay
                    </h3>
                    <p className="subheading-sm mb-3">
                      Senior L3 Technical Analyst Team Lead ·{' '}
                      150 Steelcase Rd W, Markham ON
                    </p>
                    <ul className="space-y-1.5 text-sm leading-relaxed">
                      {[
                        'Primary escalation point for enterprise accounts, ensuring retention and satisfaction across ERP and SaaS integrations (NetSuite, Intacct, Salesforce, API/FTP/SFTP, IMAP/SMTP).',
                        'Acted as strategic advisor to enterprise clients, guiding onboarding, adoption, maturity, and expansion.',
                        'Maintained a 94.44% competency performance score across Q3 2025 by monitoring customer health, CSAT, SLA adherence, and churn risk.',
                        'Delivered customer enablement sessions, success workshops, and workflow optimization training.',
                        'Led team training sessions with success playbooks, technical guidance, and adoption strategies.',
                        'Collaborated cross-functionally with Engineering, Product, and Support to advocate customer priorities.',
                        'Prepared Confluence guides, success templates, and playbooks to scale enablement across accounts.',
                        'Led daily team standups, managed accounts and tickets via Salesforce.',
                      ].map((b) => (
                        <li key={b} className="flex gap-2">
                          <i className="fa fa-check text-primary mt-0.5 shrink-0 text-xs" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0 md:text-right flex flex-col items-start md:items-end gap-2">
                    <span className="tech-tag whitespace-nowrap">Aug 2021 – Present</span>
                    <Image
                      src="/img/quadient-logo.png"
                      alt="Quadient"
                      width={180}
                      height={70}
                      className="max-w-[180px] object-contain mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Rogers */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="resume-card">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="mb-1">Rogers</h3>
                    <p className="subheading-sm mb-3">
                      Technical Support Team Manager ·{' '}
                      855 York Mills Rd, North York ON
                    </p>
                    <ul className="space-y-1.5 text-sm leading-relaxed">
                      {[
                        'Developed strong relationships with enterprise and VIP clients as their main escalation point, ensuring retention.',
                        'Collaborated cross-functionally to resolve complex network challenges, preventing churn through proactive engagement.',
                        'Delivered executive-level support for Office of the President clients.',
                        'Led a team of technical analysts, coaching them on customer-first strategies and scalable success practices.',
                        'Managed Service Level across each Technical line of Business.',
                        'Oversaw real-time analytics and reporting.',
                      ].map((b) => (
                        <li key={b} className="flex gap-2">
                          <i className="fa fa-check text-primary mt-0.5 shrink-0 text-xs" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0 md:text-right flex flex-col items-start md:items-end gap-2">
                    <span className="tech-tag whitespace-nowrap">Apr 2019 – Aug 2021</span>
                    <Image
                      src="/img/rogers.png"
                      alt="Rogers"
                      width={180}
                      height={70}
                      className="max-w-[180px] object-contain mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* VALX */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="resume-card">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="mb-1">
                      <a href="https://valx.ca/" className="text-primary hover:text-primary/80 transition-colors">
                        VALX
                      </a>
                    </h3>
                    <p className="subheading-sm mb-3">
                      Front-End Developer · Ryerson University Student Startup
                    </p>
                    <ul className="space-y-1.5 text-sm leading-relaxed">
                      {[
                        'Designed and programmed the Valx website.',
                        'Fixed bugs and planned future functionality.',
                        'Used GitHub and GitLab to track issues and set deadlines.',
                        'Managed a team of 2 other developers.',
                        'Advertised the startup.',
                      ].map((b) => (
                        <li key={b} className="flex gap-2">
                          <i className="fa fa-check text-primary mt-0.5 shrink-0 text-xs" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0 md:text-right flex flex-col items-start md:items-end gap-2">
                    <span className="tech-tag whitespace-nowrap">Jun 2018 – Jan 2020</span>
                    <Image
                      src="/img/valxlogo.png"
                      alt="Valx"
                      width={180}
                      height={70}
                      className="max-w-[180px] object-contain mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Jonar */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="resume-card">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="mb-1">Jonar</h3>
                    <p className="subheading-sm mb-3">
                      Software Developer Internship ·{' '}
                      55 Rue de Louvain O, Montreal QC
                    </p>
                    <ul className="space-y-1.5 text-sm leading-relaxed">
                      {[
                        'Experienced querying with Postgres in a professional environment.',
                        'Fixed bugs within the company\'s ERP software (Paragon).',
                        'Learned the use and functionality of the Amazon API.',
                        'Took part in building a functional integration between Paragon and the Amazon API.',
                      ].map((b) => (
                        <li key={b} className="flex gap-2">
                          <i className="fa fa-check text-primary mt-0.5 shrink-0 text-xs" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0 md:text-right flex flex-col items-start md:items-end gap-2">
                    <span className="tech-tag whitespace-nowrap">Nov 2018 – Feb 2019</span>
                    <Image
                      src="/img/jonar.jpg"
                      alt="Jonar"
                      width={180}
                      height={70}
                      className="max-w-[180px] object-contain mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Geek Squad */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="resume-card">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="mb-1">Geek Squad</h3>
                    <p className="subheading-sm mb-3">
                      Counter Intelligence Agent ·{' '}
                      Best Buy, 480 Progress Ave, Scarborough ON
                    </p>
                    <ul className="space-y-1.5 text-sm leading-relaxed">
                      {[
                        'Diagnosed hardware and software issues with Laptops, Desktops and Tablets.',
                        'Repaired and imaged Desktops and Laptops; replaced Hard Drives.',
                        'Upgraded software for Windows and macOS.',
                        'Installed and configured Microsoft Office, Outlook, and other software.',
                        'Provided customer service and matched clients to supported products.',
                      ].map((b) => (
                        <li key={b} className="flex gap-2">
                          <i className="fa fa-check text-primary mt-0.5 shrink-0 text-xs" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0 md:text-right flex flex-col items-start md:items-end gap-2">
                    <span className="tech-tag whitespace-nowrap">Sep 2018 – Nov 2018</span>
                    <Image
                      src="/img/geekquad.png"
                      alt="Geek Squad"
                      width={180}
                      height={70}
                      className="max-w-[180px] object-contain mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* The Source */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="resume-card">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="mb-1">Sales Associate</h3>
                    <p className="subheading-sm mb-3">
                      The Source · RBC Plaza, 200 Bay St, Toronto ON
                    </p>
                    <ul className="space-y-1.5 text-sm leading-relaxed">
                      {[
                        'Learned Bell mobile products and plans.',
                        'Sold mobility, home phone, and TV packages.',
                        'Sold mobile devices and other electronic equipment.',
                        'Managed and organised store stock.',
                        'Listened to customers and matched their requirements to products.',
                      ].map((b) => (
                        <li key={b} className="flex gap-2">
                          <i className="fa fa-check text-primary mt-0.5 shrink-0 text-xs" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0 md:text-right flex flex-col items-start md:items-end gap-2">
                    <span className="tech-tag whitespace-nowrap">May 2016 – Aug 2017</span>
                    <Image
                      src="/img/thesource.png"
                      alt="The Source"
                      width={180}
                      height={70}
                      className="max-w-[180px] object-contain mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="m-0 border-primary/10" />

      {/* ================================================================
          SKILLS — BentoGrid-inspired icon grid
      ================================================================ */}
      <section className="resume-section px-3 lg:px-12" id="skills">
        <div className="my-auto">
          <span className="section-badge">Toolbelt</span>
          <h2 className="mb-10">Skills</h2>

          {/* Icon grid */}
          <p className="subheading mb-5">Languages &amp; Technologies</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mb-12">
            {techSkills.map((skill) => (
              <div key={skill.label} className="skill-icon-card">
                {skill.icon
                  ? <i className={skill.icon} />
                  : <span className="skill-text-icon">{skill.text}</span>
                }
                <span className="skill-label">{skill.label}</span>
              </div>
            ))}
          </div>

          {/* Qualification chips */}
          <p className="subheading mb-5">Additional Qualifications</p>
          <div className="flex flex-wrap gap-2">
            {qualifications.map((q) => (
              <span key={q} className="qual-chip">
                <i className="fa fa-check text-primary text-xs" />
                {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      <hr className="m-0 border-primary/10" />

      {/* ================================================================
          INTERESTS
      ================================================================ */}
      <section className="resume-section px-3 lg:px-12" id="interests">
        <div className="my-auto">
          <span className="section-badge">Personal</span>
          <h2 className="mb-10">Interests</h2>

          <div className="resume-card max-w-3xl">
            <p className="text-base leading-relaxed">
              Aside from IT Customer Success and Team Management, I enjoy
              learning about new mobile and computer technology. In addition,
              I enjoy building servers, hosting services, photography, and
              gaming. Beyond tech, I enjoy learning about socio-economic and
              physical geography, as well as watching anime and science
              fiction — with the occasional nature and space documentary.
            </p>
          </div>
        </div>
      </section>

      <hr className="m-0 border-primary/10" />

      {/* Photography carousel */}
      <Slide />
    </div>
  )
}
