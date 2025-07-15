// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import homeStyles from '../styles/Home.module.css'
import experienceStyles from '../styles/Experience.module.css'
import aboutStyles from '../styles/About.module.css'

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
      technologies: ["PHP", "JavaScript", "SQL", "HTML"],
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

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Danielle - Computer Science Portfolio</title>
        <meta name="description" content="Danielle's Computer Science Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={homeStyles.header}>
        <nav className={homeStyles.nav}>
          <a href="#experience" className={homeStyles.navLink}>Experience</a>
          <a href="#about" className={homeStyles.navLink}>About</a>
          <a href="#projects" className={homeStyles.navLink}>Projects</a>
          <a href="#contact" className={homeStyles.navLink}>Contact</a>
        </nav>
      </header>

      <main className={homeStyles.main}>
        <div className={homeStyles.content}>
          <div className={homeStyles.textSection}>
            <h1 className={homeStyles.title}>Hi, I&apos;m Danielle</h1>
            <p className={homeStyles.subtitle}>Computer Science Student at Syracuse University</p>
          </div>
          
          <div className={homeStyles.illustration}>
            <Image
              src="/peace-frog.png"
              width={400}
              height={500}
              priority
            />
          </div>
        </div>
      </main>

      <section id="experience" className={experienceStyles.experienceSection}>
        <div className={experienceStyles.experienceContainer}>
          <h2 className={experienceStyles.sectionTitle}>Experience
            <div className={homeStyles.illustration}>
              <Image 
                src="/frog-image.png"
                width={200}
                height={300}
                priority
              />
            </div>
          </h2>
          
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

      <section id="about" className={aboutStyles.aboutSection}>
        <div className={aboutStyles.aboutContainer}>
          <h2 className={aboutStyles.sectionTitle}>About Me</h2>
        </div>
      </section>
    </div>
  )
}