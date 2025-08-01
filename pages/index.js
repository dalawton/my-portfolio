// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import experienceStyles from '../styles/Experience.module.css'
import projectsStyles from '../styles/Projects.module.css'
import connectStyles from '../styles/Connect.module.css'

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "EIC Labratories",
      period: "Summer 2025",
      location: "Norwood, MA",
      description: "Developed inventory database and tracking systems to automize inventory counts",
      responsibilities: [
        "TO BE ADDED"
      ],
      technologies: ["PHP", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      id: 2,
      title: "Quality Control Specialist Intern",
      company: "DS Graphics | University Wilde",
      period: "Summer 2024",
      location: "Lowell, MA",
      description: "Conducted quality control checks and developed system processes",
      responsibilities: [
        "TO BE ADDED"
      ],
      technologies: ["TODO"],
    },
  ];

  const projects = [
    {
      id: 3,
      title: "EIC Inventory Tracker",
      description: "Automated inventory management system that syncs with SQL database to provide real time inventory counts. Created an online order form for new parts to send emails and update to database on form submissions. Additional functionality for tracking completed batteries and repairs via serial numbers.",
      technologies: ["PHP", "JavaScript", "SQL", "HTML/CSS"],
      link: "https://github.com/dalawton/eic-inventory-final",
    },
    {
      id: 4,
      title: "Bug Bot",
      description: "Discord bot that provides current jobs, events and resources for career development.",
      technologies: ["Python", "Nox", "Discord.py"],
      link: "https://github.com/innovateorange/DiscordBot",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website with unique styling.",
      technologies: ["Next.js", "JavaScript", "HTML/CSS"],
      link: "https://github.com/dalawton/my-portfolio",
    },
    {
      id: 6,
      title: "Movie Tinder",
      description: "Website that uses Movie API data to generate movies to 'swipe' to like and add to library of liked movies.",
      technologies: ["TypeScript", "React", "Next.js", "HTML/CSS"],
      link: "https://github.com/dalawton/movie-tinder",
    },
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className={experienceStyles.container}>
      <Head>
        <title>Danielle - Computer Science Portfolio</title>
        <meta name="description" content="Danielle's Computer Science Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={experienceStyles.header}>
        <nav className={experienceStyles.nav}>
          <a href="#experience" className={experienceStyles.navLink}>Experience</a>
          <a href="#projects" className={experienceStyles.navLink}>Projects</a>
        </nav>
      </header>

      

      <section id="experience" className={experienceStyles.experienceSection}>
        <main className={experienceStyles.main}>
        <div className={experienceStyles.textSection}>
          <div className={experienceStyles.subtitle}>
            <p>Hi, I&apos;m Danielle Lawton! Currently I&apos;m a junior studying Computer Science at Syracuse University! I serve as the Secretary for Innovate Orange and I&apos;m a member of Delta Phi Epsilon!</p>
            <div className={experienceStyles.illustration}>
              <Image
                src="/peace-frog.png"
                alt="Hi Frog"
                width={180}
                height={180}
                priority
              />
            </div>
          </div>
          <div className={experienceStyles.resumeSection}>
            <a href="/DanielleLawton-Resume.pdf" download={"DanielleLawton-Resume.pdf"} className={experienceStyles.resumeLink}>
              Download My Resume
            </a>
            <a href="#connect" className={experienceStyles.resumeLink}>Connect With Me</a>
          </div>

        </div>
      </main>
        <div className={experienceStyles.experienceContainer}>
          <div className={experienceStyles.sectionTitleRow}>
            <h2 className={experienceStyles.sectionTitle}>Experience</h2>
          </div>
          
          <div className={experienceStyles.timeline}>
            {experiences.map((exp, index) => (
              <div key={exp.id} className={experienceStyles.timelineItem}>
                <div className={experienceStyles.timelineMarker}>
                  <div className={experienceStyles.markerDot}></div>
                  {index < experiences.length && <div className={experienceStyles.timelineLine}></div>}
                </div>
                
                <div className={experienceStyles.experienceCard}>
                  <div className={experienceStyles.cardHeader} onClick={() => toggleCard(exp.id)}>
                    <div className={experienceStyles.companyInfo}>
                      <div className={experienceStyles.logoContainer}>
                      </div>
                      <div className={experienceStyles.titleInfo}>
                        <h3 className={experienceStyles.jobTitle}>{exp.title}</h3>
                        <h4 className={experienceStyles.companyName}>{exp.company}</h4>
                        <div className={experienceStyles.periodLocation}>
                          <span className={experienceStyles.period}>{exp.period}</span>
                          <span className={experienceStyles.location}>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`${experienceStyles.expandIcon} ${expandedCard === exp.id ? experienceStyles.expanded : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6,9 12,15 18,9"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  <div className={experienceStyles.cardDescription}>
                    <p>{exp.description}</p>
                  </div>
                  
                  <div className={`${experienceStyles.cardDetails} ${expandedCard === exp.id ? experienceStyles.expanded : ''}`}>
                    <div className={experienceStyles.responsibilities}>
                      <h5>Key Responsibilities:</h5>
                      <ul>
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={experienceStyles.technologies}>
                      <h5>Technologies Used:</h5>
                      <div className={experienceStyles.techTags}>
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className={experienceStyles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={projectsStyles.projectsSection}>
        <div className={projectsStyles.projectsContainer}>
          <h2 className={projectsStyles.sectionTitle}>Projects</h2>
          <div className={projectsStyles.timeline}>
            {projects.map((proj) => (
              <div key={proj.id} className={projectsStyles.timelineItem}>
                <div className={projectsStyles.projectsCard}>
                  <div className={projectsStyles.cardHeader} onClick={() => toggleCard(proj.id)}>
                    <div className={projectsStyles.companyInfo}>
                      <div className={projectsStyles.logoContainer}>
                      </div>
                      <div className={projectsStyles.titleInfo}>
                        <h3 className={projectsStyles.jobTitle}>{proj.title}</h3>
                      </div>
                    </div>
                    <div className={projectsStyles.technologies}>
                      <div className={projectsStyles.techTags}>
                        {proj.technologies.map((tech, i) => (
                          <span key={i} className={projectsStyles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={projectsStyles.cardDescription}>
                    <p>{proj.description}</p>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className={projectsStyles.projectLink}>
                      {proj.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="connect" className={connectStyles.connectSection}>
        <div className={connectStyles.connectContainer}>
          <div className={connectStyles.main}>
            <h2 className={connectStyles.sectionTitle}>Connect With Me</h2>
            <div className={connectStyles.socialLinks}>
              <a href="https://www.linkedin.com/in/danielle-lawton/" target="_blank" rel="noopener noreferrer" className={connectStyles.socialLink}>
                <span>LinkedIn</span>
              </a>
              <a href="https://www.github.com/dalawton" target="_blank" rel="noopener noreferrer" className={connectStyles.socialLink}>
                <span>GitHub</span>
              </a>
              <a href="mailto:daniellelawton8@gmail.com" className={connectStyles.socialLink}>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}